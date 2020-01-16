hideAll()
function hideAll() {
    document.getElementsByClassName('dropdown')[1].style.display = "none"
    document.getElementsByClassName('dropdown')[0].style.display = "none"
    for (let x = 2; x < 6; x++) {
        document.getElementsByClassName('dropdown' + x)[1].style.display = "none"
        document.getElementsByClassName('dropdown' + x)[0].style.display = "none"
    }
}
window.onscroll = function(ev) {
    console.log(window.innerWidth + ' '+ window.innerHeight + window.scrollY);
    if (((window.innerHeight + window.scrollY) >= window.innerWidth/1.5)) {
        document.getElementById("header").style.display="none";
        document.getElementById("header2").style.display="block";
        hideAll()
    }
    else if (((window.innerHeight + window.scrollY) <= window.innerWidth)) {
        document.getElementById("header").style.display="block";
        document.getElementById("header2").style.display="none";
        hideAll()
    }
 };
function hideDropDown(id,header) {
    let index;
    if (header==="header2") index=0;
    else index=1;
    if (document.getElementsByClassName(id)[index].style.display!=="flex") {
        document.getElementsByClassName("dropdown")[index].style.display = "none";
        document.getElementsByClassName("dropdown2")[index].style.display = "none";
        document.getElementsByClassName("dropdown3")[index].style.display = "none";
        document.getElementsByClassName("dropdown4")[index].style.display = "none";
        document.getElementsByClassName("dropdown5")[index].style.display = "none";
        document.getElementsByClassName(id)[index].style.display = "flex"
    }
    else {
        document.getElementsByClassName(id)[index].style.display="none"

    }
}