function placeOrder(){

if(document.myForm.name.value==""){
    alert("Please provide your Name!");
    document.myForm.name.focus();
    return false;
}

if(document.myForm.email.value==""){
    alert("Please provide your email!");
    document.myForm.email.focus();
    return false;
}

if(document.myForm.estate.value==""){
    alert("Please provide your estate!");
    document.myForm.name.focus();
    return false;
}
if(document.myForm.mov.value=="0"){
    alert("Select Movie");
    return false;
}
if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
            document.myForm.phone.value.length != 10 ) {
            
            alert( "Please provide Phone number" );
            document.myForm.phone.focus() ;
            return false;
         }
         if(document.myForm.Address.value==""){
            alert("Please provide your estate!");
            document.myForm.Address.focus();
            return false;
        }
        if(document.myForm.town.value==""){
            alert("Please provide your estate!");
            document.myForm.town.focus();
            return false;
        }
}

