import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe09 {
  console.log("Starting server"); 
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 9000;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let urlQuery: Url.UrlWithParsedQuery  = Url.parse(_request.url, true);
      console.log(urlQuery.query);
      for (let key in urlQuery.query) {
        _response.write(key + ":" + urlQuery.query[key] + "<br/>");
      }
      _response.write("angemeldet");
      let jsonURL: string = JSON.stringify(urlQuery.query);
      _response.write(jsonURL);
    }

    _response.end();
  }
}