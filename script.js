var img = document.querySelector ('#slider');
const gozlemevaxti=5000
var images=['gif1.png',
'gif2.jpg',
'gif3.jpg',
'lilo-i-stich.jpg',
'482376.jpg',]

var indikiIndex =0;

function novbeti () {
    img.setAttribute('src', images[indikiIndex]);
    if (indikiIndex < images.length-1) {
        indikiIndex++;
    }
  else  {
    indikiIndex=0;
  }
setTimeout(()=> {
  img.setAttribute('src', 'spinner.gif')
}, gozlemevaxti-800);
}
novbeti ();
 let t= setInterval (novbeti,gozlemevaxti);
 img.addEventListener('mouseenter', function (){
    clearInterval (t);
 });
 img.addEventListener('mouseleave', function () {
     t= setInterval (novbeti,gozlemevaxti);
 })