function addMore()
{
    document.getElementById('error').innerHTML = "";
    let todo = document.getElementById("todo").value;
    if(todo=='')
    {
        document.getElementById('error').innerHTML = "please enter value";
    }
    else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.className = "items";

       
        li.textContent = todo;
        box.appendChild(li)
        let a = document.createElement('a');
        a.textContent = "X"
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a)
    }
    document.getElementById("todo").value = ""

}
let btn = document.querySelector('ul');
btn.addEventListener('click',function(e)
{
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})
document.getElementById("box").addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "LI") {
        var str = e.target.textContent
        str = str.slice(0,-1)
        e.target.innerHTML = "<s>"+ str +"</s>" + "   completed"
        let a = document.createElement('a');
        a.textContent = "X"
        a.href = "javascript:void(0)";
        a.className = "remove";
        e.target.appendChild(a)
    }
});

