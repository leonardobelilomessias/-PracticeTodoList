

    let btn = document.querySelector('#btn')
    let ul = document.querySelector('#ul-lista')
    ul.firstChild.remove()
    let tarefas = []
    let input = document.querySelector("#input")
    console.log(localStorage.getItem('tarefas'))
    if(localStorage.getItem('tarefas')!= null){
        let str = localStorage.getItem('tarefas')
        tarefas = str.split(',')
        tarefas.forEach(item => {
            let li = document.createElement('li')
            li.textContent = item
            li.setAttribute('class','li-item')
            ul.appendChild(li) 
        });
        remove()
    }
    btn.onclick = ()=>{
            let novatarefa =document.querySelector('input[name=tarefa]').value 
            if(novatarefa == ''){
                aviso.innerHTML = '<small>O campo tarefa está vazio eprecisa ser preenchido.</small>'
                input.value =''
                return

            }
            let duplicado = tarefas.find(tarefa=> tarefa== novatarefa)
            if(duplicado == novatarefa){
                aviso.innerHTML =`<small> O item "${novatarefa}" já foi adicionado.Termine a tarefa ou adicione uma nova</small>`
                input.value =''
                return

            }
            aviso.innerHTML =''
            let li = document.createElement('li')
            li.textContent = novatarefa
            li.setAttribute('class','li-item')
            ul.appendChild(li)
            input.value =''
            tarefas.push(novatarefa)
            localStorage.setItem('tarefas',tarefas)  
            remove()
        }  
    function remove(){
        ul.childNodes.forEach(iten=>{
            iten.onclick=()=>{
                let index = tarefas.findIndex(tarefa=> tarefa == iten)
                tarefas.splice(index,1)
                localStorage.setItem('tarefas',tarefas)
                iten.remove()
            }})
    }
    if(tarefas.length == 0){
        localStorage.clear()
    }

    

