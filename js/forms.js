function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i) ;
}

function isSpace(str) {
    return str.length === 1 && str === ' ';    
}

function chequeo(str) {
    for(var i= 0; i<str.length;i++){
        if(!isLetter(str[i])){
            if(isSpace(str)){
                continue;
            }
            else{
                console.log("no es letra");
            }
        }
    }    
}





console.log(document.forms)