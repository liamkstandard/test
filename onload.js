
allg = document.querySelectorAll('[id*="layer"] > rect')
rect = allg
// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < rect.length; i++) {
   txtValue = rect[i].getAttribute('inkscape:label') || "";
   for (k = 0; k < product.length; k++) {
      //console.log(product[k].toUpperCase())
      if (txtValue.toUpperCase().indexOf(product[k].toUpperCase()) > -1 && product[k].toUpperCase() != '') {
         rect[i].classList.add('highlightgroup');
         pan(rect[rect.length - 1 ])

      }
   }
}

let svg = document.getElementById("svg1")
svg.addEventListener("touchstart", tapHandler);
let ogwidth = Number(svg.getAttribute('width'))
let ogheight = Number(svg.getAttribute('height'))
var tapedTwice = false;

function tapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault();
    //action on double tap goes below
   //  svg.style.scale = 1.5
   //  svg.setAttribute('width',(ogwidth * 2))
   //  svg.setAttribute('height',(ogheight * 1.5))

   }


let mouseEv = document.querySelector('svg')
mouseEv.addEventListener('click',function (e){
   if (!e.target.matches('[id*="rect"]') ){
      removepopup()
   }

})
let location2 = document.querySelector('g > path')
pan(location2)
initproductname()
initcurrentlocation()
initonclickrect()
initprodcategory()
const fuse = new Fuse(searchdata, fuseOptions);