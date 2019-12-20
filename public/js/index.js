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