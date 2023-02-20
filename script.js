const boxEditText = document.querySelector('.box-editText');
const forma = document.querySelector('.block-forma');
const inputTxt = document.querySelector('textarea');
const inputName = document.getElementById('name');
const save = document.querySelector('.save');
const del = document.querySelector('.del');
const comeIn = document.querySelector('.comeIn');
const comeOf = document.querySelector('.comeOf');



const fromLocalStorage = localStorage.getItem('editText');
const editText = fromLocalStorage ? JSON.parse(fromLocalStorage) : {};
comeIn.addEventListener('click', () => {

    if(inputName.value === "") {
        alert('Введите имя !')
    } else {
        boxEditText.classList.add('active');
        forma.classList.add('active');
    }

    for(const txt in editText) {
        if(inputName.value === txt) {
            inputTxt.value = editText[txt];
        }
    };
    
});

comeOf.addEventListener('click', () => {
    boxEditText.classList.remove('active');
    forma.classList.remove('active');
    inputTxt.value = "";
});


const result = (element, txt, name) => {
    element.innerHTML = `${txt}`;

    setTimeout(() => {
        element.innerHTML = `${name}`;
    }, 1000)
}


save.addEventListener('click', () => {
    const name = inputName.value;
    const txt = inputTxt.value;
    editText[name] = txt;
    localStorage.setItem('editText', JSON.stringify(editText));

    result(save, 'Я сохранил !', 'Сохранить');
    
});

del.addEventListener('click', () => {
    editText[inputName.value] = inputTxt.value = "";
    localStorage.setItem('editText', JSON.stringify(editText));

    result(del, 'Я очистил !', 'Очистить');
});