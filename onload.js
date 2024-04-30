
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
let mouseEv = document.querySelector('svg')
mouseEv.addEventListener('click',function (e){
   console.log(e.id)
   if (!e.target.matches('rect') || !e.target.matches('[id*="rect"]') ){
      removepopup()
   }
})
let location2 = document.querySelector('g > path')
pan(location2)
initproductname()
initcurrentlocation()
initonclickrect()
const fuse = new Fuse(productnames, fuseOptions);