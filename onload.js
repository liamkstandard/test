
allg = document.querySelectorAll('[id*="layer"] > rect')
rect = allg
// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < rect.length; i++) {
   txtValue = rect[i].getAttribute('inkscape:label') || "";
   for (k = 0; k < product.length; k++) {
      //console.log(product[k].toUpperCase())
      if (txtValue.toUpperCase().indexOf(product[k].toUpperCase()) > -1 && product[k].toUpperCase() != '') {
         rect[i].classList.add('highlightgroup');
         pan(rect[i])

      }
   }

}
document.body.addEventListener('click', function (e) {
   console.log(e)
})
initproductname()
initcurrentlocation()
initonclickrect()
initresetpopup()
const fuse = new Fuse(productnames, fuseOptions);