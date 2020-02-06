function send(){
    var sendb=document.querySelector('#send');
    window.location.href = '#s-msg';
    
}
function calll(){
    var call =document.querySelector('#call');
    call.classList.add('anii');
    call.innerHTML='01064517710';
    
}
document.querySelector('#fav').addEventListener('click' , function(e){
    var event = e.target;
   document.querySelector('#st').classList.toggle('fas');
   document.querySelector('#st').classList.toggle('ora');
})

function val(){
    var msg =document.querySelector('#s-msg');
    document.querySelector('#error').style.display='none';
    if(msg.value.length < 20 ){
        msg.focus();
        document.querySelector('#error').style.display='block';
        return false ;

    }
    alert('تم ارسال الرسالة بنجاح');
    msg.value='';
    window.location.href = '#header';
    return true ;
    

}