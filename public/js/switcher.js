const lights = 7;
const symbs = 7;
const krons = 7;
const nolights = 7;
const bans = 7;
const zones = 9;
const stands = 8;
const vists = 7;
const groups = 6;
const tables = 8;
const autos = 8;
String.prototype.lastReplace= function(from,to)  {
    let str = this.split("");
    for (let x=str.length;x>0;x--){
        if (parseInt(str[x])===from){
            str[x]=to;
            return str.join("")
        }
    }
};

function newRow(prod, isNext) {
    if (prod==="lights") {
        if (isNext) {
            switcherNext("lights", lights)
        }
        else {
            switcherPrev("lights", lights)
        }
    }
    if (prod==="symbs"){
        if (isNext) {
            switcherNext("symbs",symbs)
        }
        else {
            switcherPrev("symbs",symbs)
        }
    }
    if (prod==="krons"){
        if (isNext) {
            switcherNext("krons",krons)
        }
        else {
            switcherPrev("krons",krons)
        }
    }
    if (prod==="nolights"){
        if (isNext) {
            switcherNext("nolights",nolights)
        }
        else {
            switcherPrev("nolights",nolights)
        }
    }
    if (prod==="bans"){
        if (isNext) {
            switcherNext("bans",bans)
        }
        else {
            switcherPrev("bans",bans)
        }
    }
    if (prod==="zones"){
        if (isNext) {
            switcherNext("zones",zones)
        }
        else {
            switcherPrev("zones",zones)
        }

    }
    if (prod==="vists"){
        if (isNext) {
            switcherNext("vists",vists)
        }
        else {
            switcherPrev("vists",vists)
        }

    }
    if (prod==="groups"){
        if (isNext) {
            switcherNext("groups",groups)
        }
        else {
            switcherPrev("groups",groups)
        }

    }
    if (prod==="tables"){
        if (isNext) {
            switcherNext("tables",tables)
        }
        else {
            switcherPrev("tables", tables)
        }
    }
    if (prod==="autos"){
        if (isNext) {
            switcherNext("autos",autos)
        }
        else {
            switcherPrev("autos", autos)
        }
    }
    if (prod==="stands"){
        if (isNext) {
            switcherNext("stands",stands)
        }
        else {
            switcherPrev("stands", stands)
        }
    }
    function switcherNext(classname, limit) {
        let imgs = elems(classname)
        for (let x =0;x<elems(classname).length; x++){
            let number = parseInt(imgs[x].src.replace(/3000/g,"").match(/\d+/)[0])
            let repl
            if (number<limit) {
                repl = imgs[x].src.lastReplace(number , number + 1)
                imgs[x].src = repl
                imgs[x].onclick = function  (){displayImg(repl)}
            }
            else {
                repl= imgs[x].src.lastReplace(number , 1)
                imgs[x].src = repl
                imgs[x].onclick = function  (){displayImg(repl)}
            }
        }
    }
    function switcherPrev(classname, limit) {
        let imgs = elems(classname);
        for (let x =0;x<imgs.length; x++){
            let number = parseInt( imgs[x].src.replace(/3000/g,"").match(/\d+/)[0] );
            let repl
            if (number>1) {
                repl = imgs[x].src.lastReplace(number , number - 1);
                imgs[x].src = repl
                imgs[x].onclick = function  (){displayImg(repl)}
            }
            else {
                repl = imgs[x].src.lastReplace(number , limit)
                imgs[x].src = repl;
                imgs[x].onclick = function  (){displayImg(repl)}
            }
        }
    }
}