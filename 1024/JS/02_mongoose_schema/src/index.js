const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  const coffeeSchema = new mongoose.Schema(
    {
      type: {
        type: String,
        enum: ["americano", "cappuccino", "latte"],
        required: true,
      },
      orderedBy: {
        type: String,
        required: true,
        default: "Anonymous",
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    {
      collection: "Coffee", // 주의 collection 이름을 명시하지 않으면 아래 mongoose.model의 첫 번째 인자로 전달된 값을 복수형으로 해서 사용한다.
    }
  );

  const Coffee = mongoose.model("Coffee", coffeeSchema);

  // 일단 Coffee collection에 document가 있다면 모두 삭제해서 초기화
  await Coffee.deleteMany({});

  // 문제 없음
  await Coffee.create({
    type: "americano",
    orderedBy: "Dr. Doom",
    // price는 입력 안하면 자동으로 0으로 설정
  });

  // 문제 없음
  await Coffee.create({
    type: "latte",
    // orderedBy는 필수값이지만 default 속성이 설정되어있기 때문에 값을 설정하지 않다도 default값인 "Anonymous"로 됨
    // price는 입력 안하면 자동으로 0으로 설정
  });

  try {
    // 문제 있음: 필수값인 type을 명시하지 않음
    await Coffee.create({
      orderedBy: "John Doe",
      price: 3000,
    });
  } catch (error) {
    console.log(error);
    console.log("=> 필수값인 type이 없어서 에러");
  }

  try {
    // 문제 있음: type이 enum중의 하나가 아님
    await Coffee.create({
      type: "Mojito",
      orderedBy: "Ernest Hemingway",
      price: 12000,
    });
  } catch (error) {
    console.log(error);
    console.log(
      "=> type의 값이 americano, cappuccino, latte 중 하나가 아니라서 에러"
    );
  }
  process.exit(0);
}

main();
