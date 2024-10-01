document.addEventListener("DOMContentLoaded", () => {
    const speciesSelect = document.getElementById("animal-species");
    const dogInfo = document.getElementById("dog-info");
    const catInfo = document.getElementById("cat-info");
    const rabbitInfo = document.getElementById("rabbit-info");

    speciesSelect.addEventListener("change", () => {
        const value = speciesSelect.value;
        [dogInfo, catInfo, rabbitInfo].forEach(el => el.classList.add("hidden"));
        document.getElementById(`${value}-info`).classList.remove("hidden");
    });
});
