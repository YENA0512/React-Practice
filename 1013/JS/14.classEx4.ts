{

    type Kinds = '포유류' | '파충류' | '양서류' | '조류';
    abstract class Animal {
        private name: string;
        private kind: Kinds;
        private food: string;
        constructor(name: string, kind: Kinds, food: string) {
            this.name = name;
            this.kind = kind;
            this.food = food;
        }

        move(): void {
            console.log(` ${this.name} 이동중.... `);
        }
        eat(): void {
            console.log(`${this.food} 먹는중 `);
        }
        abstract cry(): void;
    }

    class Cat extends Animal {

        constructor(name: string, kind: Kinds, food: string) {
            super(name, kind, food);

        }

        cry(): void {
            console.log("냐오오옹")
        }

    }

    class Chicken extends Animal {
        private egg: number = 0;
        constructor(name: string, kind: Kinds, food: string) {
            super(name, kind, food);
        }

        cry(): void {
            console.log("꼬끼오~~~  ")
        }

        layEgg() {
            console.log("알을 낳았다 뿅! ")
            this.egg += 1;
        }

    }

    const nabi = new Cat('나비', '포유류', '참치캔');
    //console.log(nabi);
    nabi.cry();
    nabi.eat();

    const poyo = new Chicken('포요', '조류', '지렁이');
    //console.log(poyo);
    poyo.layEgg();
    poyo.cry();
}