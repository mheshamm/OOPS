function val(){
    var name=document.querySelector('#name');
    var pass=document.querySelector('#pass');
    var error=document.querySelector('#error');
    var user =document.querySelector('#us');
    var lock =document.querySelector('#lo');
    user.classList.remove('ani');
    lock.classList.remove('ani');
    if(name.value.length <5 ){
        name.focus();
        
        error.style.padding='10px';
        error.innerHTML='الاسم غير صحيح';
        user.classList.add('ani');
        return false ;
    }
    if(pass.value.length <8 ){
        pass.focus();
        
        error.style.padding='10px';
        error.innerHTML='كلمة المرور غير صحيحة';
        lock.classList.add('ani');
        return false ;
    }
    
    alert('تم تسجيل الدخول بنجاح');
    
    
    return true ;
}
