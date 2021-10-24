window.onload = function(){
    fullName.value = localStorage.getItem("name");
    mail.value = localStorage.getItem("email");
    pass.value = localStorage.getItem("pass");
    age.value = localStorage.getItem("age");
    phone.value = localStorage.getItem("phone");
    address.value = localStorage.getItem("address");
    city.value = localStorage.getItem("city");
    zip.value = localStorage.getItem("zip");
    dni.value = localStorage.getItem("dni");
}


var url = 'http://curso-dev-2021.herokuapp.com/newsletter';


function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i) ;
}

function isSpace(str) {
    return str.length === 1 && str === ' ';    
}

function modalOpen (param){
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    localStorage.clear();
    for (let key in param) {
        if(! key==0){
            localStorage.setItem(key, param[key]);

        }
    }
    console.log(param);
    var par = document.createElement('p');
    par.className = "inner-text-modal";
    var cont = document.getElementById("modal-content");
    par.appendChild(document.createTextNode(param));
    cont.appendChild(par);
}

function close(e){
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}


function success(elem){
    url = url + '?' + 'name=' + elem[0] + '&email=' + elem[1] + '&pass=' + elem[2]
    + '&age=' + elem[3] + '&phone=' + elem[4] + '&address=' + elem[5] + '&city=' + elem[6]
    + '&zip=' + elem[7] + '&dni=' + elem[8];
    console.log(url);
    fetch(url)
        .then(function(res) {
            if (res.status < 200 || res.status >= 300) {
                throw Error(res.status + ": " + res.statusText);
            }
            return res.json();
        })
        .then(modalOpen)
        .catch(modalOpen);
}


function failure(elem){
    modalOpen(elem);
    localStorage.clear();
}










var formArray = [0,0,0,0,0,0,0,0,0];

/* name */ 
var fullName = document.getElementById('name');
var nameSpan = document.getElementById('name-span');
fullName.textContent = localStorage.key = "name";
fullName.addEventListener('blur', checkName);
fullName.addEventListener('focus', clrErrorName);
fullName.addEventListener('keyup', runEvent);

function checkName(e) {
    var str = fullName.value , ctr = 0, sp = 0;
    if(str[0] == ' ' || str[str.length-1] == ' '){
        ctr = 1;
    }
    for(var i= 0; i<str.length;i++){
        if(!isLetter(str[i])){
            if(isSpace(str[i])){
                sp++;
                continue;
            }
            else{
                ctr = 1;
            }
        }
    }
    if(ctr == 1 || str.length < 6 || sp == 0){
        nameSpan.style.visibility = "visible";
        formArray[0] = 0;
    }   
    else{
        nameSpan.style.visibility = "hidden";
        formArray[0] = str;
    } 
}
function clrErrorName(e){
    nameSpan.style.visibility = "hidden";
}

function runEvent(e){
    document.getElementById('greeting').innerHTML = 'Hello ' + e.target.value;
}



/* mail */

var mail = document.getElementById('mail');
var mailSpan = document.getElementById('mail-span');
mail.addEventListener('blur', checkMail);
mail.addEventListener('focus', clrErrorMail);

function checkMail(e){
    var str = mail.value, ctr = 0 , atCtr = 0;
    if(str[0] == '@' || str[str.length-1] == '@' ||  str[str.length-1] == '.'){
        ctr = 1;
    }
    else{
        for(var i = 0; i < str.length ; i++){
            if(str[i] == '@'){
                atCtr++;
                for(var j = i + 1; j < str.length ; j++){
                    if(str[j] == '.' && j-2 > i){
                        continue;
                    }
                }
            }
        }
    }
    if(ctr == 1 || atCtr != 1 ){
        mailSpan.style.visibility = "visible";
        formArray[1] = 0;
    }
    else{
        formArray[1] = str;
    }
}
function clrErrorMail(e){
    mailSpan.style.visibility = "hidden";
}

/* Password */

var pass = document.getElementById('pass');
var passSpan = document.getElementById('pass-span');
pass.addEventListener('blur', checkPass);
pass.addEventListener('focus', clrErrorPass);


function checkPass(e){
    var str = pass.value , ctr = 0;
    if(str.length < 8){
        ctr = 1;
    }
    else{
        for(var i = 0 ; i < str.length ; i ++){
            if(isNaN(str[i])){
                if(isLetter(str[i]) == false){
                    ctr = 1;
                }
            }
        }
    }
    if(ctr == 1){
        passSpan.style.visibility = "visible";
        formArray[2] = 0;
    }
    else{
        formArray[2] = str;
        
    }
}

function clrErrorPass(e){
    passSpan.style.visibility = "hidden";
}

/* Password confirmation */

var passConfirm = document.getElementById('rep-pass');
var repPassSpan =  document.getElementById('pass-span-2');
passConfirm.addEventListener('blur' , checkPass2);
passConfirm.addEventListener('focus', clrErrorPass2);

