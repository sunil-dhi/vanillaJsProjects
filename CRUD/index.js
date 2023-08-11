
var selectedRow=null;

function showalert(message, className){
   const div=document.createElement("div");
   div.className=`alert alert-${className}`;

   div.appendChild(document.createTextNode(message));
   const container=document.querySelector(".container");
   const main=document.querySelector(".main")
container.insertBefore(div,main);
setTimeout(() =>  document.querySelector(".alert").remove(), 10000);
}
//clear all fields
function clearfields(){
document.querySelector('#firstname').value=" ";
document.querySelector('#lastname').value=" ";
document.querySelector('#rollno').value=" ";

}
///delete

document.querySelector('#student-list').addEventListener('click',(e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showalert("student record is deleted", "danger")
    }
})