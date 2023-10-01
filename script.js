const btnEl = document.querySelector('#button');

btnEl.addEventListener('mouseover',(evt)=>{
  var dx = evt.pageX - btnEl.offsetLeft;
   var dy = evt.pageY - btnEl.offsetTop;

   btnEl.style.setProperty('--xPos', dx +'px');
   btnEl.style.setProperty('--yPos', dy +'px');
})