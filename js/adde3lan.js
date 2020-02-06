function type1(){
    var e3lan = document.querySelector('#e3lan-type');
    var value = e3lan.options[e3lan.selectedIndex].value;
    var typee = document.querySelector('#type-cont');
   

    if(value ==='1'){
        typee.innerHTML = `
        <div class="data-item" id="model">
                        
        <label id="model-label" > الموديل </label>
        <select id="model-type">
            <option selected disabled> الموديل </option>
            <option > 2010 </option>
            <option > 2011 </option>
            <option  > 2018 </option>
        </select>
    
</div>
<div class="data-item" id="model-year">
    
        <label id="model-year1"> سنة الموديل </label>
        <select id="model-year">
            <option selected disabled> السنة </option>
            <option > 2010 </option>
            <option > 2011 </option>
            <option  > 2018 </option>
        </select>
    
</div>
<div class="data-item" >
    
        <label > عداد الكيلومترات </label>
        <input type="text" id="km" >
    
</div>
<div class="data-item" id="motion">
    
        <label id="motion1"> ناقل الحركة </label>
        <select id="motion">
            <option selected> أوتوماتيك </option>
            <option > مانيوال </option>
            
        </select>
    
</div>
<div class="data-item" id="status">
    
        <label id="status1"> الحالة </label>
        <select id="status">
            <option selected > مستعمل </option>
            <option > زيرو </option>
            
        </select>
   
</div>
<div class=" Addtions data-item " id="addtions">
    
        <label id="addtions"> اضافات </label>
        <div class="row">
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="glass"> زجاج كهرباء</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="lights"> فوانيس شبورة</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
        <span class="col-4"><input type="checkbox" name="optio1" value="camera"> كاميرا خلفية</span>
    </div>
</div>
        `
    }
    if (value === '2'){
        typee.innerHTML = `
        <div class="data-item" >
                        
        <label  > نوع الحيوان </label>
        <select id="animal-type">
            <option selected disabled> نوع الحيوان </option>
            <option value='dog'> كلب </option>
            <option value='cat' > قطة </option>
            <option value='turtle' > سلحفاه </option>
        </select>
    
</div>
<div class="data-item">
    
        <label > العمر </label>
        <input class="control" type='text' id="age">
           
    
</div>
<div class="data-item" >
    
        <label > الوزن </label>
        <input class="control" type="text" id="weight" >
    
</div>
`

    }
    if (value === '3'){
        typee.innerHTML = `
        <div class="data-item" >
                        
        <label  > نوع الموبايل </label>
        <select id="mobile-type" onchange='return mob(); '>
            <option value='0' selected disabled> نوع الموبايل </option>
            <option value='apple'> أبل </option>
            <option value='samsung' > سامسونج </option>
            <option value='oppo' > أوبو </option>
            <option value='huawui' > هواوي </option>
            <option value='sony' > سوني </option>
        </select>
    
</div>
<div class="data-item">
    
        <label > الموديل </label>
        <select id="mobile-model">
            <option value='0' selected disabled> نوع الموديل </option>
            
        </select>
           
    
</div>

`
        
    }
    if (value==='4'){
        typee.innerHTML = `
        <div class="data-item" >
                        
        <label  > نوع الجهاز </label>
        <input class="control" type="text" id="device-type" >
    
</div>
<div class="data-item">
    
        <label > الموديل </label>
        <input class="control" type="text" id="device-model" >
           
    
</div>

`

    }


    
   
}
function mob(){
    var mobType = document.querySelector('#mobile-type');
var mobvalue = mobType.options[mobType.selectedIndex].value;
var mobModel = document.querySelector('#mobile-model');

    if(mobvalue==='apple'){
        mobModel.innerHTML=`
        
            <option value='xsmax'> XS Max </option>
            <option value='xs' > Xs </option>
            <option value='11pro' > 11 Pro  </option>
            <option value='11' > 11 </option>
            <option value='x' > X </option>
            <option value='8p' > 8+ </option>
            <option value='8' > 8 </option>
            `
    }
    if(mobvalue==='samsung'){
        mobModel.innerHTML=`
        
            <option value='note10'> Note 10 </option>
            <option value='s10' > S 10 </option>
            <option value='s9' > s9  </option>
            <option value='note9' > note9 </option>
            
            `
            
    }
    if(mobvalue==='oppo'){
        mobModel.innerHTML=`
        
            <option value='findx'> Find X </option>
            <option value='f11' > F11 </option>
            <option value='reno' > Reno  </option>
            <option value='f9' > F9 </option>
            
            ` }
    




}

function val(){
    var nameE3lan = document.querySelector('#e3lan-name');
    var type = document.querySelector('#e3lan-type');
    
var valuee = type.options[type.selectedIndex].value;
    var price = document.querySelector('#price');
    var desc = document.querySelector('#desc');
    var loca = document.querySelector('#loca');
    var namee = document.querySelector('#namee');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var error = document.querySelector('#error');
    nameE3lan.style.border='0';
    type.style.border='0';
    price.style.border='0';
    desc.style.border='0';
    loca.style.border='0';
    namee.style.border='0';
    email.style.border='0';
    phone.style.border='0';
    

    if(nameE3lan.value.length < 4){
        error.style.padding='10px'
        error.innerHTML="من فضلك يجب أن يكون اسم الاعلان أكبر من 4 حروف";
        nameE3lan.style.border='2px solid red';
        
        nameE3lan.focus();
        return false ;
    }
    if(valuee === '0'){
        error.style.padding='10px'
        error.innerHTML="اختر نوع الاعلان";
       type.style.border='2px solid red';
        
       type.focus();
        return false ;
    }
    if(price.value.length < 0  || price.value === "" || isNaN(price.value)){
        error.style.padding='10px'
        error.innerHTML="ادخل السعر";
       price.style.border='2px solid red';
        
       price.focus();
        return false ;
    }
    if(desc.value.length < 20 ){
        error.style.padding='10px'
        error.innerHTML="يجب أن يكون وصف الاعلان أكبر من 20 حرف";
       desc.style.border='2px solid red';
        
       desc.focus();
        return false ;
    }
    if(loca.value.length < 3){
        error.style.padding='10px'
        error.innerHTML="ادخل مكان الاعلان";
       loca.style.border='2px solid red';
        
       loca.focus();
        return false ;
    }
    if(namee.value.length < 4){
        error.style.padding='10px'
        error.innerHTML="ادخل الاسم يجب أن يكون أكبر من 4 حروف";
       namee.style.border='2px solid red';
        
       namee.focus();
        return false ;
    }
    if(email.value.length < 4 || email.value.indexOf('@')== -1){
        error.style.padding='10px'
        error.innerHTML="ادخل البريد الالكتروني";
       email.style.border='2px solid red';
        
       email.focus();
        return false ;
    }
    if(phone.value.length < 11 || isNaN(phone.value)){
        error.style.padding='10px'
        error.innerHTML="ادخل رقم الموبايل يجب أن يكون بحد أدني 11 رقم ";
       phone.style.border='2px solid red';
        
       phone.focus();
        return false ;
    }

    alert('تم أضافة الاعلان بنجاح ');
    return true ;

    

}