function checkPass2(e){
    var str = passConfirm.value;
    if(formArray[2] != str){
        repPassSpan.style.visibility = "visible";
        formArray[2] = 0;
    }
}
function clrErrorPass2(e){
    repPassSpan.style.visibility = "hidden";
}

/* age */

var age = document.getElementById('age');
var ageSpan = document.getElementById('age-span');
age.addEventListener('blur', checkAge);
age.addEventListener('focus', clrErrorAge);

function checkAge(e){
    var str = age.value;
    if(str < 18 || isNaN(str)){
        ageSpan.style.visibility = "visible";
        formArray[3] = 0;
    }
    else{
        formArray[3] = str;
    }
}
function clrErrorAge(e){
    ageSpan.style.visibility = "hidden";
}

/* Phone number */

var phone = document.getElementById('phone');
var phoneSpan = document.getElementById('phone-span');
phone.addEventListener('blur', checkPhone);
phone.addEventListener('focus', clrErrorPhone);

function checkPhone(e){
    var str = phone.value;
    if(str.length < 7 || isNaN(str)){
        phoneSpan.style.visibility = "visible";
        formArray[4] = 0;
    }
    else{
        formArray[4] = str;
    }
}
function clrErrorPhone(e){
    phoneSpan.style.visibility = "hidden";
}

/* Address */

var address = document.getElementById('address');
var addressSpan = document.getElementById('add-span');
address.addEventListener('blur', checkAdd);
address.addEventListener('focus', clrErrorAdd);

function checkAdd(e){
    var str = address.value , ctr = 0 , sp = 0;
    if(str.length < 5){
        ctr = 1;
    }
    else{
        for(var i= 0; i<str.length;i++){
            if(!isLetter(str[i])){
                if(isSpace(str[i]) || !isNaN(str[i])){
                    if(isSpace(str[i])){
                        sp++;
                    }
                    continue;
                }
                else{
                    ctr = 1;
                }
            }
        }
    }
    if(ctr == 1 || sp < 1){
        addressSpan.style.visibility = "visible";
        formArray[5] = 0;
    }
    else{
        formArray[5] = str;
    }
}

function clrErrorAdd(e){
    addressSpan.style.visibility = "hidden";
}

/* City */

var city = document.getElementById('city');
var citySpan = document.getElementById('city-span');
city.addEventListener('blur', checkCity);
city.addEventListener('focus', clrErrorCity);

function checkCity(e){
    var str = city.value , ctr = 0;
    for(var i= 0; i<str.length;i++){
        if(!isLetter(str[i])){
            if(isSpace(str[i])){
                continue;
            }
            else{
                ctr = 1;
            }
        }
    }
    if(ctr == 1 || str.length < 3){
        citySpan.style.visibility = "visible";
        formArray[6] = 0;
    }   
    else{
        citySpan.style.visibility = "hidden";
        formArray[6] = str;
    } 
}
function clrErrorCity(e){
    citySpan.style.visibility = "hidden";
}

/* Zip Code */

var zip = document.getElementById('zip');
var zipSpan = document.getElementById('zip-span');
zip.addEventListener('blur', checkZip);
zip.addEventListener('focus', clrErrorZip);

function checkZip(e){
    var str = zip.value , ctr = 0;
    if(str.length < 3){
        zipSpan.style.visibility = "visible";
    }
    else{
        for(var i= 0; i<str.length;i++){
            if(!isLetter(str[i])){
                if(!isNaN(str[i])){
                    continue;
                }
                else{
                    ctr = 1;
                }
            }
        }
    }
    if(ctr == 1){
        zipSpan.style.visibility = "visible";
        formArray[7] = 0;
    }
    else{
        formArray[7] = str;
    }
}
function clrErrorZip(e){
    zipSpan.style.visibility = "hidden";
}

/* DNI */

var dni = document.getElementById('dni');
var dniSpan = document.getElementById('dni-span');
dni.addEventListener('blur', checkDni);
dni.addEventListener('focus', clrErrorDni);

function checkDni(e){
    var str = dni.value;
    if(str.length < 7 || str.length > 8 || isNaN(str)){
        dniSpan.style.visibility = "visible";
        formArray[8] = 0;
    }
    else{
        formArray[8] = str;
    }
}
function clrErrorDni(e){
    dniSpan.style.visibility = "hidden";
}

var modal = document.getElementById('modal');
var closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', close);

/* Submit Button */

var button = document.getElementById('btn-sbm');
button.addEventListener('click', showData);

function showData(e){
    e.preventDefault();
    var check = false;
    for(var i = 0; i < 9; i++){
        if(formArray[i] ==  0){
            check = true;
            switch(i){
                case 0:
                    nameSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 1:
                    mailSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 2:
                    passSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 3:
                    ageSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 4:
                    phoneSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 5:
                    addressSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 6:
                    citySpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 7:
                    zipSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
                case 8:
                    dniSpan.style.visibility = "visible";
                    formArray[i] = 0;
                    break;
            }
        }
    }
    if(!check){
        success(formArray);
    }
    else{
        failure(formArray);
    }
}
