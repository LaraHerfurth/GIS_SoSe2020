import * as Http from "http";
import * as Url from "url";
import { CreamyDatabase } from "./database";


export namespace CreamyServer {

    startServer();
    async function startServer(): Promise<void> {
        console.log("Server startet, Verbindung zur Datenbank wird aufgebaut");
        await CreamyDatabase.connectToDB("mongodb+srv://LaraH:MongoDB@cluster0.p09hu.mongodb.net/Creamy?retryWrites=true&w=majority");

        let port: number = Number(process.env.PORT);
        if (!port)
            port = 2000;
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }

    function handleListen(): void {
        console.log("Anfragen können jetzt empfangen werden");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

        console.log("Anfrage erhalten");
        let data: string = "";
        _request.on("data", chunk => {
            data += chunk;
        });

        _request.on("end", () => {
            // tslint:disable-next-line: no-any
            let bestellung: any = JSON.parse(data);
            switch (urlWithQuery.pathname) {
                case "/insert":
                    console.log("Bestellung wird hinzugefügt");
                    CreamyDatabase.insert(bestellung).then(antwort => {
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
    function DbJsonResponse(_response: Http.ServerResponse, _result: any): void {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(_result));
    }
}
