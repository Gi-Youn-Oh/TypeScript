class Car {
    engine = 0;
    move() {
        const engine = this.engine + 1;
        console.log("engine test");
        console.log(engine);
    }
}

const car = new Car();
car.move();