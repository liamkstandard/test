
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const SVG_NS = 'http://www.w3.org/2000/svg';
const queryString = window.location.search;
let product = ""
// console.log(queryString)
if (queryString != "") {
   const urlParams = new URLSearchParams(queryString);
   product = urlParams.get('product').split(',')
   console.log(product);
}

let productnames = []
const fuseOptions = {
   // isCaseSensitive: false,
   // includeScore: false,
   // shouldSort: true,
   // includeMatches: false,
   // findAllMatches: false,
   // minMatchCharLength: 1,
   // location: 0,
   // threshold: 0.6,
   // distance: 100,
   // useExtendedSearch: false,
   // ignoreLocation: false,
   // ignoreFieldNorm: false,
   // fieldNormWeight: 1,
   keys: [
      "product"
   ]
};

function initcurrentlocation(){
   let initlocation = document.querySelector(`g[id="layer15"] > path`)
   initlocation.classList.add('location')
   // let group = initlocation.parentElement
   // let attributes = []
   // for (i = 0; i < initlocation.attributes.length; i++){
   //    let names = initlocation.attributes[i].nodeName
   //    let value = initlocation.attributes[i].nodeValue
   //    attributes[names] = value
   // }
   // //let locationP3 = drawSVGelmt(attributes,'path',group)
   // //let locationP2 = drawSVGelmt(attributes,'path',group)
   // let location = drawSVGelmt(attributes,'path',group)
   // //locationP2.classList.add('locationP2')
   // //locationP3.classList.add('locationP3')
   // location.classList.add('location')

}

function initproductname() {
   let rects = document.querySelectorAll('rect')
   let pn = []
   for (i = 0; i < rects.length; i++) {
      txtValue = rects[i].getAttribute('inkscape:label').replace(/\s+/g, " ") || "";
      pn.push(txtValue)
   }
   productnames = [... new Set(pn)]
   //console.log(productnames)
}

function highlightgroup(groupname, classname) {
   let allli = document.getElementsByClassName('clicked')
   let li = document.getElementsByClassName(classname)
   let allelementsh = document.querySelectorAll('rect')
   let elements = document.getElementById(groupname).children
   let subproducts = []
   removename(groupname)
   //console.log(document.querySelector(`g[id='${groupname}'] > desc`))
   if (document.querySelector(`g[id='${groupname}'] > desc`)) {
      subproducts = document.querySelector(`g[id='${groupname}'] > desc`).innerHTML.split(',')
   }
   //console.log(subproducts)
   for (let i = 0; i < allelementsh.length; i++) {
      allelementsh[i].classList.remove('highlightgroup')
   }
   if (allli.length == 0) {
      for (let i = 0; i < elements.length; i++) {
         elements[i].classList.add('highlightgroup');
         pan(elements[i])
      }
      for (let i = 0; i < allli.length; i++) {
         allli[i].classList.remove('clicked')
      }
      li[0].classList.toggle('clicked')
      showsubproducts(groupname, subproducts)
   }

   else {
      if (!li[0].classList.contains('clicked')) {
         clearsubproducts()
         for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add('highlightgroup');
            pan(elements[i])
         }
         for (let i = 0; i < allli.length; i++) {
            allli[i].classList.remove('clicked')
         }
         li[0].classList.toggle('clicked')
         showsubproducts(groupname, subproducts)
      }
      else {
         for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('highlightgroup');
         }
         for (let i = 0; i < allli.length; i++) {
            allli[i].classList.remove('clicked')
         }
         clearsubproducts()
      }

   }
}
function clearselected() {
   document.querySelectorAll('ul > li').forEach(e => e.classList.remove('clicked'));
   document.querySelectorAll('div[class="productdropdown"] > ul > li').forEach(e => e.remove('clicked'))
   document.querySelectorAll('rect[class="highlightgroup"]').forEach(e => e.classList.remove('highlightgroup'));
}
function showsubproducts(groupname, subproduct) {

   let ul = document.querySelector('div[class="productdropdown"] > ul')
   if (subproduct.length != 0) {
      for (let i = 0; i < subproduct.length; i++) {
         let li = document.createElement("li");
         li.classList.add('w3-button')
         li.classList.add(`w3-ripple`)
         li.innerText = subproduct[i];
         li.style.animation = 'fade-in  0.5s';
         li.setAttribute('onclick', `showonlysubproduct(${groupname},"${subproduct[i]}")`)
         li.classList.toggle('slide-top')
         ul.appendChild(li);
      }
   }
   else{
      
   }
}
function pan(element) {
   if (isSafari) {
      seamless.scrollIntoView(element, {
         behavior: "smooth",
         block: "center",
         inline: "center"
      });
   }
   else {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
   }

}

function randomIntFromInterval(min, max) { // min and max included 
   return Math.floor(Math.random() * (max - min + 1) + min)
}


