var listaApp = {
    lista: document.querySelector(".lista"),
    input: document.querySelector(".tekst"),
    osoba: document.querySelector(".selectimie"),
    guzik: document.querySelector(".guzik"),

    dodaj: function() {
        let element = document.createElement("div");
        let spanFirst = document.createElement("span");
        let spanSecond = document.createElement("span");
        let iElement = document.createElement("i");

        element.className = "element";
        spanFirst.className = "first";
        spanSecond.className = "second";
        iElement.className = "fas fa-times third";

        spanFirst.innerText = this.input.value;
        spanSecond.innerText = this.osoba.value;

        this.lista.appendChild(element);
        element.appendChild(spanFirst);
        element.appendChild(spanSecond);
        element.appendChild(iElement);

        this.input.value = "";
    },
    usun: function(event) {
        if (event.target.classList.contains("third")) {
            event.target.parentElement.remove();
        }
    },
    init: function() {
        this.guzik.addEventListener("click", this.dodaj.bind(this));
        this.lista.addEventListener("click", this.usun.bind(this));
    }
}

listaApp.init();