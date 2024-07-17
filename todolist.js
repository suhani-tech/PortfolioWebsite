let inputs = document.getElementById('inp');
let text = document. querySelector('.text ol');

function Add()
{
    if(inputs.value==""){
        alert("Please enter task")
    }
    else{
        let newEle= document.createElement("li");
        newEle.innerHTML=`${inputs.value}<i class="fas fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
}