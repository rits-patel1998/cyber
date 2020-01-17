
function showTable() {
    // var localObject=localStorage.getItem('localobj');
    var allUser=JSON.parse(localStorage.getItem('localobj'));
    var table = document.getElementById("usertable");
    
    for (let i = 0; i < allUser.length; i++) {
    
        var row=table.insertRow();
        var cell1=row.insertCell();
        var cell2=row.insertCell();
        var cell3=row.insertCell();
        var cell4=row.insertCell();
        var cell5=row.insertCell();
        var cell6=row.insertCell();

        cell1.innerHTML=allUser[i].name;
        cell2.innerHTML=allUser[i].email;
        cell3.innerHTML=allUser[i].password;
        cell4.innerHTML=allUser[i].birthdate;
        cell5.innerHTML=Number(Date()-allUser[i].birthdate) ;
        cell6.innerHTML="<input type='submit' value='DELETE' onclick='deleteUser('" +allUser[i] +");'>";
       
    }
}
function deleteUser(index) {
    var allUser=JSON.parse(localStorage.getItem('localobj'));
    allUser.splice(index);
}
showTable();

localobj=JSON.parse(localStorage.getItem("localobj"));
arr=[];

var formId=document.getElementById("addUser");
function validateUser() {
    var cnt=0;
    // var objUser=new user(formId.name.value,formId.email.value,formId.password.value);
    // objUser.showUser();    
    // localobj.push(objUser);

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

    if (cnt==2) {
        localobj = {name: formId.name.value, email: formId.email.value, password:formId.password.value,birthdate:formId.date1.value };
        arr.push(localobj);
        localStorage.setItem("localobj", JSON.stringify(arr));
    }
}