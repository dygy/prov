hideAll()
function hideAll() {
    document.getElementsByClassName('dropdown')[1].style.display = "none"
    document.getElementsByClassName('dropdown')[0].style.display = "none"
    for (let x = 2; x < 6; x++) {
        document.getElementsByClassName('dropdown' + x)[1].style.display = "none"
        document.getElementsByClassName('dropdown' + x)[0].style.display = "none"
    }
}
function hidePhoto() {
    if (elem('hidden').style.display !== "block"){
        elem('hidden').style.display = "block"
        elem('toHide').style.display = "none"
    }
    else{
        elem('hidden').style.display = "none"
        elem('toHide').style.display = "flex"
    }
}

let triggerPoint= window.innerWidth;
window.onscroll = function(ev) {
    if (triggerPoint < 1280) {
        console.log(triggerPoint)
        triggerPoint+=300;
    }
    if (((window.innerHeight + window.scrollY) >= triggerPoint/1.5)) {
        document.getElementById("header").style.display="none";
        document.getElementById("header2").style.display="block";
        hideAll()
    }
    else if (((window.innerHeight + window.scrollY) <= triggerPoint)) {
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