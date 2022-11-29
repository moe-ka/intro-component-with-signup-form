const inputEl = document.querySelectorAll(".input");

inputEl.forEach(e=>{
    e.addEventListener('input', function () {
        if(e.value !== ""){
            e.nextElementSibling.innerHTML = '<span class="checking"></span>'
            e.classList.remove('invalid')
            if(e.type == 'email'){
                e.placeholder = 'Email Address'
            }
        }
    })
})

const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', function () {
    inputEl.forEach(e =>{
        if(e.value == ""){
            e.nextElementSibling.innerHTML = `${e.placeholder} cannot be empty`
            e.classList.add('invalid')
            if(e.type == 'email'){
                e.placeholder = 'email@example/com'
            }
        }
    })
})

