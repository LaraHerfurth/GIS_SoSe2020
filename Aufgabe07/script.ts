namespace Abgabe07 {



    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON: string = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        generateskate(JSON.parse(produkteJSON));
    }
    communicate("Skates.json");



    interface Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    

    function generateskate(skates: Produkte[]): void {

    let divSkateboards: HTMLElement = <HTMLElement>document.getElementById("Skateboards");
    let divInliner: HTMLElement = <HTMLElement>document.getElementById("Inliner");

    for (var i: number = 0; i < skates.length; i++) {

        let div: HTMLElement = document.createElement("div");
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

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", skates[i].bild);
        div.appendChild(bild);

        let name: HTMLElement = document.createElement("b");
        name.innerHTML = skates[i].name;
        div.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = skates[i].beschreibung;
        div.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = skates[i].preis + "€";
        div.appendChild(preis);

        let button: HTMLElement = document.createElement("button");
        div.appendChild(button);
        button.setAttribute("class", "Warenkorb");
        button.setAttribute("id", "hinzufügen" + i);
        button.innerHTML = "in den Warenkorb";
        button.addEventListener("click", hndButton);
        button.setAttribute("preis", skates[i].preis.toString());
    }



    let betrag: number = 0;
    let nummer: number = 0;
    let div2: HTMLElement = document.createElement("div");
    let warenanzahl: HTMLElement = document.createElement("p");
    function hndButton(_event: Event): void {

        nummer++;
        warenanzahl.innerHTML = "" + nummer;
        if (nummer > 0) {
            document.getElementById("navigation")?.appendChild(div2);
            div2.setAttribute("id", "warenzahl");
            document.getElementById("warenzahl")?.appendChild(warenanzahl);
        }
        console.log(nummer + " Artikel");

        betrag += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log("Gesamtsumme: " + betrag.toFixed(2) + "€");
    }
    }


    document.getElementById("skatecat")?.addEventListener("click", sprung);
    document.getElementById("inlinecat")?.addEventListener("click", sprung);
    document.getElementById("homecat")?.addEventListener("click", sprung);

    function sprung(_event: Event): void {
        switch ((<HTMLElement>_event.currentTarget).getAttribute("id")) {
            case "skatecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "flex";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "none";
                (<HTMLElement>document.getElementById("headskate")).style.display = "flex";
                (<HTMLElement>document.getElementById("headinline")).style.display = "none";
                (<HTMLElement>document.getElementById("pic1")).style.display = "none";
                (<HTMLElement>document.getElementById("pic2")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic3")).style.display = "none";
                break;
            case "inlinecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "none";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                (<HTMLElement>document.getElementById("headskate")).style.display = "none";
                (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic1")).style.display = "none";
                (<HTMLElement>document.getElementById("pic2")).style.display = "none";
                (<HTMLElement>document.getElementById("pic3")).style.display = "flex";
                break;
            case "homecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "flex";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                (<HTMLElement>document.getElementById("headskate")).style.display = "flex";
                (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic1")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic2")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic3")).style.display = "flex";
                break;
            default:
                break;
        }
    }
} 
