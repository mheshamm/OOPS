function selecting(){
    var what = document.querySelector('#what');
    var value = what.options[what.selectedIndex].value;
    var types = document.querySelector('#types');
    if (value === '1'){
        types.innerHTML = `
        <select class="col-lg-2 col-md-6 col-sm-6" id="type">
                            <option disabled selected >اختر الفئة</option>
                            <option value="1" >سيدان</option>
                            <option value="2">هاتشباك</option>
                            <option value="3">رياضية</option>
                            
                          </select>
                          
                          <select class="col-lg-2 col-md-6 col-sm-6" id="year">
                            <option disabled selected > السنة</option>
                            <option value="1" >2020</option>
                            <option value="2">2019</option>
                            <option value="3">2018</option>
                            <option value="4">2017</option>
                            
                          </select>
                          <select class="col-lg-2 col-md-6 col-sm-6" id="gear">
                            <option disabled selected >ناقل الحركة</option>
                            <option value="1" >أوتوماتيك</option>
                            <option value="2">مانيوال</option>
                            
                          </select>

                          <select class=" col-lg-2 col-md-6 col-sm-6" id="status">
                            <option disabled selected >الحالة</option>
                            <option value="1" >زيرو</option>
                            <option value="2">مستعمل</option>
                            
                          </select>
        `
    }
    if(value === '2'){
        types.innerHTML = `
        <select class="col-lg-5 col-md-6 col-sm-6" id="type-clo" onchange='return sizes();'>
                            <option disabled selected >نوع الملابس</option>
                            <option value="1" >تي شيرتات</option>
                            <option value="2">بناطيل</option>
                            <option value="3">أحذية</option>
                            <option value="4">قمصان</option>
                            <option value="5">جواكيت</option>
                            <option value="6">ملابس رياضية</option>
                            
                          </select>
                          
                          <select class="col-lg-5 col-md-6 col-sm-6" id="size">
                          <option disabled selected >المقاس</option>
                            
                            
                          </select>
                          
        `
    }
    if(value === '3'){
        types.innerHTML = `
        <select class="col-lg-5 col-md-6 col-sm-6" id="type-dev" >
                            <option disabled selected >نوع الجهاز </option>
                            <option value="1" >تلفزيونات </option>
                            <option value="2">تلاجات</option>
                            <option value="3">بوتاجازات</option>
                            <option value="4">تكييفات</option>
                            <option value="5">اجهزة اخري</option>
                            
                            
                          </select>
                          
                          <select class="col-lg-5 col-md-6 col-sm-6" id="dev-status">
                          <option disabled selected >الحالة</option>
                          <option value="1" >جديد </option>
                            <option value="2">مستعمل</option>
                            
                            
                          </select>
                          
        `
    }
    if(value === '4'){
        types.innerHTML = `
        <select class="col-lg-5 col-md-6 col-sm-6" id="type-build" onchange='return numbe();'>
                            <option disabled selected >نوع العقار </option>
                            <option value="1" >عمارات </option>
                            <option value="2">فيلات</option>
                            <option value="3">شاليهات</option>
                            <option value="4">شقق</option>
                            <option value="5">غرف</option>
                            
                            
                          </select>
                          
                          <select class="col-lg-5 col-md-6 col-sm-6" id="build-no">
                          <option disabled selected >عدد الطوابق \ الغرف</option>
                          
                            
                            
                          </select>
                          
        `
    }

}

function sizes(){
    var cloth = document.querySelector('#type-clo');
    var value = cloth.options[cloth.selectedIndex].value;
    var size =  document.querySelector('#size');
    if(value === '1' || value === '4' || value === '5' || value === '6') {
        size.innerHTML = `
        <option value="xs" >XS</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">X Large</option>
                            <option value="xxl">XX Large</option>
        `


    }
    if(value === '2'){
        size.innerHTML = `
        <option value="28" > 28 </option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
        `
    }
    if(value === '3'){
        size.innerHTML = `
        <option value="39" > 39 </option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
        `
    }
}

function numbe(){
    var typee = document.querySelector('#type-build');
    var value = typee.options[typee.selectedIndex].value;
    var num =  document.querySelector('#build-no');
    if(value === '1'){
        num.innerHTML = `
        <option selected disabled > عدد الطوابق </option>
        <option value="1" > 1 </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

        `
    }
    if(value === '2'){
        num.innerHTML = `
        <option selected disabled > عدد الطوابق </option>
        <option value="1" > 1 </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                           

        `
    }
    if(value === '3' || value === '4'){
        num.innerHTML = `
        <option selected disabled > عدد الغرف </option>
        <option value="1" > 1 </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            

        `
    }
    if(value === '5'){
        num.style.display = "none" ;

    }
    
    

}
