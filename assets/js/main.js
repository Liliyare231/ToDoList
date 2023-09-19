const inputEl = document.querySelector('.inputEl')
const buttonEl = document.querySelector('.btnEl')
const listsEl = document.querySelector('.lists')

const array = [
    {   title: 'Я скину',
        action: false
    },
    {   title: 'возможно',
        action: false
    },
    {   title: 'наверное',
        action: true
    }

]


function arrayNote () {
    // for(  let key in array){
    //     listsEl.insertAdjacentHTML ('beforeend', getNote(key))
    // }
    listsEl.innerHTML = ''
    if(array.length === 0){
        listsEl.innerHTML = '<p class="option">Нет заметок</p>'
    }
    for(let x = 0; x < array.length; x++){
        listsEl.insertAdjacentHTML ('beforeend', getNote(array[x],x))
    }

}
arrayNote ()
function getNote(note,index){
    return `
        <li class="list ${note.action ? 'active': ''}">
            <p>${note.title}</p>

            <div class="actions">
                <button class="done ${note.action ? 'doneActive' : ''}" data-index = ${index} data-type="done">Выполнить</button>
                <button class="remove" data-index = ${index} data-type="remove"">Удалить</button>
            </div>
        </li>
    `
}

buttonEl.onclick = function (event) {

    if(inputEl.value.length === 0){
        return
    }
    const newArray = {
        title: inputEl.value,
        action: false
    }

    // listsEl.insertAdjacentHTML('beforeend', getNote(newArray))

    array.push(newArray)
    arrayNote()
    event.preventDefault()
    inputEl.value = ''
}
listsEl.onclick  = function (event){
    console.log(event.target.dataset.index);
    if (event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        
        if ( type === 'done') {
            array[index].action = !array[index].action
        }else if (type ==='remove'){
            array.splice(index, 1)
        }
    }
    arrayNote()

}
