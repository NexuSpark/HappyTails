import Animal from "./Animal";

class Cat extends Animal {
    constructor(name, age, weight, color, isVaccinated, breed, furType, likesClimbing) {
        super(name, age, weight, color, isVaccinated, breed, furType);
        this.likesClimbing = likesClimbing;
    }
}
      
export default Cat;