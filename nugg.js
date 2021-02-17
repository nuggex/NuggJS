function nog(x){
    console.log(x)
}

function Nug(x){
    return Object.keys(x)
}

function Nugg(x){
    x.forEach(element => {
        return element;
    });
}

function Nuggets(x,y){
    x.forEach(element => {
        if (element == y){
            return element;}
    });
}

function net(x){
    if(x.includes("#")){
        return document.getElementById(x);
    }else if(x.includes(".")){
        return document.getElementsByClassName(x);
    }else{
        return document.querySelectorAll(x)
    }
}

var m = function (){}

m.c = function(x) {return Math.ceil(x)}
m.f = function(x) {return Math.floor(x)}
m.r = function(x) {return Math.round(x)}
m.p = function(x) {return Math.pow(x)}
m.sq = function(x) {return Math.sqrt(x)}
m.a = function(x) {return Math.abs(x)}
m.si = function(x) {return Math.sin(x)}
m.co = function(x) {return Math.sin(x)}


