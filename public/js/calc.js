function calc(type) {
    console.log(type)
    if (type === "БУКВЫ") {
        if (request.razm) {
            //console.log(request.razm)
            if (request.formI === "акрил+ПВХ") {
                calc2(85)
            }
            else if (request.formI === "акрил") {
                calc2(120)
            }
            else if (request.formI === "акрил+ПВХ + контражур") {
                calc2(125)
            }
            else if (request.formI === "акрил + металл") {
                calc2(125)
            }
            else if (request.formI === "открытые светодиоды") {
                calc2(165)
            }
        }
    }
}
function calc2(cm) {
    let price;
    if (request.also !=="фотодатчик"){
        if (request.font === "c засечками" || request.font === "курсив") {
            price= addZero(((request.razm * cm) * request.text.replace(' ','').length)* 1.3)
            elem("right").innerText = price + " руб."
        } else {
            price= addZero((request.razm * cm)* request.text.replace(' ','').length)
            elem("right").innerText = price + " руб."
        }
    }
    else{
        if (request.font === "c засечками" || request.font === "курсив") {
            price = addZero(((request.razm * cm) * request.text.replace(' ','').length)* 1.3 +3000)
            elem("right").innerText = price + " руб."
        } else {
            price= addZero((request.razm * cm)* request.text.replace(' ','').length +3000)
            elem("right").innerText = price + " руб."
        }
    }
}
function addZero(price) {
    if (price.toString()[price.toString().length-2]==='.'){
        return price.toString()+"0"
    }
    else {
        return price
    }
}
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
    request.fileName=document.getElementById(id).files.item(0).name
    const reader = new FileReader()
    reader.onloadend = function () {
        request.file = reader.result //.replace(/data:.*;base64\,/,"");
    };
    reader.readAsDataURL(document.getElementById(id).files.item(0))
}

function  setInput(id){
    request[id]=document.getElementById(id).value;
}
function checkOrder() {
    console.log(request);
    if (!request.nameO){
        displayMessage("Пожалуйста, укажите имя")
    }
    else if(!request.emailO || !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(request.emailO)){
        displayMessage("Пожалуйста, укажите электронную почту")
    }
    else if(!request.phoneO || !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(request.phoneO)){
        displayMessage("Пожалуйста, укажите телефон")
    }
    else if (!document.getElementById("squaredThree").checked){
        displayMessage("Пожалуйста, согласитетсь на обработку персональных данных")
    }
    else sendRequest();


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
    displayMessage("Ваш заказ отправлен");
    elem("order").style.display='none'
}