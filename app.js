
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const SVG_NS = 'http://www.w3.org/2000/svg';
const queryString = window.location.search;
const el = (sel, par) => (par||document).querySelector(sel);
let product = ""
// console.log(queryString)
if (queryString != "") {
   const urlParams = new URLSearchParams(queryString);
   product = urlParams.get('product').split(',')
   console.log(product);
}
console.log(textt)
let productnames = []
let NEWproductnames = []
let searchdata = []
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



function initonclickrect(){
   let rects = document.querySelectorAll('[id*="rect"]')
   rects.forEach(e => {
      e.addEventListener('click', function(ev) {
         console.log(e.getAttribute('inkscape:label'))
         createpopup(e,ev)
         removename(e.id)
         showname(e.id)
      })
   })
}

function initprodcategory(){
   // let rects = document.querySelectorAll('[id*="rect"]')
   // let title = document.querySelectorAll(`title`)
}

function createBox(texts) {
   var box = document.createElement('div');
   box.className = 'box';
   box.style.left = `${ window.scrollX + event.clientX }px`;
   box.style.top = `${ window.scrollY + event.clientY }px`;
   let map = document.querySelector('body')
   let ul = document.createElement('ul')
   texts.forEach(c =>{
      let li = document.createElement('li')
      let a =document.createElement('a')
      a.innerHTML = c[3]
      a.setAttribute('href',`https://standardbuildingsupplies.ca/catalogsearch/result/?q=${c[3]}`)
      li.appendChild(a)
      ul.appendChild(li)
   })
   box.appendChild(ul)
   map.appendChild(box);
 }

function removepopup(){
   let txt = document.querySelectorAll('text').forEach(e => e.remove())
   let b = document.querySelectorAll('.textbacking').forEach(e => e.remove())
   let box = document.querySelectorAll('.box').forEach(e => e.remove())
}

