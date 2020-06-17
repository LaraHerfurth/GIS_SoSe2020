"use strict";
var Abgabe07;
(function (Abgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        generateskate(JSON.parse(produkteJSON));
    }
    communicate("Skates.json");
    function generateskate(skates) {
        let divSkateboards = document.getElementById("Skateboards");
        let divInliner = document.getElementById("Inliner");
        for (var i = 0; i < skates.length; i++) {
            let div = document.createElement("div");
            if (skates[i].kategorie == "Skateboards") {
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
            let button = document.createElement("button");
            div.appendChild(button);
            button.setAttribute("class", "Warenkorb");
            button.setAttribute("id", "hinzufügen" + i);
            button.innerHTML = "in den Warenkorb";
            button.addEventListener("click", hndButton);
            button.setAttribute("preis", skates[i].preis.toString());
        }
        let betrag = 0;
        let nummer = 0;
        let div2 = document.createElement("div");
        let warenanzahl = document.createElement("p");
        function hndButton(_event) {
            nummer++;
            warenanzahl.innerHTML = "" + nummer;
            if (nummer > 0) {
                document.getElementById("navigation")?.appendChild(div2);
                div2.setAttribute("id", "warenzahl");
                document.getElementById("warenzahl")?.appendChild(warenanzahl);
            }
            console.log(nummer + " Artikel");
            betrag += parseFloat(_event.target?.getAttribute("preis"));
            console.log("Gesamtsumme: " + betrag.toFixed(2) + "€");
        }
    }
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
                break;
            case "inlinecat":
                document.getElementById("Skateboards").style.display = "none";
                document.getElementById("Inliner").style.display = "flex";
                document.getElementById("headskate").style.display = "none";
                document.getElementById("headinline").style.display = "flex";
                document.getElementById("pic1").style.display = "none";
                document.getElementById("pic2").style.display = "none";
                document.getElementById("pic3").style.display = "flex";
                break;
            case "homecat":
                document.getElementById("Skateboards").style.display = "flex";
                document.getElementById("Inliner").style.display = "flex";
                document.getElementById("headskate").style.display = "flex";
                document.getElementById("headinline").style.display = "flex";
                document.getElementById("pic1").style.display = "flex";
                document.getElementById("pic2").style.display = "flex";
                document.getElementById("pic3").style.display = "flex";
                break;
            default:
                break;
        }
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=script.js.map