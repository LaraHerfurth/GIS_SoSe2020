"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    document.getElementById("buttonhtml")?.addEventListener("click", handlebuttonhtml);
    document.getElementById("buttonjson")?.addEventListener("click", handlebuttonjson);
    function handlebuttonhtml() {
        let formData = new FormData(document.forms[1]);
        let url = "https://gislaraserver.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    }
    function handlebuttonjson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gislaraserver.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    }
    async function communicateHTML(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("angemeldet");
        document.getElementById("antwort").innerHTML = arraySplit[1];
    }
    async function communicateJSON(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("angemeldet");
        let jsonString = JSON.parse(arraySplit[0]);
        console.log(jsonString);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map
