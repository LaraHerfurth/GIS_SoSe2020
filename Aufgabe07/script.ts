namespace Aufgabe07 {


    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);

        let produkteJSON: string = await response.text();
        generateskate(JSON.parse(produkteJSON));
    }
    export let skate: Produkte[] = [];
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

            let button: HTMLInputElement = document.createElement("input");
            button.setAttribute("class", "Warenkorb");
            button.value = "In den Warenkorb";
            button.type = "submit";
            document.getElementById("Skateboards" + i)?.appendChild(button);
            document.getElementById("Inliner" + i)?.appendChild(button);
            button.addEventListener("click", warenAnzahl.bind(skates[i]));
            button.setAttribute("name", skates[i].name);
            button.setAttribute("preis", skates[i].preis.toString());
        }

        let warenZähler: number = 0;
        let preis: number = 0;
        let amount: HTMLElement = document.createElement("p");
        let div2: HTMLElement = document.createElement("div");
        let warenkorb: Produkte [] = new Array;


    //Produkte werden gezählt + Konsole berechnet die Zwischensummen
        function warenAnzahl(this: Produkte, _event: Event): void {
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
          
            amount.innerHTML = JSON.parse(localStorage.getItem("name")!).length;
        }

        
    //einzelne Kategorien anzeigen
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
                    (<HTMLElement>document.getElementById("line")).style.display = "none";
                    break;
                case "inlinecat":
                    (<HTMLElement>document.getElementById("Skateboards")).style.display = "none";
                    (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                    (<HTMLElement>document.getElementById("headskate")).style.display = "none";
                    (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                    (<HTMLElement>document.getElementById("pic1")).style.display = "none";
                    (<HTMLElement>document.getElementById("pic2")).style.display = "none";
                    (<HTMLElement>document.getElementById("pic3")).style.display = "flex";
                    (<HTMLElement>document.getElementById("line")).style.display = "none";
                    break;
                case "homecat":
                    (<HTMLElement>document.getElementById("Skateboards")).style.display = "flex";
                    (<HTMLElement>document.getElementById("Inliner")).style.display = "flex";
                    (<HTMLElement>document.getElementById("headskate")).style.display = "flex";
                    (<HTMLElement>document.getElementById("headinline")).style.display = "flex";
                    (<HTMLElement>document.getElementById("pic1")).style.display = "flex";
                    (<HTMLElement>document.getElementById("pic2")).style.display = "flex";
                    (<HTMLElement>document.getElementById("pic3")).style.display = "flex";
                    (<HTMLElement>document.getElementById("line")).style.display = "flex";
                    break;
                default:
                    break;
            }
        }
    }
} 
