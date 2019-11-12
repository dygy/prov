const request = {

};

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