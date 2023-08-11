
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

//add data

document.querySelector('#student-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    //get form values

    const firstname=document.querySelector('#firstname').value
    const lastname=document.querySelector('#lastname').value
    const rollno=document.querySelector('#rollno').value

    //validate

    if(firstname=="" ||lastname==""||rollno==""){
           showalert("fields can not be empty","danger")
    }

})

///delete

document.querySelector('#student-list').addEventListener('click',(e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showalert("student record is deleted", "danger")
    }
})