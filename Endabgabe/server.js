"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreamyServer = void 0;
const Http = require("http");
const Url = require("url");
const database_1 = require("./database");
var CreamyServer;
(function (CreamyServer) {
    startServer();
    async function startServer() {
        console.log("Server startet, Verbindung zur Datenbank wird aufgebaut");
        await database_1.CreamyDatabase.connectToDB("mongodb+srv://LaraH:MongoDB@cluster0.p09hu.mongodb.net/Creamy?retryWrites=true&w=majority");
        let port = Number(process.env.PORT);
        if (!port)
            port = 2000;
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Anfragen können jetzt empfangen werden");
    }
    async function handleRequest(_request, _response) {
        let urlWithQuery = Url.parse(_request.url, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        console.log("Anfrage erhalten");
        let data = "";
        _request.on("data", chunk => {
            data += chunk;
        });
        _request.on("end", () => {
            // tslint:disable-next-line: no-any
            let bestellung = JSON.parse(data);
            switch (urlWithQuery.pathname) {
                case "/insert":
                    console.log("Bestellung wird hinzugefügt");
                    database_1.CreamyDatabase.insert(bestellung).then(antwort => {
                        DbJsonResponse(_response, antwort);
                        console.log("Bestellungs ID" + bestellung["id"]);
                        _response.end();
                    });
                    break;
                default:
                    _response.setHeader("content-type", "text/html; charset=utf-8");
                    _response.write(_request.url);
            }
        });
    }
    // tslint:disable-next-line: no-any
    function DbJsonResponse(_response, _result) {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(_result));
    }
})(CreamyServer = exports.CreamyServer || (exports.CreamyServer = {}));
//# sourceMappingURL=server.js.map