const request = {

};
function addZero(price) {
    if (price.toString()[price.toString().length-2]==='.'){
        return price.toString()+"0"
    }
    else {
        return price
    }
}
function calcL(price) {
    elem("right").innerText = addZero(price* ((request.sizeX *request.sizeY)/100) )  + " "
}
function calcP() {
    if (request.type === "фреймлайт") {
        if (request.size ==="А3"&&request.osob ==="настенный"){
            elem("right").innerText ="3 000,00"
        }
        else if (request.size ==="А2"&&request.osob ==="настенный"){
            elem("right").innerText ="8 000,00"
        }
        else if (request.size ==="А1"&&request.osob ==="настенный"){
            elem("right").innerText ="9 000,00"
        }
        else if (request.size ==="А0"&&request.osob ==="настенный"){
            elem("right").innerText ="12 000,00"
        }

        else if (request.size ==="А3"&&request.osob ==="подвесной"){
            elem("right").innerText ="4 000,00"
        }
        else if (request.size ==="А2"&&request.osob ==="подвесной"){
            elem("right").innerText ="9 000,00"
        }
        else if (request.size ==="А1"&&request.osob ==="подвесной"){
            elem("right").innerText ="10 000,00"
        }
        else if (request.size ==="А0"&&request.osob ==="подвесной"){
            elem("right").innerText ="13 000,00"
        }

        else if (request.size ==="А3"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="7 000,00"
        }
        else if (request.size ==="А2"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="11 500,00"
        }
        else if (request.size ==="А1"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="12 500,00"
        }
        else if (request.size ==="А0"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="15 500,00"
        }

    } else if (request.type === "кристаллайт") {
        if (request.size ==="А4"&&request.osob ==="настенный"){
            elem("right").innerText ="5 850,00"
        }
        if (request.size ==="А3"&&request.osob ==="настенный"){
            elem("right").innerText ="7 550,00"
        }
        else if (request.size ==="А2"&&request.osob ==="настенный"){
            elem("right").innerText ="9 650,00"
        }
        else if (request.size ==="А1"&&request.osob ==="настенный"){
            elem("right").innerText ="12 650,00"
        }
        else if (request.size ==="А0"&&request.osob ==="настенный"){
            elem("right").innerText ="17 550,00"
        }

        else if (request.size ==="А4"&&request.osob ==="подвесной"){
            elem("right").innerText ="7 400,00"
        }
        else if (request.size ==="А3"&&request.osob ==="подвесной"){
            elem("right").innerText ="9 250,00"
        }
        else if (request.size ==="А2"&&request.osob ==="подвесной"){
            elem("right").innerText ="12 300,00"
        }
        else if (request.size ==="А1"&&request.osob ==="подвесной"){
            elem("right").innerText ="14 300,00"
        }
        else if (request.size ==="А0"&&request.osob ==="подвесной"){
            elem("right").innerText ="19 150,00"
        }
        else if (request.size ==="А4"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="7 950,00"
        }
        else if (request.size ==="А3"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="10 650,00"
        }
        else if (request.size ==="А2"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="13 250,00"
        }
        else if (request.size ==="А1"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="17 550,00"
        }
        else if (request.size ==="А0"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="25 700,00"
        }

    } else if (request.type === "магнетик") {
        if (request.size ==="А4"&&request.osob ==="настенный"){
            elem("right").innerText ="5 250,00"
        }
        if (request.size ==="А3"&&request.osob ==="настенный"){
            elem("right").innerText ="8 350,00"
        }
        else if (request.size ==="А2"&&request.osob ==="настенный"){
            elem("right").innerText ="9 400,00"
        }
        else if (request.size ==="А1"&&request.osob ==="настенный"){
            elem("right").innerText ="11 400,00"
        }
        else if (request.size ==="А0"&&request.osob ==="настенный"){
            elem("right").innerText ="15 900,00"
        }

        else if (request.size ==="А4"&&request.osob ==="подвесной"){
            elem("right").innerText ="6 150,00"
        }
        else if (request.size ==="А3"&&request.osob ==="подвесной"){
            elem("right").innerText ="9 250,00"
        }
        else if (request.size ==="А2"&&request.osob ==="подвесной"){
            elem("right").innerText ="12 300,00"
        }
        else if (request.size ==="А1"&&request.osob ==="подвесной"){
            elem("right").innerText ="12 250,00"
        }
        else if (request.size ==="А0"&&request.osob ==="подвесной"){
            elem("right").innerText ="16 800,00"
        }

        else if (request.size ==="А4"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="7 250,00"
        }
        else if (request.size ==="А3"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="11 150,00"
        }
        else if (request.size ==="А2"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="11 900,00"
        }
        else if (request.size ==="А1"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="16 700,00"
        }
        else if (request.size ==="А0"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="22 200,00"
        }

    } else if (request.type === "фреймлайт с клип-профилем") {
        if (request.size ==="А4"&&request.osob ==="настенный") {
            elem("right").innerText ="4 400,00"
        }
        else if (request.size ==="А3"&&request.osob ==="настенный"){
            elem("right").innerText ="6 050,00"
        }
        else if (request.size ==="А2"&&request.osob ==="настенный"){
            elem("right").innerText ="8 350,00"
        }
        else if (request.size ==="А1"&&request.osob ==="настенный"){
            elem("right").innerText ="8 350,00"
        }
        else if (request.size ==="А0"&&request.osob ==="настенный"){
            elem("right").innerText ="13 750,00"
        }

        else if (request.size ==="А4"&&request.osob ==="подвесной") {
            elem("right").innerText ="4 750,00"
        }
        else if (request.size ==="А3"&&request.osob ==="подвесной"){
            elem("right").innerText ="6 400,00"
        }
        else if (request.size ==="А2"&&request.osob ==="подвесной"){
            elem("right").innerText ="8 700,00"
        }
        else if (request.size ==="А1"&&request.osob ==="подвесной"){
            elem("right").innerText ="9 750,00"
        }
        else if (request.size ==="А0"&&request.osob ==="подвесной"){
            elem("right").innerText ="14 100,00"
        }

        else if (request.size ==="А4"&&request.osob ==="двухсторонний") {
            elem("right").innerText ="6 150,00"
        }
        else if (request.size ==="А3"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="7 650,00"
        }
        else if (request.size ==="А2"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="10 400,00"
        }
        else if (request.size ==="А1"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="12 150,00"
        }
        else if (request.size ==="А0"&&request.osob ==="двухсторонний"){
            elem("right").innerText ="17 300,00"
        }

    }
}
function calcSh(type) {
    if (request.formI ==="Прямоугольный"){
        elem("right").innerText ="3 700,00"
    }
    else if (request.formI ==="арочный") {
        elem("right").innerText ="3 700,00"
    }
    else if (request.formI ==="большой") {
        elem("right").innerText ="5 500,00"
    }
}
function calcR(type) {
    if(request.type==="l-banner"){
        elem("right").innerText ="7 200,00"
    }
    else if (request.type==="x-banner"){
        if (request.size==="800x1800"){
            elem("right").innerText ="5 100,00"
        }
        else if (request.size==="1200x2000"){
            elem("right").innerText ="5 800,00"
        }
    }
    else if (request.type==="roll-up double") {
        if (request.material==="полипропилен") {
            if (request.size === "850x2000") {
                elem("right").innerText = "7 500,00"
            } else if (request.size === "1000x2000") {
                elem("right").innerText = "8 200,00"
            } else if (request.size === "1200x2000") {
                elem("right").innerText = "7 500,00"
            }
        }
        else {
            if (request.print ==="без печати") {
                if (request.size === "1200x2000") {
                    elem("right").innerText = "5 500,00"
                }
                else if (request.size === "1000x2000") {
                    elem("right").innerText = "6 200,00"
                }
                else if (request.size === "850x2000") {
                    elem("right").innerText = "5 500,00"
                }
            }
            else {
                if (request.size === "1200x2000") {
                    elem("right").innerText = "9 900,00"
                }
                else if (request.size === "1000x2000") {
                    elem("right").innerText = "8 800,00"
                }
                else if (request.size === "850x2000") {
                    elem("right").innerText = "8 000,00"
                }
            }
        }
    }
    else if (request.type==="roll-up"){
        if (request.material==="полипропилен") {
            if (request.size === "850x2000") {
                elem("right").innerText = "5 760,00"
            } else if (request.size === "1000x2000") {
                elem("right").innerText = "6 550,00"
            } else if (request.size === "1200x2000") {
                elem("right").innerText = "7 200,00"
            }
        }
        else {
            if (request.print ==="без печати") {
                if (request.size === "1200x2000") {
                    elem("right").innerText = "3 780,00"
                }
                else if (request.size === "1000x2000") {
                    elem("right").innerText = "3 240,00"
                }
                else if (request.size === "850x2000") {
                    elem("right").innerText = "2 200,00"
                }
            }
            else {
                if (request.size === "1200x2000") {
                    elem("right").innerText = "6 500,00"
                }
                else if (request.size === "1000x2000") {
                    elem("right").innerText = "6 000,00"
                }
                else if (request.size === "850x2000") {
                    elem("right").innerText = "4 200,00"
                }
                else if (request.size === "1500x2000") {
                    elem("right").innerText = "10 000,00"
                }
                else if (request.size === "2000x2000") {
                    elem("right").innerText = "12 000,00"
                }
            }
        }
    }
}
function calc(type) {
    console.log(type)
    if (type === " КАЛЬКУЛЯТОР ROLL-UP") {
        calcR()
    }
    if (type === " КАЛЬКУЛЯТОР БАННЕРЫ") {
        if (request.type==="banner tkan"){
            elem("right").innerText = (request.sizeX*request.sizeY)*190
        }
        else if (request.type==="setka"){
            elem("right").innerText = (request.sizeX*request.sizeY)*210
        }
        else if (request.type==="trans tkan"){
            elem("right").innerText = (request.sizeX*request.sizeY)*245
        }

    }
    if (type === "КАЛЬКУЛЯТОР ШТЕНДЕРЫ") {
        calcSh()
    }
    if (type === " КАЛЬКУЛЯТОР СВЕТОВЫЕ ПАНЕЛИ") {
        calcP()
    }
    if (type === " КАЛЬКУЛЯТОР СВЕТОВЫЕ КОРОБА") {
        if (request.sizeX && request.sizeY) {
            if (request.formI === "МОЛОЧНЫЙ АКРИЛ") {
                calcL(160)
            } else if (request.formI === "СОТОВЫЙ ПОЛИКАРБОНАТ") {
                calcL(160)
            } else if (request.formI === "ТРАНСЛЮЦЕНТНЫЙ БАННЕР") {
                calcL(160)
            } else if (request.formI === "ОТКРЫТЫЕ СВЕТОДИОДЫ") {
                calcL(160)
            } else if (request.formI === "КОМПОЗИТ +ИНКРУСТАЦИЯ АКРИЛОМ") {
                calcL(180)
            } else if (request.formI === "ПСЕВДО-ИНКРУСТАЦИЯ") {
                calcL(220)
            }
        }
    }
    if (type === " КАЛЬКУЛЯТОР БУКВЫ") {
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
            else if (request.formI === "металл + контражур") {
                calc2(135)
            }
            else if (request.formI === "ретро") {
                calc2(125)
            }
            else if (request.formI === "открытый неон") {
                calc2(125)
            }
            else if (request.formI === "ПВХ + контражур") {
                calc2(95)
            }
            else if (request.formI === "акрил+ контражур") {
                calc2(155)
            }
            else if (request.formI === "ПВХ") {
                calc2(55)
            }
            else if (request.formI === "дерево") {
                calc2(35)
            }
        }
    }
}
function calc2(cm) {
    let price;
    if (request.also !=="фотодатчик"){
        if (request.font === "c засечками" || request.font === "курсив") {
            price= addZero(((request.razm * cm) * request.text.replace(' ','').length)* 1.3)
            elem("right").innerText = price + " "
        } else {
            price= addZero((request.razm * cm)* request.text.replace(' ','').length)
            elem("right").innerText = price + " "
        }
    }
    else{
        if (request.font === "c засечками" || request.font === "курсив") {
            price = addZero(((request.razm * cm) * request.text.replace(' ','').length)* 1.3 +3000)
            elem("right").innerText = price + " "
        } else {
            price= addZero((request.razm * cm)* request.text.replace(' ','').length +3000)
            elem("right").innerText = price + " "
        }
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
    if (a.classList.contains("color")) {
        elem.innerHTML = "<span>✓</span>"
    }
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
            if (slider.classList.contains("color")) {
                slider.childNodes[x].innerHTML = ""
            }
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

function setShadow(color) {
    if (elem("output")) {
        elem("output").style.textShadow = "1px 1px 8px " + color;
    }
    else {
        elem("output2").style.textShadow = "1px 1px 8px " + color;
    }
}
function setBorder(color) {
    if (elem("output")) {
        elem("output").style.webkitTextStrokeColor = color;
    }
    else {
        elem("output2").style.webkitTextStrokeColor = color;
    }
}
function setColor(color) {
    if (elem("output")) {
        elem("output").style.color=color;
    }
    else {
        elem("output2").style.color=color;
    }
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
    if (id==="razm" ||id==="sizeX"||id==="sizeY"){
        if (document.getElementById(id).value<0){
            document.getElementById(id).value=0
        }
        else if( document.getElementById(id).value.toString().indexOf('e')===-1){
           document.getElementById(id).value=  parseInt( document.getElementById(id).value)
        }
    }
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