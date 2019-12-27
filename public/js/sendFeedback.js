const msg = {}
function sendFeedback() {
    if(!elem("name").value){
        alert("Пожалуйста, оставьте свое имя")
    }
    else  if (!elem("company").value){
        alert("Пожалуйста, оставьте название компании")
    }
    else if (!elem("phoneN").value){
        alert("Пожалуйста, оставьте номер телефона")
    }
    else if (!elem("email").value){
        alert("Пожалуйста, оставьте электронную почту")
    }
    else if (!elem("comment").value){
        alert("Пожалуйста, оставьте сообщение")
    }
    else{
        msg.comment = elem("comment").value
        msg.company = elem("company").value
        msg.email = elem("email").value
        msg.phone =  elem("phoneN").value
        msg.name = elem("name").value
        const xhr = new XMLHttpRequest();
            const url = "/feedback";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const json = JSON.parse(xhr.responseText);
                    console.log(json.email + ", " + json.password);
                }
            };
            const data = JSON.stringify(msg);
            xhr.send(data);

    }

}
