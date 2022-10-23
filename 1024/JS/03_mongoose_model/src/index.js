const mongoose = require("mongoose");
const sampleCoffees = require("../sample.json");

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  const coffeeSchema = new mongoose.Schema(
    {
      type: {
        type: String,
        enum: [
          "espresso",
          "americano",
          "ice americano",
          "cappuccino",
          "ice cappuccino",
          "latte",
          "ice latte",
          "cold brew",
        ],
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
      versionKey: false,
    }
  );

  const Coffee = mongoose.model("Coffee", coffeeSchema);

  // 먼저 Coffee collection을 초기화
  await Coffee.deleteMany({});
  // 일단 Coffee collection에 sample coffee 데이터를 추가
  await Coffee.insertMany(sampleCoffees);

  /**
   * <model_name>.<CRUD_method> 패턴
   */
  // #1 create
  await Coffee.create({
    type: "espresso",
    orderedBy: "Linda Presco",
    price: "2500",
  });

  // #2 read
  const coffeeLinda = await Coffee.findOne({
    type: "espresso",
    orderedBy: "Linda Presco",
  });
  console.log("\n\n추가한 Linda의 커피: ");
  console.log(coffeeLinda);

  // #3 update
  const updateResult = await Coffee.updateOne(
    { type: coffeeLinda._id },
    { type: "americano", price: 3000 }
  );
  console.log("\n\n업데이트 결과: ");
  console.log(updateResult);

  const updatedCoffeeLinda = await Coffee.findById(coffeeLinda._id);
  console.log("변경된 값: ");
  console.log(updatedCoffeeLinda);

  // find와 udpate를 한 번에
  const finalCoffeeLinda = await Coffee.findOneAndUpdate(
    { _id: coffeeLinda._id },
    { price: 10000 },
    { new: true }
  );
  console.log("최종 변경 값: ");
  console.log(finalCoffeeLinda);

  // #4 delete
  await Coffee.deleteOne({ _id: coffeeLinda._id });

  /**
   * <model_instance>.save()
   */
  // #1 create
  const coffeeMike = new Coffee({
    type: "americano",
    orderedBy: "Mike Anderson",
    price: 4500,
  });
  // MongoDB에 Mike Anderson의 커피를 저장
  await coffeeMike.save();

  // #2 update
  const coffeeMike1 = await Coffee.findOne({ _id: coffeeMike._id });
  console.log("\n\n추가된 Coffee document: ");
  console.log(coffeeMike1);

  coffeeMike1.price = 5000;
  coffeeMike1.orderedBy = "Andreas Deno";
  // MongoDB에 수정사항을 저장, save 메소드는 validation은 무조건 진행한다!!
  await coffeeMike1.save();

  // lean
  const coffeeAndreas = await Coffee.findById(coffeeMike1._id).lean();
  console.log("\n\nHydrated Document와 POJO의 차이: ");
  console.dir(coffeeMike1);
  console.dir(coffeeAndreas);

  const allCoffees = await Coffee.find().lean();
  console.log("\nPOJO형식의 커피 document들: ");
  console.dir(allCoffees);

  process.exit(0);
}

main();
