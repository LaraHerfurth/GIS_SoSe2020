namespace Aufgabe09 {

    document.getElementById("buttonhtml")?.addEventListener("click", handlebuttonhtml);
    document.getElementById("buttonjson")?.addEventListener("click", handlebuttonjson);

    function handlebuttonhtml(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gislaraserver.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    } 

    function handlebuttonjson(): void {
        let formData: FormData = new FormData(document.forms[1]);
        let url: string = "https://gislaraserver.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    } 

    async function communicateHTML(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("angemeldet");
        (<HTMLElement>document.getElementById("antwort")).innerHTML  = arraySplit[0];
      }

    async function communicateJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("angemeldet");
        let jsonString: string = JSON.parse(arraySplit[1]);
        console.log(jsonString);
      }

}
