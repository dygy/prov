function elem(id) {
    return document.getElementById(id)
}
function moveTo(url) {
    location.href = url;
}
function displaySell() {
    elem("full-page").style.display = "flex";
    document.getElementsByClassName("sell")[0].style.display = "flex";

}
function displayProd() {
    elem("full-page").style.display = "flex";
    elem("window").style.display = "block";
}
function displayImg(url) {
    elem("full-page").style.display = "flex";
    document.getElementsByClassName("sell")[1].style.display = "flex";
    elem("disImg").src = url;
}
function switchImg(isNext) {
    console.log(elem("dot1").src)
    let imgs = document.getElementsByClassName("smthImg");
    if (elem("dot1").src.includes("/img/active.png")){

        if (isNext){
            elem("dot2").src="../img/active.png";
            elem("dot1").src="../img/inactive.png";
            imgs[0].style.display="none";
            imgs[1].style.display="block"
        }
        else{
            elem("dot3").src="../img/active.png";
            elem("dot1").src="../img/inactive.png";
            imgs[0].style.display="none";
            imgs[2].style.display="block"
        }
    }
    else if (elem("dot2").src.includes("/img/active.png")){
        if (isNext){
            elem("dot3").src="../img/active.png";
            elem("dot2").src="../img/inactive.png";
            imgs[1].style.display="none";
            imgs[2].style.display="block"
        }
        else{
            elem("dot1").src="../img/active.png";
            elem("dot2").src="../img/inactive.png";
            imgs[1].style.display="none";
            imgs[0].style.display="block"
        }
    }
    else if (elem("dot3").src.includes("/img/active.png")){
        if (isNext){
            elem("dot1").src="../img/active.png";
            elem("dot3").src="../img/inactive.png";
            imgs[2].style.display="none";
            imgs[0].style.display="block"
        }
        else{
            elem("dot2").src="../img/active.png";
            elem("dot3").src="../img/inactive.png";
            imgs[2].style.display="none";
            imgs[1].style.display="block"
        }
    }
}