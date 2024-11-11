const inputName = document.getElementById('InputName');
const textComment = document.getElementById('InputText');
const form = document.getElementById('formulario'); 
const commentPost =  document.getElementById('commentPost'); 

form.addEventListener('submit',  (event) => {   
    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    p.innerHTML = `<strong> ${inputName.value}: </strong> &nbsp ${textComment.value}`;
    commentpost.appendchild(p);
    inputName.value = '';
    textComment.value = '';
    inputName.focus();
});