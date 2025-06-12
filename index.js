const input=document.getElementById('todo-input');
const btn=document.getElementById('todo-btn');
const list=document.getElementById('todo-list');
todo-btn.addEventListener('click',()=>{
    if(input.value.trim()!==''){
        const newTask=input.value();
        if(newTask==" ")return;{
            const li=document.createElement('li');
            li.textContent=newTask;
            const deleteBtn=document.createElement('button');
            deleteBtn.textContent='Delete';
            deleteBtn.addEventListener('click',()=>{
                list.removeChild(li);
            });
            li.appendChild(deleteBtn);
            list.appendChild(li);
            input.value='';
            li.addEventListener('dbclick',()=>{
                li.style.textDecoration='line-through';
            });

        }

    }
});

