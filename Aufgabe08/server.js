"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Konsolen-Ausgabe Serverstart 
    let port = Number(process.env.PORT); //Variable erstellen und port zuweisen
    if (!port) //Port an eine Bedingung knüpfen
        port = 8100;
    let server = Http.createServer(); //Server variable erstellen
    server.addListener("request", handleRequest); //Events hinzufügen 
    server.addListener("listening", handleListen);
    server.listen(port); //server hört auf Port um Anfragen zu ermitteln
    function handleListen() {
        console.log("Listening"); //Konsolen-Ausgabe um Zwischenstand abzurufen
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolen-Ausgabe um Zwischenstand abzurufen (Ich höre Stimmen)
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Parameter des Headers der Response festlegen
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end(); //Ende der Antwort (Response)
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map