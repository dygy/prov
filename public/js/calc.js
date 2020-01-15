function addClass(elem) {
    // get all 'a' elements
    let a = getSelectable(elem);
    if (a.classList.contains("slider")||a.classList.contains("selector")||a.classList.contains("color")){
        removeKebab(a)
    }
    else {
        getSlider(a)
    }
    elem.classList.add('active');
}
function getSlider(elem) {
    for (let x=0;x<elem.childNodes.length;x++){
        if (elem.childNodes[x].classList.contains("slider")){
            removeKebab(elem.childNodes[x])
        }
    }
}
function removeKebab(slider) {
    for (let x=0;x<slider.childNodes.length;x++){
        if (slider.childNodes[x].classList.contains("active")){
            slider.childNodes[x].classList.remove("active")
        }
    }

}
function getSelectable(elem) {
    if (elem.parentElement.classList.contains("selectable")){
        return elem.parentElement
    }
    else {
        return getSelectable(elem.parentElement)
    }
}
const request = {

};
function setShadow(color) {
    elem("output").style.textShadow="1px 1px 8px "+ color;
}
function setBorder(color) {
    elem("output").style.webkitTextStrokeColor=color;
}
function setColor(color) {
    elem("output").style.color=color;
}
function setOutput(family) {
    if (family==="italic"){
        elem("output").style.fontStyle=family
        elem("output").style.fontFamily="Arial"

    }
    else {
        elem("output").style.fontStyle="normal"
        elem("output").style.fontFamily=family
    }
}
function  setFile(id){
    request["file"]=document.getElementById(id).files
}

function  setInput(id){
    request[id]=document.getElementById(id).value;
}
function checkOrder() {
    console.log(request);
    sendRequest();
}
function sendRequest() {
    const reader = new FileReader()
    request.url = location.href;
    const xhr = new XMLHttpRequest();
    const url = "/order";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    const data = JSON.stringify(request);
    xhr.send(data);
}