import Dog from "./Dog.js";
import Cat from "./Cat.js";
import Rabbit from "./Rabbit.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("animal-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("animal-name").value;
        const age = document.getElementById("animal-age").value;
        const weight = document.getElementById("animal-weight").value;
        const color = document.getElementById("animal-color").value;
        const isVaccinated = document.getElementById("animal-vaccinated").checked;
        const breed = document.getElementById("animal-breed").value;
        const furType = document.getElementById("animal-fur-type").value;
        const isGuideDog = document.getElementById("dog-is-guide-dog").checked;
        const isClimbing = document.getElementById("cat-likes-climbing").checked;
        const isDigging = document.getElementById("rabbit-likes-dig").checked;

        const p = document.createElement("p");

        switch (document.getElementById("animal-species").value) {
            case "dog":
                const dog = new Dog(name, age, weight, color, isVaccinated, breed, furType, isGuideDog);
                p.textContent = `🐶 ${name}`
                break;
            case "cat":
                const cat = new Cat(name, age, weight, color, isVaccinated, breed, furType, isClimbing);
                p.textContent = `🐱 ${name}`
                break;
            case "rabbit":
                const rabbit = new Rabbit(name, age, weight, color, isVaccinated, breed, furType, isDigging);
                p.textContent = `🐰 ${name}`
                break;
        }

        const list = document.getElementById("animals-list");
        if (list.innerHTML == "<p>No hay animales registrados</p>") {
            list.innerHTML = "";
        }

        list.appendChild(p);

        const select = document.getElementById("animal-species");
        const dogInfo = document.getElementById("dog-info");
        const catInfo = document.getElementById("cat-info");
        const rabbitInfo = document.getElementById("rabbit-info");

        dogInfo.classList.remove("hidden");
        catInfo.classList.add("hidden");
        rabbitInfo.classList.add("hidden");

        form.reset();
    });
});