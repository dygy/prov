function moveTo(url) {
    location.href = url;
}
function displaySell() {
    document.getElementById("full-page").style.display = "flex";
    document.getElementsByClassName("sell")[0].style.display = "flex";

}
function displayProd() {
    document.getElementById("full-page").style.display = "flex";
    document.getElementById("window").style.display = "block";
}