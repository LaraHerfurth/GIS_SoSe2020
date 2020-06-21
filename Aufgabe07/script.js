"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let produkteJSON = await response.text();
        generateskate(JSON.parse(produkteJSON));
    }
    Aufgabe07.skate = [];
    communicate("Skates.json");
    function generateskate(skates) {
        let divSkateboards = document.getElementById("Skateboards");
        let divInliner = document.getElementById("Inliner");
        for (var i = 0; i < skates.length; i++) {
            let div = document.createElement("div");
            if (skates[i].kategorie == "Skateboard") {
                div.setAttribute("class", "Skateboards");
                div.id = "Skateboards" + i;
                divSkateboards.appendChild(div);
            }
            else {
                div.setAttribute("class", "Inliner");
                div.id = "Inliner" + i;
                divInliner.appendChild(div);
            }
            let bild = document.createElement("img");
            bild.setAttribute("src", skates[i].bild);
            div.appendChild(bild);
            let name = document.createElement("b");
            name.innerHTML = skates[i].name;
            div.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = skates[i].beschreibung;
            div.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.innerHTML = skates[i].preis + "€";
            div.appendChild(preis);
            let button = document.createElement("input");
            button.setAttribute("class", "Warenkorb");
            button.value = "In den Warenkorb";
            button.type = "submit";
            document.getElementById("Skateboards" + i)?.appendChild(button);
            document.getElementById("Inliner" + i)?.appendChild(button);
            button.addEventListener("click", warenAnzahl.bind(skates[i]));
            button.setAttribute("name", skates[i].name);
            button.setAttribute("preis", skates[i].preis.toString());
        }
        let warenZähler = 0;
        let preis = 0;
        let amount = document.createElement("p");
        let div2 = document.createElement("div");
        let warenkorb = new Array;
        //Produkte werden gezählt + Konsole berechnet die Zwischensummen
        function warenAnzahl(_event) {
            warenZähler++;
            console.log(warenZähler);
            preis += this.preis;
            console.log(preis + " €");
            if (warenZähler > 0) {
                document.getElementById("navigation")?.appendChild(div2);
                div2.setAttribute("id", "warenzahl");
                document.getElementById("warenzahl")?.appendChild(amount);
            }
            warenkorb.push(this);
            localStorage.setItem("name", JSON.stringify(warenkorb));
            amount.innerHTML = JSON.parse(localStorage.getItem("name")).length;
        }
        //einzelne Kategorien anzeigen
        document.getElementById("skatecat")?.addEventListener("click", sprung);
        document.getElementById("inlinecat")?.addEventListener("click", sprung);
        document.getElementById("homecat")?.addEventListener("click", sprung);
        function sprung(_event) {
            switch (_event.currentTarget.getAttribute("id")) {
                case "skatecat":
                    document.getElementById("Skateboards").style.display = "flex";
                    document.getElementById("Inliner").style.display = "none";
                    document.getElementById("headskate").style.display = "flex";
                    document.getElementById("headinline").style.display = "none";
                    document.getElementById("pic1").style.display = "none";
                    document.getElementById("pic2").style.display = "flex";
                    document.getElementById("pic3").style.display = "none";
                    document.getElementById("line").style.display = "none";
                    break;
                case "inlinecat":
                    document.getElementById("Skateboards").style.display = "none";
                    document.getElementById("Inliner").style.display = "flex";
                    document.getElementById("headskate").style.display = "none";
                    document.getElementById("headinline").style.display = "flex";
                    document.getElementById("pic1").style.display = "none";
                    document.getElementById("pic2").style.display = "none";
                    document.getElementById("pic3").style.display = "flex";
                    document.getElementById("line").style.display = "none";
                    break;
                case "homecat":
                    document.getElementById("Skateboards").style.display = "flex";
                    document.getElementById("Inliner").style.display = "flex";
                    document.getElementById("headskate").style.display = "flex";
                    document.getElementById("headinline").style.display = "flex";
                    document.getElementById("pic1").style.display = "flex";
                    document.getElementById("pic2").style.display = "flex";
                    document.getElementById("pic3").style.display = "flex";
                    document.getElementById("line").style.display = "flex";
                    break;
                default:
                    break;
            }
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map