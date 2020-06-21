"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let skate = JSON.parse((localStorage.getItem("name")));
    console.log(skate);
    generateskate();
    function generateskate() {
        let divSkateboards = document.getElementById("Skateboards");
        let divInliner = document.getElementById("Inliner");
        for (let i = 0; i < skate.length; i++) {
            let div = document.createElement("div");
            if (skate[i].kategorie == "Skateboard") {
                div.setAttribute("class", "Skateboards");
                div.id = "Skateboards" + i;
                divSkateboards.appendChild(div);
            }
            if (skate[i].kategorie == "Inliner") {
                div.setAttribute("class", "Inliner");
                div.id = "Inliner" + i;
                divInliner.appendChild(div);
            }
            let bild = document.createElement("img");
            bild.setAttribute("src", skate[i].bild);
            div.appendChild(bild);
            let name = document.createElement("b");
            name.innerHTML = skate[i].name;
            div.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = skate[i].beschreibung;
            div.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.innerHTML = skate[i].preis + "€";
            div.appendChild(preis);
            let button = document.createElement("input");
            button.setAttribute("class", "Warenkorb");
            document.getElementById("Skateboards" + i)?.appendChild(button);
            document.getElementById("Inliner" + i)?.appendChild(button);
            button.value = "Entfernen";
            button.type = "submit";
            button.addEventListener("click", entfernen.bind(skate[i]));
            button.setAttribute("i", i.toString());
            button.setAttribute("name", JSON.stringify(skate[i]));
        }
    }
    //Gesamtsumme berechnen
    let gesamtPreis = 0;
    for (let i = 0; i < skate.length; i++) {
        gesamtPreis += skate[i].preis;
    }
    let total = document.createElement("h4");
    total.id = "gesamtpreis";
    total.innerHTML = "Die Gesamtsumme beträgt " + gesamtPreis.toFixed(2) + "€";
    document.getElementById("gesamtpreis")?.appendChild(total);
    //einzelne Produkte entfernen
    function entfernen(_event) {
        let i = _event.target?.getAttribute("i");
        skate.splice(parseInt(i), 1);
        localStorage.setItem("name", JSON.stringify(skate));
        location.reload();
    }
    document.getElementById("alleentfernen")?.addEventListener("click", alleEntfernen);
    //alle Produkte entfernen
    function alleEntfernen(_event) {
        document.getElementById("Skateboards")?.remove();
        document.getElementById("Inliner")?.remove();
        localStorage.clear();
        skate.splice(0);
        total.innerHTML = "Preis: " + "0" + "€";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=Warenkorb.js.map