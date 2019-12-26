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
function  setInput(id){
    request[id]=document.getElementById(id).value;
}
function sendRequest() {
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