function val(){
    var phone = document.querySelector('#phone');
    var error = document.querySelector('#error');
    var user =document.querySelector('#us');
    user.classList.remove('ani');
    if(phone.value.length < 11 || isNaN(phone.value) ){
        error.style.padding = '10px';
        error.innerHTML='رقم الهاتف غير صحيح';
        user.classList.add('ani');
        
        return false ;

    }
}