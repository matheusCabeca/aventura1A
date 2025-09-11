const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBnt = document.getElementById('.btn-reiniciar');

avanca.forEach(button =>{
button.addEventListener('click',function(){
const atual = document.querySelector('.ativo');
const proximoPasso ='passo-'+this.getAttribute('data-proximo')
atual.classList('ativo');



if (proximoElemento){
    proximoElemento.classList.add('ativo');
   }else{
console.error(`Elemento com ID "${proximoPasso}"não encontrado.`)
   }

   })
});