function showonlysubproduct(groupname, product) {
   //console.log(product.toUpperCase())
   let allelementsh = document.querySelectorAll(`g[id='${groupname.getAttribute('id')}'] > rect`)
   allelementsh.forEach((e) => {
      e.classList.add('highlightgroup')
      removename(e.id)
   })
   for (let i = 0; i < allelementsh.length; i++) {
      if (!allelementsh[i].getAttribute('inkscape:label').toUpperCase().includes(product.toUpperCase())) {
         allelementsh[i].classList.toggle('highlightgroup')

      }
      if (allelementsh[i].getAttribute('inkscape:label').toUpperCase().includes(product.toUpperCase())) {
         pan(allelementsh[i])
         showname(allelementsh[i].id)

      }
   }
}
function showsearchproduct(product) {
    let allelementsh = document.querySelectorAll(`rect`)
    allelementsh.forEach((e) => {
       e.classList.add('highlightgroup')
       removename(e.id)
    })
    for (let i = 0; i < allelementsh.length; i++) {
       if (!allelementsh[i].getAttribute('inkscape:label').toUpperCase().replace(/\s+/g, " ").includes(product.toUpperCase().replace(/\s+/g, " "))) {
          allelementsh[i].classList.toggle('highlightgroup')
 
       }
       if (allelementsh[i].getAttribute('inkscape:label').toUpperCase().replace(/\s+/g, " ").includes(product.toUpperCase().replace(/\s+/g, " "))) {
          pan(allelementsh[i])
          showname(allelementsh[i].id)
 
       }
    }
 }

function clearsubproducts() {
   if (document.querySelectorAll('div[class="productdropdown"] > ul > li') != undefined) {
      document.querySelectorAll('div[class="productdropdown"] > ul > li').forEach(e => e.remove());
   }

}
function showname(id) {

  // console.log(id)
   let element = document.getElementById(id)

   //console.log(element.getAttributeNames())
   let svg1 = document.querySelector(`rect#${id}`)

   let svg = svg1.closest('g[id]')
   //the array of the rects with a white fill
   let rects = Array.from(svg.querySelectorAll(`rect[id='${id}']`));
   //an array of true values as long as the rects array
   let arr = Array(rects.length).fill(true);
   //for each rect in the rects array
   //console.log(alltext)
   document.querySelectorAll('text').forEach(e => e.remove());

   rects.forEach((r, i) => {
      //get the position end the size of the rect (the bounding box)
      let bb = r.getBBox();
      //the center of the rect
      let x = bb.x + bb.width / 2;
      let y = bb.y + bb.height / 2;
      //on click
      //if there isn't already a text element there
      if (arr[i]) {
         //add a text element
         let txt3 = drawSVGelmt({ cx: x * 1.00, cy: y * 1.0, r: '8' }, "circle", svg)
         txt3.classList.add('pulse')
         let txt2 = drawSVGelmt({ cx: x * 1.00, cy: y * 1.0, r: '6' }, "circle", svg)
         txt2.classList.add('pulse2')
         let txt = drawSVGelmt({ cx: x * 1.0, cy: y * 1.0, r: '8' }, "circle", svg)
         txt.classList.add('dot')

         //txt.textContent = svg1.children[1].innerHTML;
         arr[i] = false;
      }

   })
}
function removename(id) {
   let svg1 = document.querySelector(`rect#${id}`)
   //console.log(id)
   //console.log(document.querySelectorAll('circle'))
   document.querySelectorAll('circle').forEach(e =>{
      if(!e.classList.contains('location') && !e.classList.contains('locationP2') && !e.classList.contains('locationP3')){
         e.remove()
      }

   }
   )

}


// a function to create a new svg element
function drawSVGelmt(o, tag, parent) {
   let elmt = document.createElementNS(SVG_NS, tag);
   elmt.classList.add("nametext")

   //console.log(elmt)
   for (var name in o) {
      if (o.hasOwnProperty(name)) {
         try{
            elmt.setAttributeNS(null, name, o[name]);
         //code that causes an error

         }catch(e){
            console.log(e)
         }

      }
   }
   parent.appendChild(elmt);
   return elmt;
}
function myFunction() {
   // Declare variables
   clearselected()
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById('myInput');
   filter = input.value.toUpperCase().trim();
   allg = document.querySelectorAll('[id*="layer"] > rect')
   rect = allg
   allresults = document.querySelectorAll('.searchlist > li')
   allresults.forEach(e => {
      e.remove()
   })
   //console.log(fuse.search(filter))
   results = fuse.search(filter, { limit: 6 })
   let searchlist = document.querySelector('.searchlist')
   for (i = 0; i < results.length; i++) {
      let newitem = document.createElement('li')
      newitem.innerHTML = results[i].item
      newitem.style.animation = `fade-in-top 0.${i + 3}s,  fade-in 0.8s`
      newitem.addEventListener("click", (e) => {
        showsearchproduct(e.srcElement.innerHTML) // logs `false`
      });
      searchlist.appendChild(newitem)
   }

   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < rect.length; i++) {
      txtValue = rect[i].getAttribute('inkscape:label') || "";
      if ((txtValue.toUpperCase().indexOf(filter) > -1 && filter != '')) {

         rect[i].classList.add('highlightgroup');
         pan(rect[i])
      }
      else {
         rect[i].classList.remove('highlightgroup');
      }
   }


}
