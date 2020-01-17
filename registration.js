
// class AdminUser{
//     constructor(name,email,password1,city,state){
//         this.name=name;
//         this.email=email;
//         this.password1=password1;
//         this.city=city;
//         this.state=state;
//     }
//     show(){
//         console.log(this.name);
//     }
// }


var formId=document.getElementById("registerationPage");
arrobj=JSON.parse(localStorage.getItem("arrObj"));
arr=[];
var cnt=0;
function validateForm(){
    
    if(formId.name.value!=""){
        cnt++;
        console.log(cnt);
    }
    else{
        alert("please enter valid the name");
    }
    
    let atPos=formId.email.value.indexOf('@');
    let dotPos=formId.email.value.indexOf('.');
    if( atPos < dotPos && atPos>0 && dotPos>0){
        cnt++;
        
    console.log(cnt);
    }
    else{
        alert("Enter valid email address");
    }

    if(formId.password1.value==formId.confirmPassword.value){
        cnt++;
        console.log(cnt);
    }
    else{
        alert("password and confirm password does not match");
    }
    console.log(cnt);
    if(cnt==3){
        alert("Registered successfully");
        console.log(formId.name.value);
        console.log(formId.email.value);
        console.log(formId.password1.value);
        console.log(formId.city.value);
        console.log(formId.state.value);
        
      
        arrObj = {name: formId.name.value, email: formId.email.value, password1: formId.password1.value,
             city:formId.city.value, state: formId.state.value};
        arr.push(arrobj);
        
        localStorage.setItem("arrObj", JSON.stringify(arr));
    
        window.location="login1.html";

    }
}