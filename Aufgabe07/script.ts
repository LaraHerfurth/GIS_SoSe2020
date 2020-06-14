namespace Abgabe07 {


    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON: string = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        generateskate(JSON.parse(produkteJSON));
        generatein(JSON.parse(produkteJSON));

    }
    communicate("Skateboards.json");
    communicate("Inliner.json");
    interface Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    
    let betrag: number = 0;
    let nummer: number = 0;
    let div2: HTMLElement = document.createElement("div");
    let warenanzahl: HTMLElement = document.createElement("p");

    function generateskate(skateboards: Produkte[]): void {
        for (var i: number = 0; i < skateboards.length; i++) {


            let div: HTMLDivElement = document.createElement("div");
            div.id = "skateboards" + i;
            div.setAttribute("class", "Skateboards");
            document.getElementById("Skateboards")?.appendChild(div);

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", skateboards[i].bild);
            document.getElementById("skateboards" + i)?.appendChild(bild);

            let name: HTMLElement = document.createElement("b");
            name.innerHTML = skateboards[i].name;
            document.getElementById("skateboards" + i)?.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = skateboards[i].beschreibung;
            document.getElementById("skateboards" + i)?.appendChild(beschreibung);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = skateboards[i].preis + "€";
            document.getElementById("skateboards" + i)?.appendChild(preis);

            let button: HTMLElement = document.createElement("button");
            document.getElementById("skateboards" + i)?.appendChild(button);
            button.setAttribute("class", "Warenkorb");
            button.setAttribute("id", "hinzufügen" + i);
            button.innerHTML = "in den Warenkorb";
            button.addEventListener("click", hndButton);
            button.setAttribute("preis", skateboards[i].preis.toString());


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
    }
    function generatein(inliner: Produkte[]): void {
        for (var k: number = 0; k < inliner.length; k++) {

            let div: HTMLDivElement = document.createElement("div");
            div.id = "inliner" + k;
            div.setAttribute("class", "InlineSkates");
            document.getElementById("Inliner")?.appendChild(div);

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", inliner[k].bild);
            document.getElementById("inliner" + k)?.appendChild(bild);

            let name: HTMLElement = document.createElement("b");
            name.innerHTML = inliner[k].name;
            document.getElementById("inliner" + k)?.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = inliner[k].beschreibung;
            document.getElementById("inliner" + k)?.appendChild(beschreibung);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = inliner[k].preis + "€";
            document.getElementById("inliner" + k)?.appendChild(preis);

            let button: HTMLElement = document.createElement("button");
            document.getElementById("inliner" + k)?.appendChild(button);
            button.setAttribute("class", "Warenkorb");
            button.innerHTML = "in den Warenkorb";
            button.addEventListener("click", hndButton);
            button.setAttribute("preis", inliner[k].preis.toString());


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
    }

    document.getElementById("skatecat")?.addEventListener("click", jump);
    document.getElementById("inlinecat")?.addEventListener("click", jump);
    document.getElementById("homecat")?.addEventListener("click", jump);

    function jump(_event: Event): void {
        switch ((<HTMLElement>_event.currentTarget).getAttribute("id")) {
            case "skatecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "flex";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "none";
                (<HTMLElement>document.getElementById("headskate")).style.display = "flex";
                (<HTMLElement>document.getElementById("headinline")).style.display = "none";
                (<HTMLElement>document.getElementById("pic")).style.display = "none";
                break;
            case "inlinecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "none";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                (<HTMLElement>document.getElementById("headskate")).style.display = "none";
                (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic")).style.display = "none";
                break;
            case "homecat":
                (<HTMLElement>document.getElementById("Skateboards")).style.display = "flex";
                (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                (<HTMLElement>document.getElementById("headskate")).style.display = "flex";
                (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                (<HTMLElement>document.getElementById("pic")).style.display = "flex";
                break;
            default:
                break;
        }
    }

}
