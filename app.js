class QuickEitaaApp {
    constructor() {
        this.webApp = window.Eitaa.WebApp
        this.init()
    }

    init() {
        if (this.webApp){
            this.setupEventListener()
            this.randomNumber1()
            this.randomNumber2()
        }

    }

    setupEventListener() {
        document.getElementById("evaluateResult")
            .addEventListener("click", () => this.evaluateResult())
    }

    randomNumber1() {
        let number = Math.floor(Math.random() * 100) + 1;

        document.getElementById("randomNumber1").textContent = number;
    }

    randomNumber2() {
        let number = Math.floor(Math.random() * 100) + 1;

        document.getElementById("randomNumber2").textContent = number;
    }

    evaluateResult() {
        let number1 = Number(document.getElementById("randomNumber1").textContent);
        let number2 = Number(document.getElementById("randomNumber2").textContent);
        let userResult = Number(document.getElementById("sumValue").value);
        if (userResult === number1 + number2){
            this.webApp.showAlert("آفرین درست بود.")
        } else {
            this.webApp.showAlert("غلط بود.")
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
   new QuickEitaaApp();
});