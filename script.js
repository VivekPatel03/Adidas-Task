let bar=document.getElementById('bar')
let menu=document.querySelector('.slider')

bar.addEventListener('click',()=>{
   menu.style.cssText=` transform: translateX(0%);`
})