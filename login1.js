
var cnt=0;
function loginValidate(){
    var formId=document.getElementById("loginPage");
    var storeValue=JSON.parse(localStorage.getItem("arrObj"));
    
    let atPos=formId.email.value.indexOf('@');
    let dotPos=formId.email.value.indexOf('.');
    if( atPos < dotPos && atPos>0 && dotPos>0){
        cnt++;
        console.log(cnt);
    }
    else{
        alert("Enter valid email address");
    }

    console.log(storeValue.length);
    for (let index = 0; index < storeValue.length; index++) {
        console.log(index+"====");
        if(storeValue[i].email==formId.email.value && storeValue[i].password1==formId.password1.value){

        // if(formId.email.value=="abc@gmail.com" && formId.password1.value=="123"){
            alert("login Successfull");
            window.location="dashboard.html";

        }
        else{
            alert("Invalid Login Deatils");
        }
        
    }
}