import * as Http from "http";

export namespace A08Server {
    console.log("Starting server"); //Konsolen-Ausgabe Serverstart 
    let port: number = Number(process.env.PORT); //Variable erstellen und port zuweisen
    if (!port) //Port an eine Bedingung knüpfen
        port = 8100;

    let server: Http.Server = Http.createServer(); //Server variable erstellen
    server.addListener("request", handleRequest);    //Events hinzufügen 
    server.addListener("listening", handleListen);
    server.listen(port);    //server hört auf Port um Anfragen zu ermitteln

    function handleListen(): void {
        console.log("Listening"); //Konsolen-Ausgabe um Zwischenstand abzurufen
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Konsolen-Ausgabe um Zwischenstand abzurufen (Ich höre Stimmen)
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Parameter des Headers der Response festlegen
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end(); //Ende der Antwort (Response)
    }
}