
console.log("   ⊂_ヽ");
console.log("　    ＼＼ ＿");
console.log("　　    ＼(　•_•) ᶠ");
console.log("　　　    <　⌒ヽ ᴬ");
console.log("　　　   / 　 へ＼ ᴮ");
console.log("　　    /　　/　＼＼ ᵁ");
console.log("　　   | 　ノ　　 ヽ_つ ᴸ");
console.log("　　   /　/ ᴼ");
console.log("　    /　/| ᵁ");
console.log("　   (　(ヽ ˢ");
console.log("　   |　|、＼");
console.log("　   | 丿 ＼   )");
console.log("　   | |　　) /");
console.log("    ノ )　 ᴸ ﾉ");
console.log("   (_／");
console.log("Me, after my very first successfull console.log");



let alleProdukte: Produkt[];

//holt die Daten im JSON vom Webserver
async function getWebData(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let produktJSON: string = await response.text();
    alleProdukte = JSON.parse(produktJSON);
    generateAlleProdukte(JSON.parse(produktJSON));
}

let eisAuswahl: Eis = {
    kugeln: [],
    topping: "",
    waffel_becher: ""
};

let bestellung: Bestellung = {
    eis: [eisAuswahl],
    formular: {
        vorname: "",
        nachname: "",
        abholzeitpunkt: ""
    }
};

//Wird einmalig beim Starten der Seite aufgerufen
function init(): void {
    getWebData("Produkt.json");
    warenkorbAktualisieren();
}

init();


