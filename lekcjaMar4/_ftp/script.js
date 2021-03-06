const btnGet = document.querySelector(".btnget");
const list = document.querySelector(".results");

const btnSend = document.querySelector(".btnsend");
const inputImie = document.querySelector("#imie");
const inputNazwisko = document.querySelector("#nazwisko");
const btnGetLocal = document.querySelector(".btngetlocal");

btnGet.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        if (this.status == 200) {
            let response = JSON.parse(this.response);
            response.forEach(function(item) {
                let li = document.createElement("li");
                li.className = "listItem";
                li.innerText = "ID: " + item.id + ", " + item.title;
                list.appendChild(li);
            })
        }
        else {
            console.log("Stan połączenia: " + this.status);
        }
    });
    xhr.addEventListener("error", function() {
        console.log("Brak połączenia z serwerem");
    })
});

btnSend.addEventListener("click", function() {
    let imie = inputImie.value;
    let nazwisko = inputNazwisko.value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.16.131.125/3ti/belica_d/lekcjaMar4/dane.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("imie=" + imie + " & nazwisko=" + nazwisko);
});

btnGetLocal.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://172.16.131.125/3ti/belica_d/lekcjaMar4/dane2.php", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        let result = JSON.parse(this.response);
        result.map(function(el) {
            const p = document.createElement("p");
            p.innerText = el;
            list.appendChild(p);
        });
    });
});