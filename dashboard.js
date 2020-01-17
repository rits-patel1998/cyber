var localobj=JSON.parse(localStorage.getItem("localobj"));
var cnt=0;
for (let index = 0; index < localobj.length; index++) {
    cnt++;
    
}
document.getElementById("count").innerHTML=cnt;