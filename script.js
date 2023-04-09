let wrapper=document.querySelector('.wrapper')
let registerlink=document.querySelector('.register-link')
let loginlink=document.querySelector('.login-link')
registerlink.addEventListener('click',()=>{
wrapper.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
    })