import Animal from "./Animal";

class Rabbit extends Animal {
    constructor(name, age, weight, color, isVaccinated, breed, furType, likesDig) {
        super(name, age, weight, color, isVaccinated, breed, furType);
        this.likesDig = likesDig;
    }
}

export default Rabbit;