namespace A08Server {
    console.log("script");
    let formData: FormData;
    let myButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("button"));
    myButton.addEventListener("click", buttonHandler);

    async function addToURL(): Promise<string> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://gislaraserver.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function buttonHandler(): Promise<void> {
        getResponse(await addToURL());
    }


    async function getResponse(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        console.log(response2);
    }
}