//Wird nur auf der Formularseite ausgeführt
async function formularseiteInit(): Promise<void> {
    await getWebData("Produkt.json");
    console.log("Ladebestellung");
    let bestellungSpeichern: string | null = window.localStorage.getItem("bestellungSpeichern");
    if (bestellungSpeichern != null) {
        bestellung = JSON.parse(bestellungSpeichern);
        warenkorbAktualisieren();
        console.log("Bestellung geladen" + bestellungSpeichern);
    }
    let jetztBestellen: HTMLElement = <HTMLElement>document.getElementById("jetztBestellen");
    jetztBestellen.addEventListener("click", () => {
        bestellung.formular.vorname = (<HTMLInputElement>document.getElementById("input1")).value;
        bestellung.formular.nachname = (<HTMLInputElement>document.getElementById("input2")).value;
        bestellung.formular.abholzeitpunkt = (<HTMLInputElement>document.getElementById("input3")).value;
        if (bestellung.formular.vorname.length <= 2) {
            alert("gib deinen echten Vornamen ein :)");
            return;
        }
        if (bestellung.formular.nachname.length <= 2) {
            alert("gib deinen echten Nachnamen ein :)");
            return;
        }
        if (bestellung.formular.nachname.length == 0) {
            alert("gib eine Uhrzeit an");
            return;
        }
        let url: string = "http://localhost:2000/insert";
        fetch(url , {
            method: "POST",
            body: JSON.stringify(bestellung)
        })
            .then(response => response.json())
            .then(bestellung => {
                console.log("Success:", bestellung);
                alert("Deine Bestellungsnummer " + bestellung.insertedId + " fotografiere Sie am besten ab!");
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}

interface Produkt {
    bild: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: string;
}

//Produkte werden generiert
function generateAlleProdukte(creamy: Produkt[]): void {

    let divEis: HTMLElement = <HTMLElement>document.getElementById("kugeln");
    let divTopping: HTMLElement = <HTMLElement>document.getElementById("topping");
    let divBecherWaffel: HTMLElement = <HTMLElement>document.getElementById("becherWaffel");

    if (divEis == undefined) return;
    for (var i: number = 0; i < creamy.length; i++) {

        let produktCreamy: Produkt = creamy[i];
        let div: HTMLElement = document.createElement("div");

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", creamy[i].bild);
        div.appendChild(bild);

        let name: HTMLElement = document.createElement("b");
        name.innerHTML = creamy[i].name;
        div.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = creamy[i].beschreibung;
        div.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = creamy[i].preis + "€";
        div.appendChild(preis);

        let button: HTMLButtonElement = document.createElement("button");
        button.setAttribute("class", "Warenkorb");
        button.textContent = "zur Bestellung hinzufügen";
        button.type = "button";


        if (creamy[i].kategorie == "Eis") {
            div.setAttribute("class", "kugeln");
            div.id = "kugeln" + i;
            divEis.appendChild(div);
            document.getElementById("kugeln" + i)?.appendChild(button);

            //Eis hinzufügen und Maximum festlegen
            button.addEventListener("click", () => {
                if (eisAuswahl.kugeln.length >= 4) {
                    alert("Es können maximal 4 Eiskugeln pro Eis ausgewählt werden");
                }
                else {
                    eisAuswahl.kugeln.push(produktCreamy.name);
                    warenkorbAktualisieren();
                }
            });
        }
        else if (creamy[i].kategorie == "Topping") {
            div.setAttribute("class", "topping");
            div.id = "topping" + i;
            divTopping.appendChild(div);
            document.getElementById("topping" + i)?.appendChild(button);

            //Topping hinzufügen
            button.addEventListener("click", () => {
                eisAuswahl.topping = produktCreamy.name;
                warenkorbAktualisieren();
            });
        }
        else {
            div.setAttribute("class", "becherWaffel");
            div.id = "becherWaffel" + i;
            divBecherWaffel.appendChild(div);
            document.getElementById("becherWaffel" + i)?.appendChild(button);

            //Waffel oder Becher hinzufügen
            button.addEventListener("click", () => {
                eisAuswahl.waffel_becher = produktCreamy.name;
                warenkorbAktualisieren();
            });
        }
    }
}

//Warenkorb ein und aus blenden
let warenkorbSichtbar: boolean = false;
let warenkorb: HTMLElement = <HTMLElement>document.getElementById("iconShoppingCart");
let divWarenkorb: HTMLElement = <HTMLElement>document.getElementById("divShoppingCart");
if (warenkorb != undefined)
    warenkorb.addEventListener("click", () => {
        if (warenkorbSichtbar == true) {
            divWarenkorb.style.display = "none";
        }
        else {
            divWarenkorb.style.display = "flex";
        }
        warenkorbSichtbar = !warenkorbSichtbar;
    });

//Aktualisiert den Text der im Warenkorb ist
function warenkorbAktualisieren(): void {

    let gesamtPreisText: HTMLElement = <HTMLElement>document.getElementById("gesamtpreis");
    let preis: number = gesamtPreisAusrechnen();
    preis = Math.round(preis * 100) / 100;
    gesamtPreisText.innerHTML = "Gesamtpreis " + preis + "€";

    let warenkorbText: HTMLElement = <HTMLElement>document.getElementById("ausgewählteProdukte");

    if (warenkorbText == undefined) return;
    if (eisAuswahl.kugeln.length == 0 && eisAuswahl.topping == "" && eisAuswahl.waffel_becher == "" && bestellung.eis.length <= 1) {
        warenkorbText.innerHTML = "In Ihrem Warenkorb befinden sich keine Produkte";
        return;
    }
    let textAlleEis: string = "In Ihrem Warenkorb befinden sich folgende Produkte:" + "<br>" + "<br>";
    for (var i: number = 0; i < bestellung.eis.length; i++) {
        textAlleEis += (i + 1) + ". Eis: " + bestellung.eis[i].kugeln + " - " + bestellung.eis[i].topping + " - " + bestellung.eis[i].waffel_becher + "<br>";
    }
    warenkorbText.innerHTML = textAlleEis;
}


//Gesamtpreis ausrechnen
function preisVomProduktBekommen(name: string): number {
    if (name == "") return 0;
    return alleProdukte.filter(produkt => produkt.name == name)[0].preis;
}

function gesamtPreisAusrechnen(): number {
    let preis: number = 0;
    for (var i: number = 0; i < bestellung.eis.length; i++) {
        let eis: Eis = bestellung.eis[i];
        for (var k: number = 0; k < eis.kugeln.length; k++) {
            preis += preisVomProduktBekommen(eis.kugeln[k]);
        }
        preis += preisVomProduktBekommen(eis.topping);
        preis += preisVomProduktBekommen(eis.waffel_becher);
    }
    return preis;
}

//Button Eis hinzufügen
let neuesEis: HTMLElement = <HTMLElement>document.getElementById("neuesEis");
if (neuesEis != undefined)
    neuesEis.addEventListener("click", () => {
        if (eisAuswahl.kugeln.length < 1) {
            alert("Es muss mindestens eine Eiskugel pro Eis ausgewählt werden");
        }
        else if (eisAuswahl.waffel_becher.length < 1) {
            alert("Es muss ein Becher oder eine Waffel pro Eis ausgewählt werden");
        }
        else {
            eisAuswahl = { kugeln: [], topping: "", waffel_becher: "" };
            bestellung.eis.push(eisAuswahl);
            warenkorbAktualisieren();
        }
    });


//Button alles entfernen: alle Produkte im Warenkorb löschen
let allesEntfernen: HTMLElement = <HTMLElement>document.getElementById("warenkorbLöschen");
if (allesEntfernen != undefined)
    allesEntfernen.addEventListener("click", () => {
        bestellung.eis = [];
        eisAuswahl = { kugeln: [], topping: "", waffel_becher: "" };
        bestellung.eis.push(eisAuswahl);
        warenkorbAktualisieren();
    });


//Button bestellen: Produkte vom Warenkorb speichern in localStorage + auf die Formularseite wechseln
let bestellen: HTMLElement = <HTMLElement>document.getElementById("bestellen");
if (bestellen != undefined)
    bestellen.addEventListener("click", () => {
        if (eisAuswahl.kugeln.length < 1) {
            alert("Es muss mindestens eine Eiskugel pro Eis ausgewählt werden");
        }
        else if (eisAuswahl.waffel_becher.length < 1) {
            alert("Es muss ein Becher oder eine Waffel pro Eis ausgewählt werden");
        }
        else {
            window.localStorage.setItem("bestellungSpeichern", JSON.stringify(bestellung));
            window.location.href = "Formular.html";
            console.log("Marc");
        }
    });

interface Eis {
    kugeln: string[];
    topping: string;
    waffel_becher: string;
}

interface Formular {
    vorname: string;
    nachname: string;
    abholzeitpunkt: string;
}

interface Bestellung {
    eis: Eis[];
    formular: Formular;
}

