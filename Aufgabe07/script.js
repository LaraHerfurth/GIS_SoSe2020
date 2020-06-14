"use strict";
var Abgabe07;
(function (Abgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        generateskate(JSON.parse(produkteJSON));
        generatein(JSON.parse(produkteJSON));
    }
    communicate("Skate_Shop.json");
    let betrag = 0;
    let nummer = 0;
    let div2 = document.createElement("div");
    let warenanzahl = document.createElement("p");
    function generateskate(skateboards) {
        for (var i = 0; i < skateboards.length; i++) {
            let div = document.createElement("div");
            div.id = "skateboards" + i;
            div.setAttribute("class", "Skateboards");
            document.getElementById("Skateboards")?.appendChild(div);
            let bild = document.createElement("img");
            bild.setAttribute("src", skateboards[i].bild);
            document.getElementById("skateboards" + i)?.appendChild(bild);
            let name = document.createElement("b");
            name.innerHTML = skateboards[i].name;
            document.getElementById("skateboards" + i)?.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = skateboards[i].beschreibung;
            document.getElementById("skateboards" + i)?.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.innerHTML = skateboards[i].preis + "€";
            document.getElementById("skateboards" + i)?.appendChild(preis);
            let button = document.createElement("button");
            document.getElementById("skateboards" + i)?.appendChild(button);
            button.setAttribute("class", "Warenkorb");
            button.setAttribute("id", "hinzufügen" + i);
            button.innerHTML = "in den Warenkorb";
            button.addEventListener("click", hndButton);
            button.setAttribute("preis", skateboards[i].preis.toString());
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
    }
    function generatein(inliner) {
        for (var k = 0; k < inliner.length; k++) {
            let div = document.createElement("div");
            div.id = "inliner" + k;
            div.setAttribute("class", "InlineSkates");
            document.getElementById("Inliner")?.appendChild(div);
            let bild = document.createElement("img");
            bild.setAttribute("src", inliner[k].bild);
            document.getElementById("inliner" + k)?.appendChild(bild);
            let name = document.createElement("b");
            name.innerHTML = inliner[k].name;
            document.getElementById("inliner" + k)?.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = inliner[k].beschreibung;
            document.getElementById("inliner" + k)?.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.innerHTML = inliner[k].preis + "€";
            document.getElementById("inliner" + k)?.appendChild(preis);
            let button = document.createElement("button");
            document.getElementById("inliner" + k)?.appendChild(button);
            button.setAttribute("class", "Warenkorb");
            button.innerHTML = "in den Warenkorb";
            button.addEventListener("click", hndButton);
            button.setAttribute("preis", inliner[k].preis.toString());
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
    }
    document.getElementById("skatecat")?.addEventListener("click", jump);
    document.getElementById("inlinecat")?.addEventListener("click", jump);
    document.getElementById("homecat")?.addEventListener("click", jump);
    function jump(_event) {
        switch (_event.currentTarget.getAttribute("id")) {
            case "skatecat":
                document.getElementById("Skateboards").style.display = "flex";
                document.getElementById("Inliner").style.display = "none";
                document.getElementById("headskate").style.display = "flex";
                document.getElementById("headinline").style.display = "none";
                document.getElementById("pic").style.display = "none";
                break;
            case "inlinecat":
                document.getElementById("Skateboards").style.display = "none";
                document.getElementById("Inliner").style.display = "flex";
                document.getElementById("headskate").style.display = "none";
                document.getElementById("headinline").style.display = "flex";
                document.getElementById("pic").style.display = "none";
                break;
            case "homecat":
                document.getElementById("Skateboards").style.display = "flex";
                document.getElementById("Inliner").style.display = "flex";
                document.getElementById("headskate").style.display = "flex";
                document.getElementById("headinline").style.display = "flex";
                document.getElementById("pic").style.display = "flex";
                break;
            default:
                break;
        }
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=script.js.map