function createpopup(e,ev){
   removepopup()

  // console.log(id)
  let element = document.getElementById(e.id)
   let parent = document.querySelector('svg')
  //console.log(element.getAttributeNames())
   let list = []
  NEWproductnames.forEach(f =>{
     if (f[0].includes(element.querySelector('title').innerHTML)){
      list.push(f)
      console.log(f.join('|'))
     }
  })
  createBox(list)
  let svg1 = document.querySelector(`#${e.id}`)

  let svg = svg1.closest('g[id]')
  
  //the array of the rects with a white fill
  let rects = Array.from(svg.querySelectorAll(`[id='${e.id}']`));
  console.log(rects)
  //an array of true values as long as the rects array
  let arr = Array(rects.length).fill(true);
  //for each rect in the rects array
  //console.log(alltext)
//   document.querySelectorAll('text').forEach(ed => ed.remove());
//   document.querySelectorAll('.textbacking').forEach(ed => ed.remove());
//   let sec = 0
//   rects.forEach((r, i) => {
//      //get the position end the size of the rect (the bounding box)
//      let bb = r.getBBox();
//      let sbb = svg.getBBox()
//      console.log(bb)
//      //the center of the rect
//      let x = bb.x + bb.width / 2;
//      let y = bb.y + bb.height / 2;
//      if (r.tagName == 'path'){
//             x = x- ((bb.x + bb.width) -(sbb.width + sbb.x))
//             y = y- ((bb.y + bb.height) -(sbb.height + sbb.y))
//      }
//      console.log(bb.x + bb.width,bb.y + bb.height)
//       console.log(sbb.width + sbb.x,sbb.height+sbb.y)




//      //on click
//      //if there isn't already a text element there
//      if (arr[i]) {
//         //add a text element
//         //createBox(e,ev)
//         let txt3 = drawSVGelmt({x:x, y:y}, "text", svg)
//         txt3.classList.add('text')
//         let tags = e.getAttribute('inkscape:label').split(' ')
//         let taggs = []
//         let sec = 0
//         tags.forEach(tag => {
//          sec += 1 / 10
//          let tspan = `<tspan x=${x} dy = '1.2em'>${tag}</tspan>`
//          taggs.push(tspan)
//         })
//         txt3.innerHTML = taggs.join('\r\n')//e.getAttribute('inkscape:label').split(' ').join("\r\n")
//         let txtbbox = txt3.getBBox()

//         console.log(txt3.getBBox())
//         let twidth = txtbbox.width +20
//         let theight = txtbbox.height +10
//         let tx = txtbbox.x -10
//         let ty = txtbbox.y -5
//         let txtbacking = drawSVGelmt({id:'test',x:tx, y:ty,width:twidth,height:theight,rx:"8"}, "rect", svg)
//         txtbacking.classList.add('textbacking')
//         let txt4 = drawSVGelmt({x:x, y:y}, "text", svg)
//         txt4.classList.add('text')
//         txt4.innerHTML = taggs.join('\r\n')
//         //txt.textContent = svg1.children[1].innerHTML;
//         if(sbb.height + sbb.y <txtbbox.height + txtbbox.y){
//          txt3.setAttribute('y',(txt3.getAttribute('y') - ((txtbbox.y+ txtbbox.height) - (sbb.height + sbb.y)) ))
//          txt4.setAttribute('y',(txt4.getAttribute('y') - ((txtbbox.y+ txtbbox.height) - (sbb.height + sbb.y))))
//          txtbacking.setAttribute('y',(txtbacking.getAttribute('y') - ((txtbbox.y+ txtbbox.height) - (sbb.height + sbb.y))))
//         }
//       //   if(sbb.width + sbb.x <txtbbox.width + txtbbox.x){
//       //    txt3.setAttribute('x',(txt3.getAttribute('x') - ((txtbbox.x+ txtbbox.width) - (sbb.width + sbb.x)) ))
//       //    txt4.setAttribute('x',(txt4.getAttribute('x') - ((txtbbox.x+ txtbbox.width) - (sbb.width + sbb.x))))
//       //    txtbacking.setAttribute('x',(txtbacking.getAttribute('x') - ((txtbbox.x+ txtbbox.width) - (sbb.width + sbb.x))))
//       //   }
//         arr[i] = false;
//      }

//   })
}

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
   // let rects = document.querySelectorAll('[id*="rect"]:not(#background)')
   // let pn = []
   // for (i = 0; i < rects.length; i++) {
   //    txtValue = rects[i].getAttribute('inkscape:label').replace(/\s+/g, " ") || "";
   //    pn.push(txtValue)
   // }
   // productnames = [... new Set(pn)]
   // console.log(productnames)

   textt.forEach(e =>{
      NEWproductnames.push(e.split('|'))
      let f = e.split('|')
      searchdata.push({'location':f[0],'product':f[3]})
   })

}



