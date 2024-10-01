import Animal from "./Animal";

class Dog extends Animal {
    constructor(name, age, weight, color, isVaccinated, breed, furType, isGuideDog) {
        super(name, age, weight, color, isVaccinated, breed, furType);
        this.isGuideDog = isGuideDog;
    }
}

export default Dog;