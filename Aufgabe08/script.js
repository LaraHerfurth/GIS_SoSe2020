"use strict";
var A08Server;
(function (A08Server) {
    console.log("script");
    let formData;
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", buttonHandler);
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://gislaraserver.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function buttonHandler() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        console.log(response2);
        console.log("geht");
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map