'use strict '

const sliderCon = document.querySelector('.slider__con')
const switchZ = document.querySelector('.switch')
const basic = document.querySelector('#basic')
const professional = document.querySelector('#professional')
const master = document.querySelector('#master')

sliderCon.addEventListener('click', function(){
 switchZ.classList.toggle('move')
 
 if(!switchZ.classList.contains('move')){
     basic.textContent = `$199.99`
 professional.textContent = '$249.99'
 master.textContent = '$399.99'
 }else{
     basic.textContent = '$19.99'
 professional.textContent = '$24.99'
 master.textContent = '$39.99'
 }

})

