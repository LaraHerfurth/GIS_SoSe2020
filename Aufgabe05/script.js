"use strict";
var Abgabe05;
(function (Abgabe05) {
    let skateboard1 = {
        bild: "Skateboard1.png",
        name: "POWELL-PERALTA",
        beschreibung: "Ripper One Off 8´Komplettboard",
        preis: "99.99€",
        kategorie: "Skateboards"
    };
    let skateboard2 = {
        bild: "Skateboard2.png",
        name: "FLIP",
        beschreibung: "Team Bubble 7´Komplettboard",
        preis: "109.99€",
        kategorie: "Skateboards"
    };
    let skateboard3 = {
        bild: "Skateboard3.png",
        name: "SANTA CRUZ",
        beschreibung: "Snakebite 8.25´Komplettboard",
        preis: "99.99€",
        kategorie: "Skateboards"
    };
    let skateboard4 = {
        bild: "Skateboard4.png",
        name: "BLIND",
        beschreibung: "Heart white 8.25´Komplettboard",
        preis: "99.99€",
        kategorie: "Skateboards"
    };
    let skateboard5 = {
        bild: "Skateboard5.png",
        name: "SANTA CRUZ",
        beschreibung: "Primary Hand 8´Komplettboard",
        preis: "99.99€",
        kategorie: "Skateboards"
    };
    let skateboard6 = {
        bild: "Skateboard6.png",
        name: "FLIP",
        beschreibung: "Odyssey Logo 6.75´Komplettboard",
        preis: "109.99€",
        kategorie: "Skateboards"
    };
    let skateboard7 = {
        bild: "Skateboard7.png",
        name: "ZERO",
        beschreibung: "Evil Eyes 7.75´Komplettboard",
        preis: "129.99€",
        kategorie: "Skateboards"
    };
    let skateboard8 = {
        bild: "Skateboard8.png",
        name: "BIRDHOUSE",
        beschreibung: "Stage 3 Sunset 8´Komplettboard",
        preis: "99.99€",
        kategorie: "Skateboards"
    };
    let inliner1 = {
        bild: "Inliner1.png",
        name: "Rollerblade Inliner",
        beschreibung: "Black/Magenta",
        preis: "179.00€",
        kategorie: "Inliner"
    };
    let inliner2 = {
        bild: "Inliner2.png",
        name: "Rollerblade Inliner",
        beschreibung: "Blue/Lime",
        preis: "199.00€",
        kategorie: "Inliner"
    };
    let inliner3 = {
        bild: "Inliner3.png",
        name: "K2 Inline Skates M",
        beschreibung: "Black/Blue",
        preis: "199.00€",
        kategorie: "Inliner"
    };
    let inliner4 = {
        bild: "Inliner4.png",
        name: "Rollerblade Inliner",
        beschreibung: "Black/Yellow",
        preis: "133.33€",
        kategorie: "Inliner"
    };
    let inliner5 = {
        bild: "Inliner5.png",
        name: "Rollerblade Inliner",
        beschreibung: "Mango/Green",
        preis: "199.00€",
        kategorie: "Inliner"
    };
    let inliner6 = {
        bild: "Inliner6.png",
        name: "K2 Inline Skates M",
        beschreibung: "Black/Cyan",
        preis: "279.00€",
        kategorie: "Inliner"
    };
    let inliner7 = {
        bild: "Inliner7.png",
        name: "K2 Inline Skates M",
        beschreibung: "Black/Red",
        preis: "179.00€",
        kategorie: "Inliner"
    };
    let inliner8 = {
        bild: "Inliner8.png",
        name: "K2 Inline Skates M",
        beschreibung: "Black/Blue",
        preis: "229.00€",
        kategorie: "Inliner"
    };
    let skateboards = [skateboard1, skateboard2, skateboard3, skateboard4, skateboard5, skateboard6, skateboard7, skateboard8];
    let inliner = [inliner1, inliner2, inliner3, inliner4, inliner5, inliner6, inliner7, inliner8];
    for (let i = 0; i < skateboards.length; i++) {
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
        preis.innerHTML = skateboards[i].preis;
        document.getElementById("skateboards" + i)?.appendChild(preis);
        let button = document.createElement("button");
        document.getElementById("skateboards" + i)?.appendChild(button);
        button.setAttribute("class", "Warenkorb");
        button.innerHTML = "in den Warenkorb";
    }
    for (let i = 0; i < inliner.length; i++) {
        let div = document.createElement("div");
        div.id = "inliner" + i;
        div.setAttribute("class", "InlineSkates");
        document.getElementById("Inliner")?.appendChild(div);
        let bild = document.createElement("img");
        bild.setAttribute("src", inliner[i].bild);
        document.getElementById("inliner" + i)?.appendChild(bild);
        let name = document.createElement("b");
        name.innerHTML = inliner[i].name;
        document.getElementById("inliner" + i)?.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = inliner[i].beschreibung;
        document.getElementById("inliner" + i)?.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.innerHTML = inliner[i].preis;
        document.getElementById("inliner" + i)?.appendChild(preis);
        let button = document.createElement("button");
        document.getElementById("inliner" + i)?.appendChild(button);
        button.setAttribute("class", "Warenkorb");
        button.innerHTML = "in den Warenkorb";
    }
})(Abgabe05 || (Abgabe05 = {}));
//# sourceMappingURL=script.js.map