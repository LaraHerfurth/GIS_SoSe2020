//alert ("eyyyyyybroo")
//var city:string = "FuWa";
//console.log(city);
//bsp
//console.log ("Die Gesamtemission ist:" + totalEmission);
//total
//africa
var emissionafrica18 = 1235.5;
var emissionafrica08 = 1028;
var difafrica = emissionafrica18 - emissionafrica08;
//sa
var emissionsa18 = 1261.5;
var emissionsa08 = 1132.6;
var difsa = emissionsa18 - emissionsa08;
//eu
var emissioneu18 = 4209.3;
var emissioneu08 = 4965.7;
var difeu = emissioneu18 - emissioneu08;
//na
var emissionna18 = 6035.6;
var emissionna08 = 6600.4;
var difna = emissionna18 - emissionna08;
//asia
var emissionasia18 = 16274.1;
var emissionasia08 = 12954.7;
var difasia = emissionasia18 - emissionasia08;
//aus
var emissionaus18 = 2100.5;
var emissionaus08 = 1993;
var difaus = emissionaus18 - emissionaus08;
var total18 = emissionafrica18 + emissionsa18 + emissioneu18 + emissionna18 + emissionasia18 + emissionaus18;
var total08 = emissionafrica08 + emissionsa08 + emissioneu08 + emissionna08 + emissionasia08 + emissionaus08;
var percentafrica18 = emissionafrica18 * 100 / total18;
var percentafrica08 = emissionafrica08 * 100 / total08;
var percentsa18 = emissionsa18 * 100 / total18;
var percentsa08 = emissionsa08 * 100 / total08;
var percenteu18 = emissioneu18 * 100 / total18;
var percenteu08 = emissioneu08 * 100 / total08;
var percentna18 = emissionna18 * 100 / total18;
var percentna08 = emissionna08 * 100 / total08;
var percentasia18 = emissionasia18 * 100 / total18;
var percentasia08 = emissionasia08 * 100 / total08;
var percentaus18 = emissionaus18 * 100 / total18;
var percentaus08 = emissionaus08 * 100 / total08;
var percentAf = emissionafrica18 * 100 / total18;
var percentAf2 = emissionafrica18 - emissionafrica08;
var percentAf3 = percentAf2 / emissionafrica08 * 100;
var percentEu = emissioneu18 * 100 / total18;
var percentEu2 = emissioneu18 - emissioneu08;
var percentEu3 = percentEu2 / emissioneu08 * 100;
var percentNA = emissionna18 * 100 / total18;
var percentNA2 = emissionna18 - emissionna08;
var percentNa3 = percentNA2 / emissionna08 * 100;
var percentSA = emissionsa18 * 100 / total18;
var percentSA2 = emissionsa18 - emissionsa08;
var percentSA3 = percentSA2 / emissionsa08 * 100;
var percentAsia1 = emissionasia18 * 100 / total18;
var percentAsia2 = emissionasia18 - emissionafrica08;
var percentAsia3 = percentAsia2 / emissionasia08 * 100;
var percentAus = emissionaus18 * 100 / total18;
var percentAus2 = emissionaus18 - emissionaus08;
var percentAus3 = percentAus2 / emissionaus08 * 100;
//Europe
function Europa() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".emissionabsolute h2").innerHTML = emissioneu18.toFixed(1);
    document.querySelector(".relativetoworlds h2").innerHTML = percentEu.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentEu3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentEu2.toFixed(1);
    document.querySelector(".fill").setAttribute("style", "height:" + percenteu18 + "%");
    //Percent Europe
}
window.addEventListener("load", function () {
    document.querySelector(".eu").addEventListener("mouseover", Europa);
});
//na
function NordAmerika() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionna18.toFixed(1);
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentNA.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentNa3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentNa3.toFixed(1);
    document.querySelector(".fill").setAttribute("style", "height:" + percentna18 + "%");
    //percent na
}
window.addEventListener("load", function () {
    document.querySelector(".na").addEventListener("mouseover", NordAmerika);
});
//Afrika
function Afrika() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionafrica18.toFixed(1);
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAf.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentAf3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentAf2.toFixed(1);
    document.querySelector(".fill").setAttribute("style", "height:" + percentafrica18 + "%");
    //percent Afrika
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("mouseover", Afrika);
});
//SA 
function SA() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionsa18.toFixed(1);
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentSA.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentSA3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentSA2.toFixed(1);
    console.log(percentsa18);
    document.querySelector(".fill").setAttribute("style", "height:" + percentsa18 + "%");
    //PercentSa
}
window.addEventListener("load", function () {
    document.querySelector(".sa").addEventListener("mouseover", SA);
});
//Asia
function asia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionasia18.toFixed(1);
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAsia1.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentAsia3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentAsia2.toFixed(1);
    document.querySelector(".fill").setAttribute("style", "height:" + percentasia18 + "%");
    //percent Afrika
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("mouseover", asia);
});
//Australia
function aus() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionaus18.toFixed(1);
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAus.toFixed(1);
    document.querySelector(".growthrate h2").innerHTML = percentAus3.toFixed(1);
    document.querySelector(".growthrateabsolute h2").innerHTML = percentAus2.toFixed(1);
    document.querySelector(".fill").setAttribute("style", "height:" + percentaus18 + "%");
    //percent australia
}
window.addEventListener("load", function () {
    document.querySelector(".aus").addEventListener("mouseover", aus);
});
var a = "Die Emmission von ";
var b = "ist: ";
var c = " kg CO2.";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var f = " %.";
var g = "Für ";
var h = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var i = " verändert. ";
var j = "2018 im Vergleich zu 2008 sind das ";
var Africa = "Afrika ";
var SouthAmerica = "Süd Amerika ";
var Europe = "Europa ";
var NorthAmerica = "Nord Amerika ";
var Asia = "Asien ";
var Australia = "Australien ";
console.log(a + Africa + b + emissionafrica18 + c + d + Africa + e + percentafrica18 + f + g + Africa + h + percentafrica08 + i + j + difafrica + c);
console.log(a + SouthAmerica + b + emissionsa18 + c + d + SouthAmerica + e + percentsa18 + f + g + SouthAmerica + h + percentsa08 + i + j + difsa + c);
console.log(a + NorthAmerica + b + emissionna18 + c + d + NorthAmerica + e + percentna18 + f + g + NorthAmerica + h + percenteu08 + i + j + difna + c);
console.log(a + Asia + b + emissionasia18 + c + d + Asia + e + percentasia18 + f + g + Asia + h + percentasia08 + i + j + difasia + c);
console.log(a + Australia + b + emissionaus18 + c + d + Australia + e + percentaus18 + f + g + Australia + h + percentaus08 + i + j + difaus + c);
//# sourceMappingURL=script.js.map
//daten von europa auf 4 attribute verechnen (dynamisch mit typescript auf der webseiten console)
//# sourceMappingURL=typescript.js.map