window.onscroll = function(ev) {
    if (((window.innerHeight + window.scrollY) >= 1000)) {
        document.getElementById("header").style.display="none";
        document.getElementById("header2").style.display="block";
        hideDropDown("dropdown")
        hideDropDown("dropdown")
    }
    else if (((window.innerHeight + window.scrollY) <= 1000)) {
        document.getElementById("header").style.display="block"
        document.getElementById("header2").style.display="none";

    }
 };
function hideDropDown(id) {
    if (document.getElementById(id).style.display!=="flex") {
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("dropdown2").style.display = "none";
        document.getElementById("dropdown3").style.display = "none";
        document.getElementById("dropdown4").style.display = "none";
        document.getElementById("dropdown5").style.display = "none";
        document.getElementById(id).style.display = "flex"

    }
    else {
        document.getElementById(id).style.display="none"

    }
}