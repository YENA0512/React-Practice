const crypto = require("crypto");
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secret = "bpD6HJhBWhGFmmnpB9tf"; // JWT 서명을 위한 임의의 secret 값

const app = express();

app.use(express.json());

const USER_LIST = [];

const COFFEE_LIST = [];

// Sign-Up(가입)
app.post("/auth/sign-up", async (req, res) => {
  const { email, password, type } = req.body;

  if (USER_LIST.findIndex((user) => user.email === email) > -1) {
    res.statusCode = 400;
    res.json({
      error: "이미 가입된 email입니다.",
      data: null,
    });
    return;
  }

  // 우선 비밀번호 해쉬화(암호화)
  const hashedPassword = await bcrypt.hash(password, 10); // 10은 saltRounds, salt값을 추출하는데 걸리는 시간을 정하는 cost factor. 숫자가 클수록 salt를 생성하는데 시간이(연산을 많이한다는 뜻) 더 걸리지만 그 만큼 예측하기 힘든 salt값을 만들 수 있다.

  const user = {
    email,
    password: hashedPassword,
    permission: {
      C: {},
      R: {},
      U: {},
      D: {},
    },
  };

  // 권한 설정
  if (type === "regular") {
    // 단골 손님은 주문한 커피를 교체 가능하다.
    user.permission.C.coffees = true; // 커피 주문 OK
    user.permission.R.coffees = true; // 주문한 커피 가져가기 OK
    user.permission.U.coffees = true; // 주문한 커피 교체 OK
    user.permission.D.coffees = true; // 주문한 커피 취소 OK
  } else {
    // 단골 손님 외에는 주만한 커피를 교체할 수 없다.
    user.permission.C.coffees = true; // 커피 주문 OK
    user.permission.R.coffees = true; // 주문한 커피 가져가기 OK
    user.permission.D.coffees = true; // 주문한 커피 취소 OK
  }

  // 회원 정보를 메모리에 저장
  USER_LIST.push(user);

  const token = jsonwebtoken.sign(
    {
      email: user.email,
      permission: user.permission,
    },
    secret,
    { expiresIn: "1h" }
  );

  res.json({
    error: null,
    data: token,
  });
});

// Authentication(인증)
app.post("/auth/sign-in", async (req, res, next) => {
  const { email, password } = req.body;

  const user = USER_LIST.find((user) => user.email === email);

  const isValidUser = await bcrypt.compare(password, user.password);

  if (!isValidUser) {
    const error = new Error("email 또는 패스워드가 일치하지 않습니다.");
    error.statusCode = 400;
    next(error);
    return; // 필수!!
  }

  const token = jsonwebtoken.sign(
    {
      email: user.email,
      permission: user.permission,
    },
    secret,
    { expiresIn: "1h" }
  );

  res.json({
    error: null,
    data: token,
  });
});

// Authorization(인가) - jwt pattern
app.use("/coffees", (req, res, next) => {
  if (req.headers["authorization"] === undefined) {
    res.status(404).json({
      error: "coffees에 접근할 수 없는 권한입니다.",
      data: null,
    }); // HTTP status: forbidden. 401과 404의 차이는?!
  }
  const token = req.headers["authorization"].slice(7);
  const userInfo = jsonwebtoken.verify(token, secret);

  res.locals.user = userInfo;
  next();
});

// crud는 C, R, U, D 중 하나
const checkCoffeeAuthzWith = (crud) => (req, res, next) => {
  const { user } = res.locals;
  if (user.permission[crud]?.coffees) {
    next();
    return;
  }
  const error = new Error("해당 리소스에 대한 접근 권한이 없습니다.");
  error.statusCode = 404;
  next(error);
};

app.get("/coffees", checkCoffeeAuthzWith("R"), (req, res) => {
  console.log("GET /coffees");
  const coffees = getAllCoffees();
  res.json({
    error: null,
    data: coffees,
  });
});

app.get("/coffees/:id", checkCoffeeAuthzWith("R"), (req, res) => {
  const { id } = req.params;
  console.log(`GET /coffees/${id}`);
  const coffee = getSingleCoffee(id);
  res.json({
    error: null,
    data: coffee,
  });
});

app.post("/coffees", checkCoffeeAuthzWith("C"), (req, res) => {
  console.log(`POST /coffees`);
  const { type, orderedBy, count } = req.body;
  const coffee = createCoffee({ type, orderedBy, count });
  res.statusCode = 201;
  res.json({
    error: null,
    data: coffee,
  });
});

app.put("/coffees/:id", checkCoffeeAuthzWith("U"), (req, res) => {
  const { id } = req.params;
  const { type, orderedBy, count } = req.body;
  console.log(`PUT /coffees/${id}`);
  const coffee = updateCoffee(id, { type, orderedBy, count });
  res.json({
    error: null,
    data: coffee,
  });
});

app.delete("/coffees/:id", checkCoffeeAuthzWith("D"), (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /coffees/${id}`);
  const coffee = deleteCoffee(id);
  res.json({
    error: null,
    data: coffee,
  });
});

// 해당되는 URL이 없을 때를 대비한 미들웨어
app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.statusCode = 404;
  next(error);
});

// 에러 핸들러 등록
app.use((error, req, res, next) => {
  console.log(error);
  res.statusCode = error.httpCode ?? 500;
  res.json({
    data: null,
    error: error.message,
  });
});

function createCoffee({ type, orderedBy, count }) {
  if (type === undefined) {
    const error = new Error(`커피 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (count !== undefined && count < 1) {
    const error = new Error(`커피 수량은 1보다 높아야합니다.`);
    error.statusCode = 400;
    throw error;
  }

  const totalCount = count ?? 1;
  const createdCoffees = new Array(totalCount);
  for (let i = 0; i < totalCount; i++) {
    createdCoffees[i] = {
      id: crypto.randomUUID(),
      type,
      orderedBy,
      count: count ?? 1,
    };
  }
  COFFEE_LIST.push(...createdCoffees);
  return createdCoffees;
}

function getAllCoffees() {
  return COFFEE_LIST;
}

function getSingleCoffee(id) {
  const coffeeId = COFFEE_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeId > -1) {
    return COFFEE_LIST[coffeeId];
  }
  const error = new Error(`아이디가 '${id}'인 커피를 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}

function updateCoffee(id, { type, orderedBy, count }) {
  const coffeeId = COFFEE_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeId === -1) {
    const error = new Error(`아이디가 '${id}'인 커피를 찾지 못했습니다.`);
    error.statusCode = 400;
    throw error;
  }
  COFFEE_LIST[coffeeId] = { id, type, orderedBy, count };
  return COFFEE_LIST[coffeeId];
}

function deleteCoffee(id) {
  const coffeeId = COFFEE_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeId > -1) {
    const [coffee] = COFFEE_LIST.splice(coffeeId, 1);
    return coffee;
  }
  const error = new Error(`아이디가 '${id}'인 커피를 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}

app.listen(3000, () => {
  console.log(`🚀 카페 서버가 포트 3000에서 운영중입니다.`);
});
