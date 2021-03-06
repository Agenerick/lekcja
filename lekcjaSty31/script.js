//wersja z jednym eventListener na liście

// var listaApp = {
//     lista: document.querySelector(".lista"),
//     input: document.querySelector(".tekst"),
//     osoba: document.querySelector(".selectimie"),
//     guzik: document.querySelector(".guzik"),

//     dodajZadanie: function() {
//         let element = document.createElement("div");
//         let spanFirst = document.createElement("span");
//         let spanSecond = document.createElement("span");
//         let acceptElement = document.createElement("i");
//         let editElement = document.createElement("i");
//         let delElement = document.createElement("i");

//         element.className = "element";
//         spanFirst.className = "first";
//         spanSecond.className = "second";
//         editElement.className = "fas fa-pen editBtn";
//         delElement.className = "fas fa-times delBtn";

//         spanFirst.innerText = this.input.value;
//         spanSecond.innerText = this.osoba.value;

//         this.lista.appendChild(element);
//         element.appendChild(spanFirst);
//         element.appendChild(spanSecond);
//         element.appendChild(editElement);
//         element.appendChild(delElement);

//         this.input.value = "";
//     },
//     btnAction: function(event) {
//         if (event.target.classList.contains("delBtn")) {
//             event.target.parentElement.remove();
//         }
//         else if (event.target.classList.contains("editBtn")) {
//             event.target.parentElement.querySelector(".first").innerHTML = "<input type='text' class='textField'>";
//             event.target.className = "fas fa-check acceptBtn";
//         }
//         else if (event.target.classList.contains("acceptBtn")) {
//             event.target.parentElement.querySelector(".first").innerHTML = event.target.parentElement.querySelector(".textField").value;
//             event.target.className = "fas fa-pen editBtn";
//         }
//     },
//     init: function() {
//         this.guzik.addEventListener("click", this.dodajZadanie.bind(this));
//         this.lista.addEventListener("click", this.btnAction.bind(this));
//     }
// }

//wersja z eventListener na każdym przycisku (bardziej podobne do lekcji)

var listaApp = {
    lista: document.querySelector(".lista"),
    input: document.querySelector(".tekst"),
    osoba: document.querySelector(".selectimie"),
    guzik: document.querySelector(".guzik"),

    dodajZadanie: function() {
        let element = document.createElement("div");
        let spanFirst = document.createElement("span");
        let spanSecond = document.createElement("span");
        let acceptElement = document.createElement("i");
        let editElement = document.createElement("i");
        let delElement = document.createElement("i");

        element.className = "element";
        spanFirst.className = "first";
        spanSecond.className = "second";
        acceptElement.className = "fas fa-check acceptBtn";
        editElement.className = "fas fa-pen editBtn";
        delElement.className = "fas fa-times delBtn";

        spanFirst.innerText = this.input.value;
        spanSecond.innerText = this.osoba.value;

        this.lista.appendChild(element);
        element.appendChild(spanFirst);
        element.appendChild(spanSecond);
        element.appendChild(acceptElement);
        element.appendChild(editElement);
        element.appendChild(delElement);

        acceptElement.addEventListener("click", this.akceptujZad);
        editElement.addEventListener("click", this.edytujZad);
        delElement.addEventListener("click", this.usunZad);

        this.input.value = "";
    },
    akceptujZad: function(event) {
        event.target.parentElement.querySelector(".first").innerHTML = event.target.parentElement.querySelector(".textField").value;
    },
    edytujZad: function(event) {
        event.target.parentElement.querySelector(".first").innerHTML = "<input type='text' class='textField'>";
    },
    usunZad: function(event) {
        event.target.parentElement.remove();
    },
    init: function() {
        this.guzik.addEventListener("click", this.dodajZadanie.bind(this));
    }
}

listaApp.init();