function highlightgroup(groupname, classname) {
    let searchbar = document.querySelector('input')
    searchbar.value = ''
    myFunction()
    removepopup()
   let allli = document.getElementsByClassName('clicked')
   let li = document.getElementsByClassName(classname)
   let allelementsh = document.querySelectorAll('[id*="rect"]:not(.textbacking)')
   let elements = document.getElementById(groupname).children
   let subproducts = []
   removename(groupname)
   //console.log(document.querySelector(`g[id='${groupname}'] > desc`))
   let hasdesc=false
   if (document.querySelector(`g[id='${groupname}'] > desc`)) {
      subproducts = document.querySelector(`g[id='${groupname}'] > desc`).innerHTML.split(',')
      hasdesc=true
   }
   //console.log(subproducts)
   for (let i = 0; i < allelementsh.length; i++) {
      allelementsh[i].classList.remove('highlightgroup')
   }
   if (allli.length == 0) {
      for (let i = 0; i < elements.length; i++) {
         elements[i].classList.add('highlightgroup');
         pan(elements[elements.length - 1])
         if(elements.length <= 4 && elements[i].id != '' && hasdesc == false && elements[i].matches('[id*="rect"]')){
            showname(elements[i].id)
          }
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
            pan(elements[elements.length - 1])
            if(elements.length <= 4 && elements[i].id != '' && hasdesc == false && elements[i].matches('[id*="rect"]')){
                showname(elements[i].id)
              }
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
   removepopup()
   let allelementsh = document.querySelectorAll(`g[id='${groupname.getAttribute('id')}'] > [id*="rect"]`)
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
function showsearchproduct(location) {
   let allelementsh = document.querySelectorAll('[id*="rect"]:not(.textbacking)')
    allelementsh.forEach((e) => {
       e.classList.add('highlightgroup')
       removename(e.id)
    })
   for (let i = 0; i < allelementsh.length; i++) {
      let title = allelementsh[i].querySelector('title')

      try{
         console.log(location)
         console.log(title.innerHTML)
         if(title.innerHTML != location){
            allelementsh[i].classList.toggle('highlightgroup')
         }
         if(title.innerHTML == location){
               pan(allelementsh[i])
               showname(allelementsh[i].id)
         }
      }
      catch(e){
         console.log(e)
      }

   }
   //  for (let i = 0; i < allelementsh.length; i++) {
   //     if (!allelementsh[i].getAttribute('inkscape:label').toUpperCase().replace(/\s+/g, " ").includes(product.toUpperCase().replace(/\s+/g, " "))) {
   //        allelementsh[i].classList.toggle('highlightgroup')
 
   //     }
   //     if (allelementsh[i].getAttribute('inkscape:label').toUpperCase().replace(/\s+/g, " ").includes(product.toUpperCase().replace(/\s+/g, " "))) {
   //        pan(allelementsh[i])
   //        showname(allelementsh[i].id)
 
   //     }
   //  }

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
   let svg1 = document.querySelector(`#${id}`)

   let svg = svg1.closest('g[id]')
   //the array of the rects with a white fill
   let rects = Array.from(svg.querySelectorAll(`[id='${id}']`));
   //an array of true values as long as the rects array
   let arr = Array(rects.length).fill(true);
   //for each rect in the rects array
   //console.log(alltext)
   document.querySelectorAll('text').forEach(e => e.remove());

   rects.forEach((r, i) => {
      //get the position end the size of the rect (the bounding box)
      let bb = r.getBBox();
           let sbb = svg.getBBox()
      //the center of the rect
      let x = bb.x + bb.width / 2;
      let y = bb.y + bb.height / 2;
      if (r.tagName == 'path'){
         x = x- ((bb.x + bb.width) -(sbb.width + sbb.x))
         y = y- ((bb.y + bb.height) -(sbb.height + sbb.y))
      }
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
   let svg1 = document.querySelector(`#${id}`)
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
   allg = document.querySelectorAll('[id*="layer"] > [id*="rect"]')
   rect = allg
   allg.forEach(e => {
    removename(e.id)
   })
   allresults = document.querySelectorAll('.searchlist > li')
   allresults.forEach(e => {
      e.remove()
   })

   //console.log(fuse.search(filter))
   results = fuse.search(filter, { limit: 6 })
   let searchlist = document.querySelector('.searchlist')
   for (i = 0; i < results.length; i++) {
      let newitem = document.createElement('li')
      newitem.innerHTML = results[i].item.product
      newitem.style.animation = `fade-in-top 0.${i + 3}s,  fade-in 0.8s`
      let test = results[i].item.location
      newitem.addEventListener("click", (e) => {

        showsearchproduct(test) // logs `false`
      });
      searchlist.appendChild(newitem)
   }

   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < rect.length; i++) {
      txtValue = rect[i].getAttribute('inkscape:label') || "";
      if ((txtValue.toUpperCase().indexOf(filter) > -1 && filter != '')) {

         rect[i].classList.add('highlightgroup');
         pan(rect[rect.length -1])
      }
      else {
         rect[i].classList.remove('highlightgroup');
      }
   }


}
