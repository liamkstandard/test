
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const SVG_NS = 'http://www.w3.org/2000/svg';
const queryString = window.location.search;
const el = (sel, par) => (par || document).querySelector(sel);
let product = ""
// console.log(queryString)
if (queryString != "") {
   const urlParams = new URLSearchParams(queryString);
   product = urlParams.get('product').split(',')
   console.log(product);
}
let productnames = []
let NEWproductnames = []
let searchdata = [
   {
      "location": "7502",
      "product": "1x8 Diagonal Cedar Lattice-Lat"
   },
   {
      "location": "7502",
      "product": "1x8 Horizontal Cedar Lattice 1"
   },
   {
      "location": "7502",
      "product": "3x6 Horizontal Cedar Lattice 1"
   },
   {
      "location": "7502",
      "product": "3x8 Horizontal Cedar Lattice 1"
   },
   {
      "location": "7502",
      "product": "4x6 Horizontal Cedar Lattice 1"
   },
   {
      "location": "7502",
      "product": "4x8 Diagonal Cedar Lattice 1x2"
   },
   {
      "location": "7502",
      "product": "4'X8' Diagonal Cedar Lattice L"
   },
   {
      "location": "7502",
      "product": "4x8 Horizontal Cedar Lattice 1"
   },
   {
      "location": "7502",
      "product": "1/2X10 Basket Weave Rough Ceda"
   },
   {
      "location": "7502",
      "product": "1/2X6 Basket Weave Rough Cedar"
   },
   {
      "location": "7502",
      "product": "1/2X8 Basket Weave Rough Cedar"
   },
   {
      "location": "7502",
      "product": "3X6 Rough #2 App Cedar 08'"
   },
   {
      "location": "7502",
      "product": "3X6 Rough #2 App Cedar 10'"
   },
   {
      "location": "7502",
      "product": "3X6 Rough #2 App Cedar 12'"
   },
   {
      "location": "7502",
      "product": "3X6 Rough #2 App Cedar 16'"
   },
   {
      "location": "7502",
      "product": "3X8 Rough #2 App Cedar 08'"
   },
   {
      "location": "7502",
      "product": "3X8 Rough #2 App Cedar 10'"
   },
   {
      "location": "7502",
      "product": "3X8 Rough #2 App Cedar 12'"
   },
   {
      "location": "7502",
      "product": "3X8 Rough #2 App Cedar 14'"
   },
   {
      "location": "7502",
      "product": "3X8 Rough #2 App Cedar 16'"
   },
   {
      "location": "7503",
      "product": "1/2X10 Basket Weave Rough Ceda"
   },
   {
      "location": "7503",
      "product": "1/2X6 Basket Weave Rough Cedar"
   },
   {
      "location": "7503",
      "product": "1/2X8 Basket Weave Rough Cedar"
   },
   {
      "location": "7503",
      "product": "Filter Cloth 7-1/2'X300' (3.5"
   },
   {
      "location": "7503",
      "product": "Expansion Joint Black 4X10'"
   },
   {
      "location": "7504",
      "product": "1X12 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "1X4 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "1X6 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "1X6 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7504",
      "product": "1X8 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "1X8 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7504",
      "product": "1X8 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7504",
      "product": "2X10 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7504",
      "product": "2X10 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7504",
      "product": "2X10 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7504",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7504",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7504",
      "product": "2X6 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "2X6 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7504",
      "product": "2X8 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7504",
      "product": "2X8 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7504",
      "product": "3X6 Rough #2 App Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X10 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X10 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "1X10 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "1X10 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "1X10 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7505",
      "product": "1X12 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X12 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "1X12 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "1X12 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "1X12 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7505",
      "product": "1X4 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X4 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "1X4 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "1X4 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "1X4 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7505",
      "product": "1X6 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X6 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "1X6 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "1X6 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "1X8 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "1X8 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "1X8 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "1X8 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "1X8 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7505",
      "product": "2X10 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "2X10 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "2X10 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "2X12 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "2X12 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "2X4 Rough Fullsawn App Cedar 0"
   },
   {
      "location": "7505",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7505",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7505",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7505",
      "product": "2X4 Rough Fullsawn App Cedar 1"
   },
   {
      "location": "7505",
      "product": "2X6 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "2X6 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "2X6 Rough 2&Btr Cedar 12'"
   },
   {
      "location": "7505",
      "product": "2X6 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7505",
      "product": "2X8 Rough 2&Btr Cedar 08'"
   },
   {
      "location": "7505",
      "product": "2X8 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7505",
      "product": "4X4 Cedar Post Cap"
   },
   {
      "location": "7505",
      "product": "6'X6' Cedar Post Cap"
   },
   {
      "location": "7506",
      "product": "4' Cedar Lath Bundle 50Pc"
   },
   {
      "location": "7506",
      "product": "6' Cedar Lath Bundle 50Pc"
   },
   {
      "location": "7506",
      "product": "8' Cedar Lath Bundle 50Pc"
   },
   {
      "location": "7506",
      "product": "1X1 D&Btr Clear S1S2E Cedar 08"
   },
   {
      "location": "7506",
      "product": "1X2 D&Btr Clear S1S2E Cedar 08"
   },
   {
      "location": "7506",
      "product": "1X2 D&Btr Clear S1S2E Cedar 10"
   },
   {
      "location": "7506",
      "product": "1X2 D&Btr Clear S1S2E Cedar 12"
   },
   {
      "location": "7506",
      "product": "1X2 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7506",
      "product": "1X2 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7506",
      "product": "1X3 D&Btr Clear S1S2E  Cedar 0"
   },
   {
      "location": "7506",
      "product": "1X3 D&Btr ClearS1S2E  Cedar 10"
   },
   {
      "location": "7506",
      "product": "1X3 D&Btr Clear S1S2E  Cedar 1"
   },
   {
      "location": "7506",
      "product": "1X4 D&Btr Clear S1S2E Cedar 08"
   },
   {
      "location": "7506",
      "product": "1X4 D&Btr Clear S1S2E Cedar 14"
   },
   {
      "location": "7506",
      "product": "1X6 D&Btr Clear S1S2E  Cedar 0"
   },
   {
      "location": "7506",
      "product": "1X6 D&Btr Clear S1S2E  Cedar 1"
   },
   {
      "location": "7506",
      "product": "1X6 D&Btr Clear S1S2E  Cedar 1"
   },
   {
      "location": "7506",
      "product": "1X6 D&Btr Clear S1S2E Cedar 14"
   },
   {
      "location": "7506",
      "product": "1X8 D&Btr Clear S1S2E Cedar 08"
   },
   {
      "location": "7506",
      "product": "1X8 D&Btr Clear S1S2E Cedar 10"
   },
   {
      "location": "7506",
      "product": "1X8 D&Btr Clear S1S2E Cedar 12"
   },
   {
      "location": "7506",
      "product": "1X8 D&Btr Clear S1S2E Cedar 16"
   },
   {
      "location": "7506",
      "product": "2X10 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7506",
      "product": "2X10 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7506",
      "product": "2X12 Rough 2&Btr Cedar 14'"
   },
   {
      "location": "7506",
      "product": "2X12 Rough 2&Btr Cedar 16'"
   },
   {
      "location": "7506",
      "product": "2X2 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7506",
      "product": "2X2 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7506",
      "product": "2X2 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7506",
      "product": "2X2 S4S Std&Btr WRC 08"
   },
   {
      "location": "7506",
      "product": "2X2 S4S Std&Btr WRC 12"
   },
   {
      "location": "7506",
      "product": "2X3 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7506",
      "product": "2X3 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7506",
      "product": "2X4 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7506",
      "product": "2X4 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7506",
      "product": "2X4 S4S D&Btr Clear Cedar 16'"
   },
   {
      "location": "7506",
      "product": "2X6 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7506",
      "product": "2X6 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7506",
      "product": "2X6 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7506",
      "product": "2X8 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7506",
      "product": "2X8 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7506",
      "product": "2X8 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7506",
      "product": "4X4 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7506",
      "product": "4X4 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7506",
      "product": "4X4 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7507",
      "product": "1X3 Pointed Cedar Pickets 03'"
   },
   {
      "location": "7507",
      "product": "1X3 Pointed Cedar Pickets 04'"
   },
   {
      "location": "7507",
      "product": "1X4 Pointed Cedar Pickets 03'"
   },
   {
      "location": "7507",
      "product": "1X4 Pointed Cedar Pickets 04'"
   },
   {
      "location": "7507",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X6 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X6 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X8 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X8 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "1X8 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7507",
      "product": "2X2 S4S D&Btr Clear Cedar 03'"
   },
   {
      "location": "7507",
      "product": "2X2 S4S D&Btr Clear Cedar 04'"
   },
   {
      "location": "7507",
      "product": "2X2 S4S D&Btr Clear Cedar 42"
   },
   {
      "location": "7507",
      "product": "4X4 S4S Std&Btr WRC 08"
   },
   {
      "location": "7507",
      "product": "4X4 S4S Std&Btr WRC 10"
   },
   {
      "location": "7507",
      "product": "4'X8' Fence Panel Diagonal (ac"
   },
   {
      "location": "7507",
      "product": "4'X8' Fence Panel Horizontal ("
   },
   {
      "location": "7507",
      "product": "4'X8' Fence Panel Solid (actua"
   },
   {
      "location": "7507",
      "product": "5'X8' Fence Panel Diagonal (ac"
   },
   {
      "location": "7507",
      "product": "5'X8' Fence Panel Horizontal ("
   },
   {
      "location": "7507",
      "product": "5'X8' Fence Panel Solid (actua"
   },
   {
      "location": "7507",
      "product": "6'X8' Fence Panel Diagonal (ac"
   },
   {
      "location": "7507",
      "product": "6'X8' Fence Panel Horizontal ("
   },
   {
      "location": "7507",
      "product": "6'X8' Fence Panel Solid (actua"
   },
   {
      "location": "7507",
      "product": "1X4 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7507",
      "product": "1X4 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7507",
      "product": "2X4 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7507",
      "product": "2X6 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7507",
      "product": "2X6 S4S 2&Btr Treated  H/F 12'"
   },
   {
      "location": "7507",
      "product": "2X8 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7507",
      "product": "4'X4' Rough Treated H/F 10'"
   },
   {
      "location": "7507",
      "product": "4'X4' Rough Treated H/F 12'"
   },
   {
      "location": "7507",
      "product": "4'X6' Rough Treated H/F10'"
   },
   {
      "location": "7507",
      "product": "4'X6' Rough Treated H/F 12'"
   },
   {
      "location": "7507",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7507",
      "product": "6X6 Rough 2&Btr Treated H/F 12"
   },
   {
      "location": "7508",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X6 Knotty Cedar Fencing T&G 0"
   },
   {
      "location": "7508",
      "product": "1X6 Knotty Cedar Fencing T&G 0"
   },
   {
      "location": "7508",
      "product": "1X6 Knotty Cedar Fencing T&G 0"
   },
   {
      "location": "7508",
      "product": "1X8 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X8 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X8 Rough Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X8 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X8 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "1X8 S1S2E Knotty Cedar Fencing"
   },
   {
      "location": "7508",
      "product": "4X4 Cedar Post Cap"
   },
   {
      "location": "7508",
      "product": "6'X6' Cedar Post Cap"
   },
   {
      "location": "7509",
      "product": "3/4x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7509",
      "product": "5/4X6 R/E Treated Pine Decking"
   },
   {
      "location": "7509",
      "product": "5/4X6 R/E Treated Pine Decking"
   },
   {
      "location": "7509",
      "product": "5/4X6 R/E Treated Pine Decking"
   },
   {
      "location": "7509",
      "product": "5/4X6 R/E Treated Pine Decking"
   },
   {
      "location": "7509",
      "product": "5/4X6 R/E Treated Pine Decking"
   },
   {
      "location": "7509",
      "product": "1X2 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7509",
      "product": "1X2 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7509",
      "product": "1X2 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7509",
      "product": "1X4 S4S Util&Btr Treated H/F 0"
   },
   {
      "location": "7509",
      "product": "1X4 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7509",
      "product": "1X4 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7509",
      "product": "1X6 S4S Util&Btr Treated H/F 0"
   },
   {
      "location": "7509",
      "product": "1X6 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7509",
      "product": "1X6 S4S Util&Btr Treated H/F 1"
   },
   {
      "location": "7509",
      "product": "2X2 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7509",
      "product": "2X2 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7509",
      "product": "2X2 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7509",
      "product": "3-1/2X4-1/4 Treated Landscape"
   },
   {
      "location": "7510",
      "product": "1/2 TREATED CCA Plywood 4'X8'"
   },
   {
      "location": "7510",
      "product": "1/2x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7510",
      "product": "3/4 TREATED CCA Plywood 4x8"
   },
   {
      "location": "7510",
      "product": "3/4x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7510",
      "product": "3/8 TREATED CCA Plywood 4x8"
   },
   {
      "location": "7510",
      "product": "3/8x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7510",
      "product": "5/8 TREATED CCA Plywood 4x8"
   },
   {
      "location": "7510",
      "product": "2X4 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7510",
      "product": "2X4 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7510",
      "product": "2X4 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7510",
      "product": "2X4 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7510",
      "product": "2X4 S4S 2&Btr Treated H/F 16'"
   },
   {
      "location": "7510",
      "product": "2X6 S4S 2&Btr Treated  H/F 08'"
   },
   {
      "location": "7510",
      "product": "2X6 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7510",
      "product": "2X6 S4S 2&Btr Treated  H/F 12'"
   },
   {
      "location": "7510",
      "product": "2X6 S4S 2&Btr Treated  H/F 14'"
   },
   {
      "location": "7510",
      "product": "2X6 S4S 2&Btr Treated  H/F 16'"
   },
   {
      "location": "7511",
      "product": "2X10 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7511",
      "product": "2X10 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7511",
      "product": "2X10 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7511",
      "product": "2X10 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7511",
      "product": "2X10 S4S 2&Btr Treated H/F 16'"
   },
   {
      "location": "7511",
      "product": "2X12 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7511",
      "product": "2X12 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7511",
      "product": "2X12 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7511",
      "product": "2X12 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7511",
      "product": "2X12 S4S 2&Btr Treated H/F 16'"
   },
   {
      "location": "7511",
      "product": "2X6 S4S 2&Btr Treated  H/F 16'"
   },
   {
      "location": "7511",
      "product": "2X8 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7511",
      "product": "2X8 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7511",
      "product": "2X8 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7511",
      "product": "2X8 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7511",
      "product": "2X8 S4S 2&Btr Treated H/F 16'"
   },
   {
      "location": "7511",
      "product": "4'X6' Rough Treated H/F 16'"
   },
   {
      "location": "7512",
      "product": "4X4 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7512",
      "product": "4X4 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7512",
      "product": "4X4 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7512",
      "product": "4'X4' Rough Treated H/F 08'"
   },
   {
      "location": "7512",
      "product": "4'X4' Rough Treated H/F 09'"
   },
   {
      "location": "7512",
      "product": "4'X4' Rough Treated H/F 10'"
   },
   {
      "location": "7512",
      "product": "4'X4' Rough Treated H/F 12'"
   },
   {
      "location": "7512",
      "product": "4'X6' Rough Treated H/F 08'"
   },
   {
      "location": "7512",
      "product": "4'X6' Rough Treated H/F10'"
   },
   {
      "location": "7512",
      "product": "4'X6' Rough Treated H/F 12'"
   },
   {
      "location": "7512",
      "product": "4'X6' Rough Treated H/F 14'"
   },
   {
      "location": "7512",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7512",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7512",
      "product": "6X6 Rough 2&Btr Treated H/F 12"
   },
   {
      "location": "7512",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7512",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7513",
      "product": "1X1 D&Btr Clear S1S2E Cedar 08"
   },
   {
      "location": "7513",
      "product": "1X2 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7513",
      "product": "1X2 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7513",
      "product": "1X4 D&Btr Clear S1S2E Cedar 10"
   },
   {
      "location": "7513",
      "product": "2X2 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7513",
      "product": "2X2 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7513",
      "product": "2X2 S4S Std&Btr WRC 08"
   },
   {
      "location": "7513",
      "product": "2X4 (1-3/4X3-3/4) Rough 2&Btr"
   },
   {
      "location": "7513",
      "product": "2X4 (1-3/4X3-3/4) Rough 2&Btr"
   },
   {
      "location": "7513",
      "product": "2X4 (1-3/4X3-3/4) Rough 2&Btr"
   },
   {
      "location": "7513",
      "product": "2X6 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7513",
      "product": "2X6 S4S D&Btr Clear Cedar 10'"
   },
   {
      "location": "7513",
      "product": "3X12 Rough #2 App Cedar 10'"
   },
   {
      "location": "7513",
      "product": "3X12 Rough #2 App Cedar 12'"
   },
   {
      "location": "7513",
      "product": "3X12 Rough #2 App Cedar 14'"
   },
   {
      "location": "7513",
      "product": "4X4 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7513",
      "product": "4X4 S4S D&Btr Clear Cedar 12'"
   },
   {
      "location": "7513",
      "product": "4X4 Rough #2 App Cedar 08'"
   },
   {
      "location": "7513",
      "product": "4X4 Rough #2 App Cedar 10'"
   },
   {
      "location": "7513",
      "product": "4X4 Rough #2 App Cedar 12'"
   },
   {
      "location": "7513",
      "product": "4X4 S4S Std&Btr WRC 10"
   },
   {
      "location": "7513",
      "product": "4X4 S4S Std&Btr WRC 12"
   },
   {
      "location": "7513",
      "product": "4X6 Rough #2 App Cedar 08'"
   },
   {
      "location": "7513",
      "product": "4X6 Rough #2 App Cedar 10'"
   },
   {
      "location": "7513",
      "product": "4X6 Rough #2 App Cedar 12'"
   },
   {
      "location": "7513",
      "product": "6X6 Rough #2 App Cedar 08'"
   },
   {
      "location": "7513",
      "product": "6X6 Rough #2 App Cedar 10'"
   },
   {
      "location": "7513",
      "product": "6X6 Rough #2 App Cedar 12'"
   },
   {
      "location": "7513",
      "product": "6X6 S4S #2 App WRC 08"
   },
   {
      "location": "7513",
      "product": "6X6 S4S #2 App WRC 12"
   },
   {
      "location": "7513",
      "product": "8X8 Rough #2 App Cedar 08'"
   },
   {
      "location": "7513",
      "product": "8X8 Rough #2 App Cedar 10'"
   },
   {
      "location": "7513",
      "product": "8X8 Rough #2 App Cedar 12'"
   },
   {
      "location": "7514",
      "product": "2X10 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7514",
      "product": "2X10 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7514",
      "product": "2X10 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7514",
      "product": "2X10 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7514",
      "product": "2X10 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7514",
      "product": "2X12 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7514",
      "product": "2X12 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7514",
      "product": "2X12 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7514",
      "product": "2X12 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7514",
      "product": "2X12 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7514",
      "product": "2X6 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7514",
      "product": "2X6 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7514",
      "product": "2X6 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7514",
      "product": "2X6 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7514",
      "product": "2X8 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7514",
      "product": "2X8 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7514",
      "product": "2X8 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7515",
      "product": "1X3 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7515",
      "product": "1X3 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7515",
      "product": "1X3 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7515",
      "product": "1X4 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7515",
      "product": "1X4 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7515",
      "product": "1X4 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7515",
      "product": "1X4 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7515",
      "product": "1X4 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7515",
      "product": "2X4 S4S App Knotty Deck WRC 08"
   },
   {
      "location": "7515",
      "product": "2X4 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X4 S4S App Knotty Deck WRC 12"
   },
   {
      "location": "7515",
      "product": "2X4 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X4 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X6 S4S App Knotty Deck  WRC 0"
   },
   {
      "location": "7515",
      "product": "2X6 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X6 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X6 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "2X6 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7515",
      "product": "5/4X6 R/E STK Deck Cedar 08'"
   },
   {
      "location": "7515",
      "product": "5/4X6 R/E STK Deck Cedar 10'"
   },
   {
      "location": "7515",
      "product": "5/4X6 R/E STK Deck Cedar 12'"
   },
   {
      "location": "7515",
      "product": "5/4X6 R/E STK Deck Cedar 14'"
   },
   {
      "location": "7515",
      "product": "5/4X6 R/E STK Deck Cedar 16'"
   },
   {
      "location": "7516",
      "product": "1X10 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7516",
      "product": "1X10 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7516",
      "product": "1X10 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7516",
      "product": "1X10 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7516",
      "product": "1X10 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7516",
      "product": "1X12 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7516",
      "product": "1X12 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7516",
      "product": "1X12 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7516",
      "product": "1X12 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7516",
      "product": "1X12 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7516",
      "product": "1/2X10 Basket Weave Rough Ceda"
   },
   {
      "location": "7516",
      "product": "1/2X8 Basket Weave Rough Cedar"
   },
   {
      "location": "7516",
      "product": "1X6 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7516",
      "product": "1X6 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7516",
      "product": "1X6 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7516",
      "product": "1X8 S1S2E #2BTR Cedar 08'"
   },
   {
      "location": "7516",
      "product": "1X8 S1S2E #2BTR Cedar 10'"
   },
   {
      "location": "7516",
      "product": "1X8 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7516",
      "product": "1X8 S1S2S #2BTR Cedar 14'"
   },
   {
      "location": "7516",
      "product": "1X8 S1S2E #2BTR Cedar 16'"
   },
   {
      "location": "7517",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7517",
      "product": "3/8 Std Fir 4X8 Plywood"
   },
   {
      "location": "7517",
      "product": "1/2 OSB 4x8"
   },
   {
      "location": "7517",
      "product": "19/32 OSB 4x8"
   },
   {
      "location": "7517",
      "product": "19/32 T&G OSB 4x8"
   },
   {
      "location": "7517",
      "product": "23/32 T&G OSB 4x8"
   },
   {
      "location": "7517",
      "product": "23/32 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7517",
      "product": "5/8 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7517",
      "product": "7/16 OSB 4x8"
   },
   {
      "location": "7517",
      "product": "7/8 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7517",
      "product": "4'X8' Mahogany 1/4"
   },
   {
      "location": "7517",
      "product": "4'X8' Mahogany 1/4 *FSC* Certi"
   },
   {
      "location": "7519",
      "product": "17.5mm Pourform 107 4x8 Plywoo"
   },
   {
      "location": "7519",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7519",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "1/2 Select Fir 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "3/4 Select Fir 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "3/4 Select *T&G* Fir 4x8 Plywo"
   },
   {
      "location": "7519",
      "product": "3/4 *T&G* Std Fir 4X8 Plywood"
   },
   {
      "location": "7519",
      "product": "3/8 Std Fir 4X8 Plywood"
   },
   {
      "location": "7519",
      "product": "5/8 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "5/8 Select Fir 4x8 Plywood"
   },
   {
      "location": "7519",
      "product": "5/8 Select *T&G* Fir 4x8 Plywo"
   },
   {
      "location": "7519",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7519",
      "product": "1/2 OSB 4x8"
   },
   {
      "location": "7519",
      "product": "15/32 OSB 4x9"
   },
   {
      "location": "7519",
      "product": "19/32 OSB 4x8"
   },
   {
      "location": "7519",
      "product": "19/32 T&G OSB 4x8"
   },
   {
      "location": "7519",
      "product": "23/32 OSB 4x8"
   },
   {
      "location": "7519",
      "product": "23/32 T&G OSB 4x8"
   },
   {
      "location": "7519",
      "product": "23/32 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7519",
      "product": "5/8 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7519",
      "product": "7/16 OSB 4x8"
   },
   {
      "location": "7519",
      "product": "7/16 OSB 4x9"
   },
   {
      "location": "7519",
      "product": "17.5mm Crown 43 4x8 MDO Paper"
   },
   {
      "location": "7519",
      "product": "17.5mm 100/30 4x8 HDO Form Ply"
   },
   {
      "location": "7519",
      "product": "3/4 Marine Grade 4x8 Plywood"
   },
   {
      "location": "7520",
      "product": "3/4 Select Fir 4x8 Plywood"
   },
   {
      "location": "7520",
      "product": "3/4 Select *T&G* Fir 4x8 Plywo"
   },
   {
      "location": "7520",
      "product": "5/8 Select *T&G* Fir 4x8 Plywo"
   },
   {
      "location": "7520",
      "product": "4'X8' Mahogany 1/4"
   },
   {
      "location": "7520",
      "product": "4'X8' Mahogany 1/4 *FSC* Certi"
   },
   {
      "location": "7520",
      "product": "4'x8' Mahogany 1/8 280/pk"
   },
   {
      "location": "7520",
      "product": "4'x10' Mahogany 1/4"
   },
   {
      "location": "7520",
      "product": "4'x10' Mahogany 1/4 *FSC* Cert"
   },
   {
      "location": "7520",
      "product": "1x4 S4S KD SPF Gorman/Canfor W"
   },
   {
      "location": "7520",
      "product": "1x4 S4S KD SPF Gorman/Canfor W"
   },
   {
      "location": "7520",
      "product": "1x4 S4S KD SPF Gorman/Canfor W"
   },
   {
      "location": "7521",
      "product": "Concrete Block 8x8x16"
   },
   {
      "location": "7521",
      "product": "2X10 S4S 2&Btr Treated H/F 20'"
   },
   {
      "location": "7521",
      "product": "2X12 S4S 2&Btr Treated H/F 20'"
   },
   {
      "location": "7521",
      "product": "2X4 S4S 2&Btr Treated H/F 20'"
   },
   {
      "location": "7521",
      "product": "2X6 S4S 2&Btr Treated  H/F 20'"
   },
   {
      "location": "7521",
      "product": "2X8 S4S 2&Btr Treated H/F 20'"
   },
   {
      "location": "7521",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7522",
      "product": "Hardi Plank 5.25 Cedarmil Prim"
   },
   {
      "location": "7522",
      "product": "Hardiplank 5.25 Smooth Primed"
   },
   {
      "location": "7522",
      "product": "Hardiplank 6.25 Smooth Primed"
   },
   {
      "location": "7522",
      "product": "Hardiplank 7.25 Cedarmill Prim"
   },
   {
      "location": "7522",
      "product": "Hardiplank 7.25 Smooth Primed"
   },
   {
      "location": "7522",
      "product": "Hardi Plank 8.25 Cedarmil Prim"
   },
   {
      "location": "7522",
      "product": "Hardiplank 8.25 Smooth Primed"
   },
   {
      "location": "7522",
      "product": "Hardiplank 9.25 Cedarmill Prim"
   },
   {
      "location": "7522",
      "product": "Hardiplank 9.25 Smooth    Prim"
   },
   {
      "location": "7523",
      "product": "Concrete Fill Reinforced Fibre"
   },
   {
      "location": "7523",
      "product": "Deck Block for 4x4 Basalite"
   },
   {
      "location": "7523",
      "product": "Filler Fastset Green Synko 9kg"
   },
   {
      "location": "7523",
      "product": "Thinset #52 Grey 25lbs/11.3kg"
   },
   {
      "location": "7523",
      "product": "Structolite Mix Bag 55lb"
   },
   {
      "location": "7523",
      "product": "Sto Poly Base BTS 47lb"
   },
   {
      "location": "7523",
      "product": "Slab Patio Concrete Natural Pl"
   },
   {
      "location": "7523",
      "product": "Slab Patio Concrete Natural Pl"
   },
   {
      "location": "7523",
      "product": "Cement Portland Type 10 (88lbs"
   },
   {
      "location": "7523",
      "product": "Proset 90 Joint Filler 9kg"
   },
   {
      "location": "7523",
      "product": "Concrete Mix Regular 55lbs (Ti"
   },
   {
      "location": "7523",
      "product": "Sand Topping Mix 55lbs (Not Pl"
   },
   {
      "location": "7523",
      "product": "Concrete Mix Superpro 6000 55l"
   },
   {
      "location": "7523",
      "product": "Mortar Mix 55lbs"
   },
   {
      "location": "7523",
      "product": "Concrete Fastset Mix 55lbs"
   },
   {
      "location": "7523",
      "product": "Playsand 55lbs"
   },
   {
      "location": "7523",
      "product": "Slab Patio Concrete Natural Pl"
   },
   {
      "location": "7523",
      "product": "Non-Shrink Grout Basalite 50lb"
   },
   {
      "location": "7523",
      "product": "Concrete Block 8x8x16"
   },
   {
      "location": "7523",
      "product": "Cardboard S/F C-Flutie 3'X250'"
   },
   {
      "location": "7523",
      "product": "Lath Expanded Metal 27X96  33/"
   },
   {
      "location": "7523",
      "product": "Expansion Joint Black 4X10'"
   },
   {
      "location": "7523",
      "product": "Blacktop Cold Patch 25kg"
   },
   {
      "location": "7523",
      "product": "Floor Top Basalite (Same As C2"
   },
   {
      "location": "7523",
      "product": "Mapei Floor Top Novoplan 2 Plu"
   },
   {
      "location": "7523",
      "product": "Traffic Patch Fine 25kg"
   },
   {
      "location": "7524",
      "product": "Insulation Rigid 1 2X8 Type 3"
   },
   {
      "location": "7524",
      "product": "Insulation Rigid 1.5 2X8 Type"
   },
   {
      "location": "7524",
      "product": "Insulation Rigid 2 2x8 Type 3"
   },
   {
      "location": "7524",
      "product": "Insulation Rigid 3 2X8 Type 3"
   },
   {
      "location": "7524",
      "product": "1/2 TREATED CCA Plywood 4'X8'"
   },
   {
      "location": "7524",
      "product": "3/4 TREATED CCA Plywood 4x8"
   },
   {
      "location": "7524",
      "product": "4'X10' Hardipanel Cedarmill Pr"
   },
   {
      "location": "7524",
      "product": "4'X10' Hardipanel Smooth Prime"
   },
   {
      "location": "7524",
      "product": "4'X8' Hardipanel Cedarmill Pri"
   },
   {
      "location": "7524",
      "product": "4'X8' Hardipanel Smooth Primed"
   },
   {
      "location": "7524",
      "product": "2X12 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7524",
      "product": "2X4 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7524",
      "product": "2X6 S4S 2&Btr Treated  H/F 08'"
   },
   {
      "location": "7524",
      "product": "4X4 S4S 2&Btr Treated H/F 08'"
   },
   {
      "location": "7524",
      "product": "3-1/2X4-1/4 Treated Landscape"
   },
   {
      "location": "7524",
      "product": "4'X4' Rough Treated H/F 08'"
   },
   {
      "location": "7524",
      "product": "4'X6' Rough Treated H/F 08'"
   },
   {
      "location": "7524",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7525",
      "product": "19/32 OSB 4x9"
   },
   {
      "location": "7525",
      "product": "4'x10' Mahogany 1/4 *FSC* Cert"
   },
   {
      "location": "7525",
      "product": "Concrete Block 8x8x16"
   },
   {
      "location": "7525",
      "product": "4'X10' Hardipanel Smooth Prime"
   },
   {
      "location": "7525",
      "product": "4'X8' Hardipanel Smooth Primed"
   },
   {
      "location": "7525",
      "product": "Hardi Plank 5.25 Cedarmil Prim"
   },
   {
      "location": "7525",
      "product": "Hardiplank 5.25 Smooth Primed"
   },
   {
      "location": "7525",
      "product": "Hardiplank 7.25 Cedarmill Prim"
   },
   {
      "location": "7525",
      "product": "Hardiplank 7.25 Smooth Primed"
   },
   {
      "location": "7525",
      "product": "Hardi Plank 8.25 Cedarmil Prim"
   },
   {
      "location": "7525",
      "product": "Hardiplank 8.25 Smooth Primed"
   },
   {
      "location": "7525",
      "product": "Hardiplank 9.25 Cedarmill Prim"
   },
   {
      "location": "7525",
      "product": "Hardiplank 9.25 Smooth    Prim"
   },
   {
      "location": "7525",
      "product": "New Hardie Shinglepanel Straig"
   },
   {
      "location": "7525",
      "product": "1x4 S4S KD SPF Gorman/Canfor W"
   },
   {
      "location": "7526",
      "product": "1x12 Primed Comb Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x10 Primed Comb Fascia 20'"
   },
   {
      "location": "7526",
      "product": "2x12 Primed Comb Fascia 20'"
   },
   {
      "location": "7526",
      "product": "2x6 Primed Comb Fascia 20'"
   },
   {
      "location": "7526",
      "product": "2x8 Primed Comb Fascia 20'"
   },
   {
      "location": "7526",
      "product": "5/4x4 Primed Comb Fascia 16'"
   },
   {
      "location": "7526",
      "product": "5/4x6 Primed Comb Fascia 16'"
   },
   {
      "location": "7526",
      "product": "5/4x8 Primed Comb Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x10 Primed Comb Fascia Dado 1"
   },
   {
      "location": "7526",
      "product": "2x4 Primed Comb Fascia Dado 16"
   },
   {
      "location": "7526",
      "product": "2x6 Primed Comb Fascia Dado 16"
   },
   {
      "location": "7526",
      "product": "2x10 Primed S4S App Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x12 Primed S4S App Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x4 Primed S4S App Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x6 Primed S4S App Fascia 16'"
   },
   {
      "location": "7526",
      "product": "2x8 Primed S4S App Fascia 16'"
   },
   {
      "location": "7527",
      "product": "1x6 Primed Comb Fascia 16'"
   },
   {
      "location": "7527",
      "product": "2x10 Primed Comb Fascia 12'"
   },
   {
      "location": "7527",
      "product": "2x10 Primed Comb Fascia 14'"
   },
   {
      "location": "7527",
      "product": "2x10 Primed Comb Fascia 16'"
   },
   {
      "location": "7527",
      "product": "2x12 Primed Comb Fascia 12'"
   },
   {
      "location": "7527",
      "product": "2x12 Primed Comb Fascia 14'"
   },
   {
      "location": "7527",
      "product": "2x12 Primed Comb Fascia 16'"
   },
   {
      "location": "7527",
      "product": "2x4 Primed Comb Fascia 14'"
   },
   {
      "location": "7527",
      "product": "2x4 Primed Comb Fascia 16'"
   },
   {
      "location": "7527",
      "product": "2x6 Primed Comb Fascia 12'"
   },
   {
      "location": "7527",
      "product": "2x6 Primed Comb Fascia 14'"
   },
   {
      "location": "7527",
      "product": "2x6 Primed Comb Fascia 16'"
   },
   {
      "location": "7527",
      "product": "2x8 Primed Comb Fascia 12'"
   },
   {
      "location": "7527",
      "product": "2x8 Primed Comb Fascia 14'"
   },
   {
      "location": "7527",
      "product": "2x8 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "Insulation Rigid 1 2X8 Type 3"
   },
   {
      "location": "7528",
      "product": "Insulation Rigid 2 2x8 Type 3"
   },
   {
      "location": "7528",
      "product": "Insulation Rigid 4 2X8 Type 4"
   },
   {
      "location": "7528",
      "product": "Insulation Styrofoam 1 Type 1"
   },
   {
      "location": "7528",
      "product": "1x10 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "1x12 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "1X3 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "1x4 Primed Comb Fascia 12'"
   },
   {
      "location": "7528",
      "product": "1x4 Primed Comb Fascia 14'"
   },
   {
      "location": "7528",
      "product": "1x4 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "1X4 Primed SPF O/S Corner 10'"
   },
   {
      "location": "7528",
      "product": "1x6 Primed Comb Fascia 12'"
   },
   {
      "location": "7528",
      "product": "1x6 Primed Comb Fascia 14'"
   },
   {
      "location": "7528",
      "product": "1x6 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "1x8 Primed Comb Fascia 12'"
   },
   {
      "location": "7528",
      "product": "1x8 Primed Comb Fascia 16'"
   },
   {
      "location": "7528",
      "product": "2x2 Primed S4S Fascia 10'"
   },
   {
      "location": "7528",
      "product": "2x3 Primed Smooth Sill 12'"
   },
   {
      "location": "7528",
      "product": "2X5 Primed SPF Dado O/S Corner"
   },
   {
      "location": "7528",
      "product": "5/4X4 Primed SPF Corner 10'"
   },
   {
      "location": "7529",
      "product": "Insulation Rigid 2.5 2x8 Type"
   },
   {
      "location": "7529",
      "product": "Insulation Rigid 1 2X8 Type 3"
   },
   {
      "location": "7529",
      "product": "Insulation Rigid 2 2x8 Type 3"
   },
   {
      "location": "7529",
      "product": "Insulation Rigid 3 2X8 Type 3"
   },
   {
      "location": "7529",
      "product": "Insulation Rigid 4 2X8 Type 4"
   },
   {
      "location": "7529",
      "product": "1X2X18 Stakes"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 1.5 Type"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 2 Type 1"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 1 Type 1"
   },
   {
      "location": "7529",
      "product": "2x10x12 O.C. Bridging"
   },
   {
      "location": "7529",
      "product": "2x10x16 O.C Bridging"
   },
   {
      "location": "7529",
      "product": "2x12x16 O.C Bridging"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 3 Type 2"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 3-1/2 Typ"
   },
   {
      "location": "7529",
      "product": "Insulation Styrofoam 4 Type 1"
   },
   {
      "location": "7529",
      "product": "PVC Corrugated Panel Clear 8'"
   },
   {
      "location": "7529",
      "product": "PVC Corrugated Panel Clear 10'"
   },
   {
      "location": "7529",
      "product": "PVC Corrugated Panel Clear 12'"
   },
   {
      "location": "7529",
      "product": "PVC Corrugated Panel White 8'"
   },
   {
      "location": "7529",
      "product": "PVC Corrugated Panel White 12'"
   },
   {
      "location": "7529",
      "product": "Pipe PVC Perforated CSA 3X 10'"
   },
   {
      "location": "7529",
      "product": "Pipe PVC Perforated Sewer 4X 1"
   },
   {
      "location": "7529",
      "product": "Pipe PVC Solid Sewer 4X 10'"
   },
   {
      "location": "7529",
      "product": "Pipe PVC Perforated Sewer 6X10"
   },
   {
      "location": "7530",
      "product": "Delta Drain 6000 with Filter C"
   },
   {
      "location": "7530",
      "product": "Delta Drain 6000 with Filter C"
   },
   {
      "location": "7530",
      "product": "Tee ABS Sanitary 3"
   },
   {
      "location": "7530",
      "product": "Wye ABS 3"
   },
   {
      "location": "7530",
      "product": "Pipe PVC 3/4X10' (SCH40)"
   },
   {
      "location": "7530",
      "product": "Pipe PVC 1X 10' (SCH40)"
   },
   {
      "location": "7530",
      "product": "Pipe PVC 1-1/2 X 10' (SCH40)"
   },
   {
      "location": "7530",
      "product": "Pipe PVC 2 X 10' (SCH40)"
   },
   {
      "location": "7530",
      "product": "Rainscreen Dri Wall 10mm 4' X"
   },
   {
      "location": "7530",
      "product": "1X2X18 Stakes"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 102X59' 6 mil"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 20'X100' 6 mil"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 10'X100' 6 mil"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 10'X100' 10 mil"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 16X375' 6 mil"
   },
   {
      "location": "7530",
      "product": "Plain Felt 36X144' 4SF 15lb"
   },
   {
      "location": "7530",
      "product": "Plain Felt 36 X 72' 2SF 30lb"
   },
   {
      "location": "7530",
      "product": "Roofing 107.2SF 90lb Midnight"
   },
   {
      "location": "7530",
      "product": "Hal-Tex 30 Minute Heavy Duty T"
   },
   {
      "location": "7530",
      "product": "Hal-Tex 60 Minute Heavy Duty T"
   },
   {
      "location": "7530",
      "product": "Delta-MS Brown/Black 5'x65.7'"
   },
   {
      "location": "7530",
      "product": "Foam Sill Plate Gasket 3.5X75'"
   },
   {
      "location": "7530",
      "product": "Foam Sill Plate Gasket 5.5X75'"
   },
   {
      "location": "7530",
      "product": "Foam Sill Plate Gasket 7.5X75'"
   },
   {
      "location": "7530",
      "product": "Poly Medium Clear 1000 Sf"
   },
   {
      "location": "7530",
      "product": "Poly Heavy Clear 1000 Sf"
   },
   {
      "location": "7530",
      "product": "Poly Heavy Clear 2000 Sf"
   },
   {
      "location": "7530",
      "product": "Poly UV Clear 20'X100' 10 mil"
   },
   {
      "location": "7530",
      "product": "Poly Heavy Black 2000 Sf"
   },
   {
      "location": "7530",
      "product": "Conduit Grey Pipe PVC 3/4X10'"
   },
   {
      "location": "7530",
      "product": "Conduit Grey Pipe PVC 1X10'"
   },
   {
      "location": "7530",
      "product": "Conduit Grey Pipe PVC 1-1/4X10"
   },
   {
      "location": "7530",
      "product": "Pipe ABS Cellcore 1-1/2 X 12'"
   },
   {
      "location": "7530",
      "product": "Pipe ABS Cellcore 2 X 12'"
   },
   {
      "location": "7530",
      "product": "Pipe ABS Cellcore 3 X 12'"
   },
   {
      "location": "7530",
      "product": "Pipe ABS Cellcore 4 X 12'"
   },
   {
      "location": "7530",
      "product": "Pipe PVC Vacuum 2X 8'"
   },
   {
      "location": "7530",
      "product": "Conduit Grey Pipe PVC 1/2X10'"
   },
   {
      "location": "7530",
      "product": "Coupling ABS 4 (Hxh)"
   },
   {
      "location": "7530",
      "product": "Cap Perm ABS 3"
   },
   {
      "location": "7530",
      "product": "Elbow ABS 3 X 90Deg"
   },
   {
      "location": "7530",
      "product": "Elbow ABS 4 X 45Deg (hxh)"
   },
   {
      "location": "7530",
      "product": "Elbow ABS 4 X 22-1/2Deg"
   },
   {
      "location": "7530",
      "product": "Wye ABS 4"
   },
   {
      "location": "7530",
      "product": "Pipe PVC Perforated CSA 3X 10'"
   },
   {
      "location": "7530",
      "product": "Shingle 3 Tab(30yr) SHADOW Bla"
   },
   {
      "location": "7530",
      "product": "Snowfence Vexar Black 4'X50'"
   },
   {
      "location": "7530",
      "product": "Pipe PVC Solid Sewer 4X 10'"
   },
   {
      "location": "7530",
      "product": "Snowfence Vexar Medium Duty Or"
   },
   {
      "location": "7530",
      "product": "Fence Barrier Orange 4'x50'"
   },
   {
      "location": "7530",
      "product": "Pipe PVC Solid CSA 3X 10'"
   },
   {
      "location": "7530",
      "product": "Coupling PVC Sewer 3"
   },
   {
      "location": "7530",
      "product": "Pipe Big O Perforated 4 100' R"
   },
   {
      "location": "7530",
      "product": "Pipe Big O Solid 4 100' Roll"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 4X 22-1/2Deg"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 4X 45Deg"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 4X 90Deg"
   },
   {
      "location": "7530",
      "product": "Coupling PVC Sewer 4"
   },
   {
      "location": "7530",
      "product": "Clean Out PVC Sewer Adapter Ba"
   },
   {
      "location": "7530",
      "product": "Cap Sewer PVC 4"
   },
   {
      "location": "7530",
      "product": "Tee PVC Straight Sewer 4"
   },
   {
      "location": "7530",
      "product": "Tee PVC Sewer Sanitary 4"
   },
   {
      "location": "7530",
      "product": "Wye PVC Sewer 4"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 6X45 Deg"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 6X 90Deg"
   },
   {
      "location": "7530",
      "product": "Coupling PVC Sewer 6"
   },
   {
      "location": "7530",
      "product": "Cap PVC Sewer 6"
   },
   {
      "location": "7530",
      "product": "Tee PVC Sewer 6"
   },
   {
      "location": "7530",
      "product": "Coupling Big-O 4"
   },
   {
      "location": "7530",
      "product": "Cap PVC 3"
   },
   {
      "location": "7530",
      "product": "Tee Big-O 4"
   },
   {
      "location": "7530",
      "product": "Elbow PVC 3X 22-1/2Deg"
   },
   {
      "location": "7530",
      "product": "Wye PVC 3"
   },
   {
      "location": "7530",
      "product": "Coupling PVC 6X4 Reducer"
   },
   {
      "location": "7530",
      "product": "Elbow PVC Sewer 3X 90Deg"
   },
   {
      "location": "7530",
      "product": "Hydroduct PVC 3 J-Bend with Pi"
   },
   {
      "location": "7530",
      "product": "Teleduct PVC 2 J-Bend with Pip"
   },
   {
      "location": "7530",
      "product": "Teleduct PVC Pipe 2X 10'"
   },
   {
      "location": "7530",
      "product": "Hydroduct PVC Pipe 3X   10'"
   },
   {
      "location": "7530",
      "product": "Teleduct PVC Elbow 90Deg 2"
   },
   {
      "location": "7531",
      "product": "2X10 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7531",
      "product": "2X10 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7531",
      "product": "2X10 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7531",
      "product": "2X10 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7531",
      "product": "2X10 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7531",
      "product": "2X4 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7531",
      "product": "2X4 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7531",
      "product": "2X4 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7531",
      "product": "2X4 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7531",
      "product": "2X4 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7531",
      "product": "2X6 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7531",
      "product": "2X6 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7531",
      "product": "2X6 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7531",
      "product": "2X6 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7531",
      "product": "2X6 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7531",
      "product": "2X8 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7531",
      "product": "2X8 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7531",
      "product": "2X8 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7531",
      "product": "2X8 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7531",
      "product": "2X8 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7532",
      "product": "1/2x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7532",
      "product": "2X10 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7532",
      "product": "2X10 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7532",
      "product": "2X10 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7532",
      "product": "2X12 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7532",
      "product": "2X12 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7532",
      "product": "2X6 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7532",
      "product": "2X6 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7532",
      "product": "2X10 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7532",
      "product": "2X10 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7532",
      "product": "2X4 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7532",
      "product": "2X6 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7532",
      "product": "2X6 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7532",
      "product": "2X6 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7532",
      "product": "2X8 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7533",
      "product": "2X4 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7533",
      "product": "2X4 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7533",
      "product": "2X4 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7533",
      "product": "2X4 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7533",
      "product": "2X4 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7533",
      "product": "2X6 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7533",
      "product": "2X6 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7533",
      "product": "2X6 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7533",
      "product": "2X6 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7533",
      "product": "2X6 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7534",
      "product": "2X10 S4S 2&Btr KD Fir 22"
   },
   {
      "location": "7534",
      "product": "2X10 S4S 2&Btr KD Fir 24"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 08"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 14"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7534",
      "product": "2X12 S4S 2&Btr KD Fir 24"
   },
   {
      "location": "7534",
      "product": "2X6 S4S 2&Btr KD Fir 24"
   },
   {
      "location": "7534",
      "product": "2X8 S4S 2&Btr KD Fir 24"
   },
   {
      "location": "7534",
      "product": "1X2 S4S 2&Btr Grn H/F 08"
   },
   {
      "location": "7534",
      "product": "1X2 S4S 2&Btr Grn H/F 10"
   },
   {
      "location": "7534",
      "product": "1X2 S4S 2&Btr Grn H/F 12"
   },
   {
      "location": "7534",
      "product": "2X2 S4S 2&Btr Grn H/F 08"
   },
   {
      "location": "7534",
      "product": "2X2 S4S 2&Btr Grn H/F 10"
   },
   {
      "location": "7534",
      "product": "2X2 S4S 2&Btr Grn H/F 12"
   },
   {
      "location": "7534",
      "product": "2X2 Cant Strip 08"
   },
   {
      "location": "7534",
      "product": "2X2 Cant Strip 10"
   },
   {
      "location": "7534",
      "product": "3/4 Cant Strip 08"
   },
   {
      "location": "7534",
      "product": "3/4 Cant Strip 10"
   },
   {
      "location": "7534",
      "product": "3/4 Cant Strip 12"
   },
   {
      "location": "7534",
      "product": "4X4 Cant Strip 12"
   },
   {
      "location": "7534",
      "product": "2x3 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7534",
      "product": "2x3 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7534",
      "product": "2x3 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7535",
      "product": "1x10 S1S Util&Btr H/F 10"
   },
   {
      "location": "7535",
      "product": "1x10 S1S Util&Btr H/F 12"
   },
   {
      "location": "7535",
      "product": "1x10 S1S Util&Btr H/F 14"
   },
   {
      "location": "7535",
      "product": "1x10 S1S Util&Btr H/F 16"
   },
   {
      "location": "7535",
      "product": "1x8 S/L Util&Btr H/F 12"
   },
   {
      "location": "7535",
      "product": "1x8 S/L Util&Btr H/F 16"
   },
   {
      "location": "7535",
      "product": "1X4 S4S Util&Btr Grn SPF 08"
   },
   {
      "location": "7535",
      "product": "1X4 S4S Util&Btr Grn SPF 10"
   },
   {
      "location": "7535",
      "product": "1X4 S4S Util&Btr Grn SPF 12"
   },
   {
      "location": "7535",
      "product": "1X4 S4S Util&Btr Grn SPF 14"
   },
   {
      "location": "7535",
      "product": "1X4 S4S Util&Btr Grn SPF 16"
   },
   {
      "location": "7536",
      "product": "4X4 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7536",
      "product": "4X4 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7536",
      "product": "4X6 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7536",
      "product": "4X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7536",
      "product": "6X6 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7536",
      "product": "6X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7536",
      "product": "6X6 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7536",
      "product": "8X8 Rough #1 App Grn Fir 08"
   },
   {
      "location": "7536",
      "product": "8X8 Rough #1 App Grn Fir 10"
   },
   {
      "location": "7536",
      "product": "8X8 Rough #1 App Grn Fir 12"
   },
   {
      "location": "7536",
      "product": "1x10 S1S Util&Btr H/F 10"
   },
   {
      "location": "7536",
      "product": "1x8 S/L Util&Btr H/F 12"
   },
   {
      "location": "7536",
      "product": "1x8 S/L Util&Btr H/F 16"
   },
   {
      "location": "7536",
      "product": "2X12 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7536",
      "product": "2X4 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7536",
      "product": "2x4 S4S 2&BTR KD SPF 116-1/4"
   },
   {
      "location": "7536",
      "product": "2X4 S4S 2&BTR KD SPF 92-1/4"
   },
   {
      "location": "7536",
      "product": "2X6 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7536",
      "product": "2X6 S4S 2&Btr KD SPF 116-1/4"
   },
   {
      "location": "7536",
      "product": "2X6 S4S 2&BTR KD SPF 92-1/4"
   },
   {
      "location": "7536",
      "product": "2X8 S4S 2&Btr KD SPF 104-1/4"
   },
   {
      "location": "7536",
      "product": "2X8 S4S 2&Btr KD SPF 116-1/4"
   },
   {
      "location": "7536",
      "product": "2X8 S4S 2&Btr KD SPF 92-1/4"
   },
   {
      "location": "7536",
      "product": "1X4 S4S Util&Btr Grn SPF 08"
   },
   {
      "location": "7536",
      "product": "1X4 S4S Util&Btr Grn SPF 10"
   },
   {
      "location": "7536",
      "product": "1X4 S4S Util&Btr Grn SPF 12"
   },
   {
      "location": "7536",
      "product": "1X4 S4S Util&Btr Grn SPF 16"
   },
   {
      "location": "7536",
      "product": "1X6 #3  S4S KD SPF 10"
   },
   {
      "location": "7536",
      "product": "2x3 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7537",
      "product": "4X4 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7537",
      "product": "4X4 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7537",
      "product": "4X4 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7537",
      "product": "6X6 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7537",
      "product": "6X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7537",
      "product": "6X6 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7537",
      "product": "6X6 S4S 2&Btr Grn Fir 14"
   },
   {
      "location": "7537",
      "product": "6X6 S4S 2&Btr Grn Fir 16"
   },
   {
      "location": "7537",
      "product": "2X10 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7537",
      "product": "2X10 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7537",
      "product": "2X12 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7537",
      "product": "2X12 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7537",
      "product": "2X4 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7537",
      "product": "2X4 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7537",
      "product": "2X6 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7537",
      "product": "2X6 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7537",
      "product": "2X8 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7537",
      "product": "2X8 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7537",
      "product": "1X6 #3  S4S KD SPF 08"
   },
   {
      "location": "7537",
      "product": "1X6 #3  S4S KD SPF 10"
   },
   {
      "location": "7537",
      "product": "1X6 #3  S4S  KD SPF 12"
   },
   {
      "location": "7537",
      "product": "1X6 #3  S4S KD SPF 14"
   },
   {
      "location": "7537",
      "product": "1X6 #3 S4S KD SPF 16"
   },
   {
      "location": "7538",
      "product": "1x10 S1S Util&Btr H/F 08"
   },
   {
      "location": "7538",
      "product": "2X4 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7538",
      "product": "2x4 S4S 2&BTR KD SPF 116-1/4"
   },
   {
      "location": "7538",
      "product": "2X4 S4S 2&BTR KD SPF 92-1/4"
   },
   {
      "location": "7538",
      "product": "2X6 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7538",
      "product": "2X6 S4S 2&Btr KD SPF 116-1/4"
   },
   {
      "location": "7538",
      "product": "2X6 S4S 2&BTR KD SPF 92-1/4"
   },
   {
      "location": "7538",
      "product": "2X8 S4S 2&Btr KD SPF 104-1/4"
   },
   {
      "location": "7538",
      "product": "2X8 S4S 2&Btr KD SPF 116-1/4"
   },
   {
      "location": "7538",
      "product": "2X8 S4S 2&Btr KD SPF 92-1/4"
   },
   {
      "location": "7539",
      "product": "2X4 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7539",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7539",
      "product": "2X4 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7539",
      "product": "2X4 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7539",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7539",
      "product": "2X6 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7539",
      "product": "2X6 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7539",
      "product": "2X6 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7539",
      "product": "2X6 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7539",
      "product": "2X6 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7540",
      "product": "2X10 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7540",
      "product": "2X10 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7540",
      "product": "2X10 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7540",
      "product": "2X12 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7540",
      "product": "2X12 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7540",
      "product": "2X12 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7540",
      "product": "2X12 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7540",
      "product": "2X8 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7540",
      "product": "2X8 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7540",
      "product": "2X8 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7540",
      "product": "2X8 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7540",
      "product": "2X8 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7541",
      "product": "2X10 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7541",
      "product": "2X10 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7541",
      "product": "2X10 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7541",
      "product": "2X10 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7541",
      "product": "2X10 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7541",
      "product": "2X12 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7541",
      "product": "2X12 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7541",
      "product": "2X12 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7541",
      "product": "2X12 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7541",
      "product": "2X8 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7541",
      "product": "2X8 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7541",
      "product": "2X8 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7541",
      "product": "2X8 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7541",
      "product": "2X8 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7542",
      "product": "2X4 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7542",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7542",
      "product": "2X4 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7542",
      "product": "2X4 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7542",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7542",
      "product": "2X6 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7542",
      "product": "2X6 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7542",
      "product": "2X6 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7542",
      "product": "2X6 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7542",
      "product": "2X6 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7542",
      "product": "2X8 S4S 2&Btr KD SPF 104-1/4"
   },
   {
      "location": "7543",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7543",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7543",
      "product": "3/4 *T&G* Std Fir 4X8 Plywood"
   },
   {
      "location": "7543",
      "product": "5/8 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7543",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7543",
      "product": "4X6 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7543",
      "product": "4X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7543",
      "product": "4X6 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7543",
      "product": "4X6 S4S 2&Btr Grn Fir 18"
   },
   {
      "location": "7543",
      "product": "4X6 S4S 2&Btr Grn Fir 20"
   },
   {
      "location": "7543",
      "product": "8X8 Rough #1 App Grn Fir 08"
   },
   {
      "location": "7543",
      "product": "8X8 Rough #1 App Grn Fir 10"
   },
   {
      "location": "7543",
      "product": "8X8 Rough #1 App Grn Fir 12"
   },
   {
      "location": "7543",
      "product": "2X10 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7543",
      "product": "2X10 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7543",
      "product": "2X12 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7543",
      "product": "2X12 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7543",
      "product": "2X4 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7543",
      "product": "2X4 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7543",
      "product": "2X6 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7543",
      "product": "2X6 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7543",
      "product": "2X8 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7543",
      "product": "2X8 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7544",
      "product": "Cement Board 3'X5'X1/2 DUROCK"
   },
   {
      "location": "7544",
      "product": "Rebar 15mm X 20'  (same as 5/8"
   },
   {
      "location": "7544",
      "product": "2X6 Post Cap Stock"
   },
   {
      "location": "7544",
      "product": "Dry Sheathing 400Sf/Roll"
   },
   {
      "location": "7544",
      "product": "Sweep Compound Dustbane 50lb p"
   },
   {
      "location": "7544",
      "product": "Floor Protect Powerboard 46 mi"
   },
   {
      "location": "7544",
      "product": "Cardboard S/F C-Flutie 3'X250'"
   },
   {
      "location": "7544",
      "product": "Pallet Deposit Refundable"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool R14X"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool 16 S"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool R22X"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool R22X"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool 23 S"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool R28X"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7544",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7544",
      "product": "2X8 Appearance KD SPF 12"
   },
   {
      "location": "7545",
      "product": "1X2X18 Stakes"
   },
   {
      "location": "7545",
      "product": "Poly UV Clear 16X375' 6 mil"
   },
   {
      "location": "7545",
      "product": "Tyvek 9'X100' = 900 Sf"
   },
   {
      "location": "7545",
      "product": "Insulation Styrofoam 3 Type 2"
   },
   {
      "location": "7545",
      "product": "Foam Sill Plate Gasket 3.5X75'"
   },
   {
      "location": "7545",
      "product": "Foam Sill Plate Gasket 5.5X75'"
   },
   {
      "location": "7545",
      "product": "Foam Sill Plate Gasket 7.5X75'"
   },
   {
      "location": "7545",
      "product": "Flashing Firestop 30 Guage Gal"
   },
   {
      "location": "7545",
      "product": "Tyvek Commercial 10'X125'"
   },
   {
      "location": "7545",
      "product": "17.5mm Crown 43 4x8 MDO Paper"
   },
   {
      "location": "7546",
      "product": "Weldmesh Sheet 10 Gauge 4'X7'"
   },
   {
      "location": "7546",
      "product": "Weldmesh Sheet 10 Gauge 7-1/2'"
   },
   {
      "location": "7546",
      "product": "Rebar 10mm X 10'  (same as 1/2"
   },
   {
      "location": "7546",
      "product": "Rebar 10mm X 20' (same as 1/2)"
   },
   {
      "location": "7546",
      "product": "Rebar 15mm x 10' (same as 5/8)"
   },
   {
      "location": "7546",
      "product": "Rebar 15mm X 20'  (same as 5/8"
   },
   {
      "location": "7546",
      "product": "Rebar 20mm X 20'  (same as 3/4"
   },
   {
      "location": "7546",
      "product": "Rebar Corner 15mm (5/8 ) 90deg"
   },
   {
      "location": "7546",
      "product": "Rebar Corner 10mm (1/2) 90deg"
   },
   {
      "location": "7546",
      "product": "Rebar Bends 15mm (5/8) 8x36"
   },
   {
      "location": "7546",
      "product": "Rebar Stakes 10mm (1/2) x 2'"
   },
   {
      "location": "7546",
      "product": "Rebar Stakes 15mm (5/8) x 2'"
   },
   {
      "location": "7547",
      "product": "17.5mm Pourform 107 4x8 Plywoo"
   },
   {
      "location": "7547",
      "product": "17.5/19mm Pourform Blister 4x8"
   },
   {
      "location": "7547",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7547",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7547",
      "product": "3/4 *T&G* Std Fir 4X8 Plywood"
   },
   {
      "location": "7547",
      "product": "5/8 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7547",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7547",
      "product": "5.2mm Eucalyptus Revolution 4x"
   },
   {
      "location": "7548",
      "product": "Drywall Regular 4'X10'X1/2"
   },
   {
      "location": "7548",
      "product": "Drywall Regular 4'X8'X1/2"
   },
   {
      "location": "7548",
      "product": "Drywall Firestop Type X 4'X8'X"
   },
   {
      "location": "7548",
      "product": "Drywall Firestop Type X 4'X10'"
   },
   {
      "location": "7548",
      "product": "Cement Board 3'X5'X1/2 DUROCK"
   },
   {
      "location": "7548",
      "product": "1/2 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "1/4 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "3/4 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "3/8 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "5/8 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "5/8 4x8 Grooved Chalet Ranchwa"
   },
   {
      "location": "7548",
      "product": "1 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "1/2 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "1/4 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "1/8 Oroboard (MDF) 4x8"
   },
   {
      "location": "7548",
      "product": "3/4 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "3/4 Melamine White 4x8"
   },
   {
      "location": "7548",
      "product": "3/8 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "5/8 Medite 4x8"
   },
   {
      "location": "7548",
      "product": "5/8 Melamine White 4x8"
   },
   {
      "location": "7548",
      "product": "1/2 G2S Oak plywood 4x8"
   },
   {
      "location": "7548",
      "product": "1/2 G1S Maple Plywood 4x8"
   },
   {
      "location": "7548",
      "product": "1/4 G1S Oak Plywood 4x8"
   },
   {
      "location": "7548",
      "product": "5.2mm Eucalyptus Revolution 4x"
   },
   {
      "location": "7548",
      "product": "1/4 G1S Rotary Maple Plywood 4"
   },
   {
      "location": "7548",
      "product": "1/4 Hardboard 4x8"
   },
   {
      "location": "7548",
      "product": "1/4 Pegboard 4x8"
   },
   {
      "location": "7548",
      "product": "3/4  G2S Oak Plywood 4x8"
   },
   {
      "location": "7548",
      "product": "3/4 G1S Rotary Maple Plywood 4"
   },
   {
      "location": "7548",
      "product": "1/2 MDO One side 4x8 Crezone"
   },
   {
      "location": "7548",
      "product": "1/2 MDO Two sides 4x8 Crezone"
   },
   {
      "location": "7548",
      "product": "3/4 MDO One side 4x8 Crezone"
   },
   {
      "location": "7548",
      "product": "3/4 MDO Two sides 4x8 Crezone"
   },
   {
      "location": "7548",
      "product": "3/8 MDO One side 4x8 Crezone"
   },
   {
      "location": "7548",
      "product": "1 Balsa 4X8 Plywood"
   },
   {
      "location": "7548",
      "product": "1-1/2 Balsa 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "1/4 Balsa 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "2 Balsa 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "3/8 Balsa 4x8 Plywood"
   },
   {
      "location": "7548",
      "product": "Floor Protect Powerboard 46 mi"
   },
   {
      "location": "7548",
      "product": "Floor Underlayment Synthetic G"
   },
   {
      "location": "7548",
      "product": "4X4 Balsa Wood 08"
   },
   {
      "location": "7548",
      "product": "Dry Sheathing 400Sf/Roll"
   },
   {
      "location": "7549",
      "product": "1/2 Baltic Birch Plywood 5X5"
   },
   {
      "location": "7549",
      "product": "Cement Board 3'X5'X1/2 DUROCK"
   },
   {
      "location": "7549",
      "product": "Ultralight 1x3 - 11/16x2-1/2x1"
   },
   {
      "location": "7549",
      "product": "Ultralight 1x4 - 11/16x3-1/2x1"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 1X10'"
   },
   {
      "location": "7549",
      "product": "1 Ultra Lite Medite 4x8"
   },
   {
      "location": "7549",
      "product": "1/2 G1S Pine Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "1/4 G1S Pine Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "3/4 G1S Poplar Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "3/16 Acrylic 4x8 Clear EX F2 O"
   },
   {
      "location": "7549",
      "product": "1/4 Acrylic 4x8 Clear EX F2 Op"
   },
   {
      "location": "7549",
      "product": "3/8 Fir U-Lay Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "1/2 Medite 5x10"
   },
   {
      "location": "7549",
      "product": "1/4 Medite 5x10"
   },
   {
      "location": "7549",
      "product": "3/4 Medite 5x10"
   },
   {
      "location": "7549",
      "product": "1/2 G2S Birch Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "1/4 G1S Birch Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "1/8  G1S Oak Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "4'x8' Mahogany 1/8 280/pk"
   },
   {
      "location": "7549",
      "product": "1/8 G1S Birch Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "3/4 G2S Birch Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "1/2 FIRE Treated Standard Plyw"
   },
   {
      "location": "7549",
      "product": "3/4 FIRE Treated Standard Plyw"
   },
   {
      "location": "7549",
      "product": "3/4 G1S Pine Plywood 4x8"
   },
   {
      "location": "7549",
      "product": "5/8 FIRE Treated Standard Plyw"
   },
   {
      "location": "7549",
      "product": "1/2 Balsa 4x8 Plywood"
   },
   {
      "location": "7549",
      "product": "3/4 Balsa 4x8 Plywood"
   },
   {
      "location": "7549",
      "product": "3/4 Ultra Lite Medite 4x8"
   },
   {
      "location": "7549",
      "product": "3/8 Pine Bead Board 4x8"
   },
   {
      "location": "7549",
      "product": "Track Pocket 120 (Kt40-120)"
   },
   {
      "location": "7549",
      "product": "Track Pocket 144 (Kt40-144)"
   },
   {
      "location": "7549",
      "product": "Track Pocket 96 (Kt40-96)"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 1/4X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 5/16X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 3/8X10' Z"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 1/2X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 5/8X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 3/4X10' A"
   },
   {
      "location": "7549",
      "product": "Redi Rod Plated Zinc 7/8X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Galvanized 1/2X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Galvanized 5/8X10'"
   },
   {
      "location": "7549",
      "product": "Redi Rod Galvanized 3/4X10'"
   },
   {
      "location": "7549",
      "product": "Hardi Backer Board 3'X5'X1/2"
   },
   {
      "location": "7549",
      "product": "Track Barn Door 10' (41-4580)"
   },
   {
      "location": "7549",
      "product": "Track Barn Door 8' (41-4540)"
   },
   {
      "location": "7549",
      "product": "1/2 Medex 4x8"
   },
   {
      "location": "7549",
      "product": "4'X8' Rubberply 3/16 Short Gra"
   },
   {
      "location": "7549",
      "product": "4'X8' Rubberply 3/16 Long Grai"
   },
   {
      "location": "7549",
      "product": "1/2 Ultra Lite Medite 4x8"
   },
   {
      "location": "7550",
      "product": "1X10 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X10 S4S KD 2&Btr Pine R/L"
   },
   {
      "location": "7550",
      "product": "1X12 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X12 S4S KD 2&Btr Pine R/L"
   },
   {
      "location": "7550",
      "product": "1X2 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X3 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X4 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X4 S4S KD 2&Btr Pine R/L"
   },
   {
      "location": "7550",
      "product": "1X5 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1x6 Shiplap 1/8 Gap S4S Primed"
   },
   {
      "location": "7550",
      "product": "1X6 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X6 S4S KD 2&Btr Pine R/L"
   },
   {
      "location": "7550",
      "product": "1x8 Shiplap 1/8 Gap S4S Primed"
   },
   {
      "location": "7550",
      "product": "1X8 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "1X8 S4S KD 2&Btr Pine R/L"
   },
   {
      "location": "7550",
      "product": "2X10 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X12 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X2 S4S Clear KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X3 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X4 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X6 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "2X8 S4S Clear V/G KD Fir R/L"
   },
   {
      "location": "7550",
      "product": "4X4 S4S Clear KD Fir R/L"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x10 - 11/16x9-1/4x"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x12 - 11/16x11-1/4"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x2 - 11/16x1-1/2x1"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x3 - 11/16x2-1/2x1"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x5 - 11/16x4-9/16x"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x6 - 11/16x5-1/2x1"
   },
   {
      "location": "7551",
      "product": "Ultralight 1x7 - 11/16x6-9/16x"
   },
   {
      "location": "7551",
      "product": "Ultralight - 1/2x11-1/4x16' (M"
   },
   {
      "location": "7551",
      "product": "Ultralight - 1x5-1/2x16' (MFPU"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x10 - 21/32x9"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x12 - 21/32x1"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x2 - 21/32x1-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x3 - 21/32x2-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x4 - 21/32x3-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x5 - 21/32x4-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x6 - 21/32x5-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x7 - 21/32x6-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J Brick Mould -"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J 1x8 - 21/32x7-"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J Chair Rail - 1"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J Brick Mould- 1"
   },
   {
      "location": "7552",
      "product": "Primed Pine F/J Brickmould - 1"
   },
   {
      "location": "7553",
      "product": "Ultralight Baseboard - 9/16x5-"
   },
   {
      "location": "7553",
      "product": "Ultralight Casing - 3/8x2-1/4x"
   },
   {
      "location": "7553",
      "product": "Ultralight - 1/2x2-1/2x14' (MF"
   },
   {
      "location": "7553",
      "product": "Ultralight - 1/2x3-1/4x16' (MF"
   },
   {
      "location": "7553",
      "product": "Ultralight - 1/2x4-1/2x16' (MF"
   },
   {
      "location": "7553",
      "product": "Ultralight - 1/2x5-1/2x16' (MF"
   },
   {
      "location": "7553",
      "product": "Ultralight - 1/2x7-1/4x16' (MF"
   },
   {
      "location": "7553",
      "product": "Ultralight Baseboard - 9/16x5-"
   },
   {
      "location": "7553",
      "product": "Ultralight Baseboard - 1/2x3-1"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 1-1/8x4x16"
   },
   {
      "location": "7554",
      "product": "Ultralight Baseboard - 9/16x5-"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown - 11/16x5-1/4"
   },
   {
      "location": "7554",
      "product": "Ultralight Panel Mould - 11/16"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 1x3-1/2x14"
   },
   {
      "location": "7554",
      "product": "Ultralight Panel Mould - 1x1-1"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown - 11/16x4-1/4"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 11/16x2-1/"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 11/16x3x15"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown - 1x6-15/16x1"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 9/16x2-1/2"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown - 5/8x4-1/4x1"
   },
   {
      "location": "7554",
      "product": "Ultralight - 1/2x3-1/2x16' (MF"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown - 9/16x3-1/4x"
   },
   {
      "location": "7554",
      "product": "Ultralight Casing - 11/16x3-1/"
   },
   {
      "location": "7554",
      "product": "Ultralight Crown- 1-1/8x5-7/16"
   },
   {
      "location": "7555",
      "product": "1x10 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7555",
      "product": "1x12 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7555",
      "product": "1x8 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7555",
      "product": "2x10 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7556",
      "product": "Primed Pine F/J Window Stool-"
   },
   {
      "location": "7557",
      "product": "Elbow Gutter 'A' Brown Aluminu"
   },
   {
      "location": "7557",
      "product": "Elbow Gutter 'A' Black Aluminu"
   },
   {
      "location": "7557",
      "product": "Elbow Gutter 'B' Black Aluminu"
   },
   {
      "location": "7557",
      "product": "Elbow Gutter 'B' White Aluminu"
   },
   {
      "location": "7557",
      "product": "Elbow Gutter 'B' Brown Aluminu"
   },
   {
      "location": "7558",
      "product": "Downpipe White Aluminum 2X3X10"
   },
   {
      "location": "7558",
      "product": "Downpipe Black Aluminum 2X3X10"
   },
   {
      "location": "7558",
      "product": "Gutter White Aluminum 4X10'"
   },
   {
      "location": "7558",
      "product": "Gutter Black Aluminum 4X10'"
   },
   {
      "location": "7558",
      "product": "Gutter White Aluminum 4X16'"
   },
   {
      "location": "7558",
      "product": "Gutter Black Aluminum 5X16'"
   },
   {
      "location": "7558",
      "product": "Gutter Black Aluminum 5X10'"
   },
   {
      "location": "7558",
      "product": "Gutter Brown Aluminum 4X10'"
   },
   {
      "location": "7558",
      "product": "Downpipe Brown Aluminum 2X3X10"
   },
   {
      "location": "7558",
      "product": "Soffit 4 Panel Perforated Whit"
   },
   {
      "location": "7558",
      "product": "Soffit 4 Panel Perforated Whit"
   },
   {
      "location": "7558",
      "product": "Soffit 3 Panel Vented Perforat"
   },
   {
      "location": "7558",
      "product": "J Channel Aluminum Trim White"
   },
   {
      "location": "7558",
      "product": "J Channel Black Aluminium 1/2X"
   },
   {
      "location": "7558",
      "product": "J Channel Vinyl White 5/8X12'"
   },
   {
      "location": "7558",
      "product": "J Channel Vinyl White 1/2X12'"
   },
   {
      "location": "7559",
      "product": "1x2 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7559",
      "product": "1x3 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7559",
      "product": "1x4 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7559",
      "product": "1x6 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7559",
      "product": "2x12 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7560",
      "product": "Tile Cover Poly Black 2x3"
   },
   {
      "location": "7560",
      "product": "Tile Cover Poly White 2X3"
   },
   {
      "location": "7560",
      "product": "Gutter Hanger Milled Finish 5"
   },
   {
      "location": "7560",
      "product": "Corner Outside Brown Aluminum"
   },
   {
      "location": "7560",
      "product": "End Cap Left White Aluminum 4"
   },
   {
      "location": "7560",
      "product": "End Cap Left Brown Aluminum 4"
   },
   {
      "location": "7560",
      "product": "Downpipe Strap Round Brown 2"
   },
   {
      "location": "7560",
      "product": "Downpipe Strap Brown 2x3"
   },
   {
      "location": "7560",
      "product": "End Cap Left Black Aluminum 5"
   },
   {
      "location": "7560",
      "product": "End Cap Right Black Aluminum 5"
   },
   {
      "location": "7560",
      "product": "Downpipe Strap Black 2x3"
   },
   {
      "location": "7560",
      "product": "End Cap Right Black Aluminum 4"
   },
   {
      "location": "7560",
      "product": "Gutter Hanger Milled Finish 4"
   },
   {
      "location": "7560",
      "product": "Gutter Outet White 2x3"
   },
   {
      "location": "7560",
      "product": "Downpipe Strap White 2x3"
   },
   {
      "location": "7560",
      "product": "End Cap Right White Aluminum 4"
   },
   {
      "location": "7560",
      "product": "Corner Outside White Aluminum"
   },
   {
      "location": "7560",
      "product": "End Cap Left Black Aluminum 4"
   },
   {
      "location": "7561",
      "product": "2x2 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7561",
      "product": "2x3 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7561",
      "product": "2x4 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7561",
      "product": "2x6 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7561",
      "product": "2x8 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Casing - 11/16x2-1/2 R"
   },
   {
      "location": "7562",
      "product": "Hemlock Casing - 1/2x1-1/2 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Casing - 1/2x2-1/4 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Quarter Round - 1/2x1/"
   },
   {
      "location": "7562",
      "product": "Hemlock Quarter Round - 11/16x"
   },
   {
      "location": "7562",
      "product": "Hemlock Half Round - 3/8x3/4 R"
   },
   {
      "location": "7562",
      "product": "Hemlock Full Round - 1/2 R/L ("
   },
   {
      "location": "7562",
      "product": "Hemlock Full Round - 11/16 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Full Round - 1-1/16 R/"
   },
   {
      "location": "7562",
      "product": "Hemlock Full Round - 1-5/16 R/"
   },
   {
      "location": "7562",
      "product": "Hemlock Full Round - 1-1/2 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Crown - 3/8x1/2 R/L (M"
   },
   {
      "location": "7562",
      "product": "Hemlock Crown - 1/2x3/4 R/L (M"
   },
   {
      "location": "7562",
      "product": "Hemlock Crown - 5/8x1-1/4 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Crown - 1-3/16x2-1/4 R"
   },
   {
      "location": "7562",
      "product": "Hemlock Cove - 1/2x1/2 R/L (MH"
   },
   {
      "location": "7562",
      "product": "Hemlock Cove - 11/16x11/16 R/L"
   },
   {
      "location": "7562",
      "product": "Hemlock Corner - 1-1/16x1-1/16"
   },
   {
      "location": "7562",
      "product": "Hemlock Corner - 11/16x11/16 R"
   },
   {
      "location": "7562",
      "product": "Hemlock Shoe Base - 1/2x3/4 R/"
   },
   {
      "location": "7562",
      "product": "Hemlock Cove - 1-1/16x1-1/16x8"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Window Stool-"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Window Stool-"
   },
   {
      "location": "7562",
      "product": "Hemlock Door Stop - 3/8x1-1/4"
   },
   {
      "location": "7562",
      "product": "Hemlock Hand Rail - 1-1/8x2-1/"
   },
   {
      "location": "7562",
      "product": "Hemlock Hand Rail - 1-1/2x1-1/"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Door Jamb 4-9/"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Door Jamb- 1-3"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Door Jamb- 1-3"
   },
   {
      "location": "7562",
      "product": "Primed Pine F/J Door Jamb - 1-"
   },
   {
      "location": "7562",
      "product": "Ram Jamb Door Protect 60"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing - 5/8x2"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Wainscot Cap -"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing - 7/16x"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing - 3/8x2"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard - 11"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard- 7/1"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard- 11/"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing - 11/16"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Quarter Round-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Quarter Round-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 3/8x5/8"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 1/2x11/"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 5/8x1-3"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 1-3/16x"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Cove- 11/16x11"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Screen Mould-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Panel Mould- 3"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Panel Mould- 7"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Shoe Base- 1/2"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Burlap- 5/16x1"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Burlap- 7/16x2"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Door Stop- 3/8"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing - 7/16x"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Panel Mould- 3"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Casing- 7/16x3"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 9/16x4-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 9/16x3-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Crown- 9/16x2-"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard- 7/1"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard- 7/1"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard - 7/"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Baseboard- 9/1"
   },
   {
      "location": "7563",
      "product": "Primed Pine F/J Door Stop - 3/"
   },
   {
      "location": "7564",
      "product": "Ultralight Panel Mould - 7/16x"
   },
   {
      "location": "7564",
      "product": "Ultralight Baseboard - 9/16x7-"
   },
   {
      "location": "7564",
      "product": "Ultralight Chair Rail - 11/16x"
   },
   {
      "location": "7564",
      "product": "Primed Pine F/J Panel Mould- 3"
   },
   {
      "location": "7564",
      "product": "Ultralight Panel Mould - 3/4x1"
   },
   {
      "location": "7564",
      "product": "Ultralight Casing - 11/16x 3-1"
   },
   {
      "location": "7564",
      "product": "Ultralight Crown - 1-3/16x6-5/"
   },
   {
      "location": "7564",
      "product": "Ultralight Casing - 11/16x3-1/"
   },
   {
      "location": "7564",
      "product": "Ultralight Architrave - 1-3/16"
   },
   {
      "location": "7564",
      "product": "Ultralight Crown - 9/16x5-1/4x"
   },
   {
      "location": "7564",
      "product": "Ultralight Casing - 3/4x3-1/2X"
   },
   {
      "location": "7564",
      "product": "Ultralight Baseboard - 9/16x5-"
   },
   {
      "location": "7564",
      "product": "Ultralight Baseboard - 5/8x7-1"
   },
   {
      "location": "7564",
      "product": "Ultralight Crown - 1-3/16x5-1/"
   },
   {
      "location": "7564",
      "product": "Ultralight Crown - 1-3/16x6-3/"
   },
   {
      "location": "7564",
      "product": "Ultralight Casing - 5/8x3x16'"
   },
   {
      "location": "7564",
      "product": "Ultralight Casing - 5/8x3-1/2x"
   },
   {
      "location": "7564",
      "product": "Ultralight Baseboard - 1/2x5x1"
   },
   {
      "location": "7564",
      "product": "Ultralight Baseboard - 1/2x6-1"
   },
   {
      "location": "7565",
      "product": "Flashing Galvanized 6x50' Roll"
   },
   {
      "location": "7565",
      "product": "Flashing Milled Aluminum 9x50'"
   },
   {
      "location": "7565",
      "product": "Flashing White/Brown Aluminum"
   },
   {
      "location": "7565",
      "product": "Flashing Black/Charcoal Alumin"
   },
   {
      "location": "7565",
      "product": "Flashing Black/Charcoal Alumin"
   },
   {
      "location": "7565",
      "product": "Flashing White/Brown Aluminum"
   },
   {
      "location": "7565",
      "product": "Flashing White/Brown Aluminum"
   },
   {
      "location": "7565",
      "product": "Flashing Step White 3X4X10"
   },
   {
      "location": "7565",
      "product": "Flashing Step Black 3X4X10"
   },
   {
      "location": "7565",
      "product": "Flashing Step Galvanized 3X4X1"
   },
   {
      "location": "7566",
      "product": "Bead O/S Corner Paper 8' Round"
   },
   {
      "location": "7566",
      "product": "Bead Corner O/S Paper 8' Off A"
   },
   {
      "location": "7566",
      "product": "Soffit Strip Black Aluminum 8'"
   },
   {
      "location": "7566",
      "product": "Carry Channel 1-1/2x12' 18ga"
   },
   {
      "location": "7566",
      "product": "Resilient Channel 1/2X12'"
   },
   {
      "location": "7566",
      "product": "Steel Stud 2'x4'x8' 25ga"
   },
   {
      "location": "7566",
      "product": "Steel Stud 2'x4'x10' 25ga"
   },
   {
      "location": "7566",
      "product": "Steel Track 2'x4'x10' 25ga"
   },
   {
      "location": "7566",
      "product": "Bead Plastic J 1/2x8' Drywall"
   },
   {
      "location": "7566",
      "product": "Bead Metal Gyproc Corner 8'"
   },
   {
      "location": "7566",
      "product": "Bead Metal J 1/2x10'"
   },
   {
      "location": "7566",
      "product": "Bead Metal L 1/2x8'"
   },
   {
      "location": "7566",
      "product": "Bead Metal L 1/2x10'"
   },
   {
      "location": "7566",
      "product": "Strip Soffit White Vinyl 8'"
   },
   {
      "location": "7566",
      "product": "Strip Soffit Black Vinyl 8' (2"
   },
   {
      "location": "7566",
      "product": "Strip Soffit Brown Vinyl 8'"
   },
   {
      "location": "7566",
      "product": "Bead O/S Corner Paper 8'"
   },
   {
      "location": "7566",
      "product": "Bead Corner L Paper  8'"
   },
   {
      "location": "7566",
      "product": "Bead Metal J 5/8x10'"
   },
   {
      "location": "7566",
      "product": "Soffit Strip White Aluminum 8'"
   },
   {
      "location": "7566",
      "product": "13/16X2 Perf Metal J Channel 1"
   },
   {
      "location": "7566",
      "product": "1/2X2 Perf J Channel 10' Metal"
   },
   {
      "location": "7566",
      "product": "Vinyl Hardi Starter Strip 1/2X"
   },
   {
      "location": "7566",
      "product": "Bead O/S Corner Paper 10'"
   },
   {
      "location": "7566",
      "product": "Bead I/S Corner Paper 8'"
   },
   {
      "location": "7566",
      "product": "Strip Reveal with 5/16 Bevel B"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black 3X1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip Brown 3X1"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black 3X1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip Black 3X1"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip White 3X1"
   },
   {
      "location": "7567",
      "product": "Flashing Deck Brown 1-3/4X10'"
   },
   {
      "location": "7567",
      "product": "Flashing Deck Black 1-3/4X10'"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip Black 3X1"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip White 3X1"
   },
   {
      "location": "7567",
      "product": "Flashing Deck White 1-3/4X10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' White 2x2x10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Brown 2x2x10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Galvanized 2x2x10"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Brown 3x3 x 10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Black 3x3x10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Galvanized 3x3x10"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' White 4x4x10'"
   },
   {
      "location": "7567",
      "product": "Flashing 'L' Brown 4x4x10'"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White 3x7/8x"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black with S"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip Cap Black"
   },
   {
      "location": "7567",
      "product": "Flashing Double Drip Cap Black"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Brown 3X7/8"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Galvanized 3"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White 3x1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White 3X1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Brown 3X1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Brown with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Brown 3X1-1/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Galvanized 3"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap White 3X1-3/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black 3X1-3/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Brown 3X1-3/"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Galvanized 3"
   },
   {
      "location": "7567",
      "product": "Flashing Firestop 30 Guage Gal"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black with S"
   },
   {
      "location": "7567",
      "product": "Flashing Drip Cap Black 3X7/8"
   },
   {
      "location": "7568",
      "product": "Insulation ISO Board 3 4X8 17."
   },
   {
      "location": "7568",
      "product": "Drywall Aqua Board 4'X8'X1/2"
   },
   {
      "location": "7568",
      "product": "Drywall Regular 4'X10'X1/2"
   },
   {
      "location": "7568",
      "product": "Drywall Regular 4'X8'X1/2"
   },
   {
      "location": "7568",
      "product": "Drywall Firestop Type X 4'X8'X"
   },
   {
      "location": "7568",
      "product": "Insulation ISO Board 2 4X8   R"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Door Prehung Hollow Core Hard"
   },
   {
      "location": "7568",
      "product": "Denshield 4'X8'1/2 (R/Value .4"
   },
   {
      "location": "7568",
      "product": "Densglass Gold 4'X8'X5/8 (R/Va"
   },
   {
      "location": "7569",
      "product": "Sawhorse Folding Drywall Ladde"
   },
   {
      "location": "7569",
      "product": "Ladder Fiberglass Step 8'"
   },
   {
      "location": "7569",
      "product": "Ladder Fiberglass Step 10'"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Ladder Fiberglass Step 6'"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Ladder Extension Aluminum Grad"
   },
   {
      "location": "7569",
      "product": "Sawhorse Folding Drywall Ladde"
   },
   {
      "location": "7569",
      "product": "Wall Jack Orange (Single)"
   },
   {
      "location": "7570",
      "product": "1x6 Shiplap 1/8 Gap S4S Primed"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R12X"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R20X"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R28X"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R28X"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R40X"
   },
   {
      "location": "7570",
      "product": "Insulation Fiberglass Bag R40X"
   },
   {
      "location": "7570",
      "product": "Carry Channel 1-1/2x12' 18ga"
   },
   {
      "location": "7570",
      "product": "Powerwool Rigiboard 1 (1.5x2'x"
   },
   {
      "location": "7570",
      "product": "Powerwool Rigiboard 1 (2x2'x4'"
   },
   {
      "location": "7570",
      "product": "Insulation Roxul/Rockwool R14X"
   },
   {
      "location": "7570",
      "product": "Insulation Roxul/Rockwool R22X"
   },
   {
      "location": "7570",
      "product": "Insulation Roxul/Rockwool R28X"
   },
   {
      "location": "7570",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7570",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7571",
      "product": "3/8 Fir U-Lay Plywood 4x8"
   },
   {
      "location": "7571",
      "product": "7/16 Donnacona Plain"
   },
   {
      "location": "7571",
      "product": "1/2 G2S Oak plywood 4x8"
   },
   {
      "location": "7571",
      "product": "1/2 G2S Birch Plywood 4x8"
   },
   {
      "location": "7571",
      "product": "3/4 G2S Birch Plywood 4x8"
   },
   {
      "location": "7571",
      "product": "1/2 FIRE Treated Standard Plyw"
   },
   {
      "location": "7571",
      "product": "3/4 FIRE Treated Standard Plyw"
   },
   {
      "location": "7571",
      "product": "5/8 FIRE Treated Standard Plyw"
   },
   {
      "location": "7572",
      "product": "1/2 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7572",
      "product": "1/2 G1S Pine Plywood 4x8"
   },
   {
      "location": "7572",
      "product": "1/4 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7572",
      "product": "3/4 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7572",
      "product": "5/8 G1S Fir 4x8 Plywood"
   },
   {
      "location": "7572",
      "product": "1/2 MDO One side 4x8 Crezone"
   },
   {
      "location": "7572",
      "product": "3/4 MDO One side 4x8 Crezone"
   },
   {
      "location": "7572",
      "product": "3/8 MDO One side 4x8 Crezone"
   },
   {
      "location": "7572",
      "product": "3/4 G1S Pine Plywood 4x8"
   },
   {
      "location": "7573",
      "product": "Drywall Regular 4'X8'X1/2"
   },
   {
      "location": "7573",
      "product": "1 Ultra Lite Medite 4x8"
   },
   {
      "location": "7573",
      "product": "1/2 Medite 4x8"
   },
   {
      "location": "7573",
      "product": "1/4 Medite 4x8"
   },
   {
      "location": "7573",
      "product": "3/4 Medite 4x8"
   },
   {
      "location": "7573",
      "product": "3/8 Medite 4x8"
   },
   {
      "location": "7573",
      "product": "7/16 Donnacona Plain"
   },
   {
      "location": "7573",
      "product": "4'x8' Mahogany 1/8 280/pk"
   },
   {
      "location": "7573",
      "product": "3/4 Ultra Lite Medite 4x8"
   },
   {
      "location": "7573",
      "product": "3/4 Medex 4x8"
   },
   {
      "location": "7573",
      "product": "1/2 Ultra Lite Medite 4x8"
   },
   {
      "location": "7574",
      "product": "Insulation Fiberglass Bag R12X"
   },
   {
      "location": "7574",
      "product": "Insulation Fiberglass Bag R20X"
   },
   {
      "location": "7574",
      "product": "Insulation Fiberglass Bag R14X"
   },
   {
      "location": "7574",
      "product": "Insulation Roxul/Rockwool 16 S"
   },
   {
      "location": "7574",
      "product": "Insulation Roxul/Rockwool R22X"
   },
   {
      "location": "7575",
      "product": "Wheelbarrow 6Cu Ft Flat Free C"
   },
   {
      "location": "7575",
      "product": "Trash Can With Lid  Black Poly"
   },
   {
      "location": "7575",
      "product": "Wheelbarrow 6Cu Ft Fort/Terra"
   },
   {
      "location": "7575",
      "product": "Trash Can Brute/Terratuff  GRE"
   },
   {
      "location": "7576",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7576",
      "product": "1X10 R/F STK Cedar Channel Sid"
   },
   {
      "location": "7576",
      "product": "1x10 R/F STK Cedar Haida Skirl"
   },
   {
      "location": "7576",
      "product": "1x12 R/F STK  Cedar Haida Skir"
   },
   {
      "location": "7576",
      "product": "1/2x4 S/F Clear KD Cedar Bevel"
   },
   {
      "location": "7576",
      "product": "1/2x4 S/F Clear KD Cedar T&G V"
   },
   {
      "location": "7576",
      "product": "1/2x6 S/F Clear KD Cedar F/J B"
   },
   {
      "location": "7576",
      "product": "1x4 S/F Clear KD Cedar T&G V/J"
   },
   {
      "location": "7576",
      "product": "1x4 Hemlock KD VG Clear T&G S/"
   },
   {
      "location": "7576",
      "product": "5/8x4 S/F STK KD Cedar Rabbitt"
   },
   {
      "location": "7576",
      "product": "1x4 S/F STK KD WRC T&G V-Joint"
   },
   {
      "location": "7576",
      "product": "1x5 Hemlock KD VG Clear T&G S/"
   },
   {
      "location": "7576",
      "product": "1x6 R/F STK Cedar Bevel Siding"
   },
   {
      "location": "7576",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7576",
      "product": "1x6 S/F Clear KD Cedar T&G V/J"
   },
   {
      "location": "7576",
      "product": "1X6 R/F STK KD Cedar Drop Sidi"
   },
   {
      "location": "7576",
      "product": "1x6 S/F STK KD Cedar T&G V/J R"
   },
   {
      "location": "7576",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7576",
      "product": "1x8 R/F STK KD Cedar Bevel Sid"
   },
   {
      "location": "7576",
      "product": "1x8 R/F STK KD Cedar Channel S"
   },
   {
      "location": "7576",
      "product": "1X8 R/F STK Cedar Center Ploug"
   },
   {
      "location": "7576",
      "product": "1X8 S/F STK KD Cedar Doublebev"
   },
   {
      "location": "7576",
      "product": "1x4 KD 2Com Pine Vj R/L (6 PER"
   },
   {
      "location": "7576",
      "product": "1x4 KD 2Com Pine Vj Primed R/L"
   },
   {
      "location": "7576",
      "product": "1X6 Primed Pine T&G R/L (6 PER"
   },
   {
      "location": "7576",
      "product": "1X6 KD Select/Knot Pine V/J R/"
   },
   {
      "location": "7577",
      "product": "1X10 R/F Low Grade Cedar Bevel"
   },
   {
      "location": "7577",
      "product": "Tyvek 9'X100' = 900 Sf"
   },
   {
      "location": "7577",
      "product": "Sonotube 6X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 8X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 10X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 12X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 14X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 16X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 18X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 24X12'"
   },
   {
      "location": "7577",
      "product": "Sonotube 20X12'"
   },
   {
      "location": "7577",
      "product": "Tyvek Commercial 10'X125'"
   },
   {
      "location": "7577",
      "product": "Typar 9' X 100' = 900 Sf"
   },
   {
      "location": "7578",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7578",
      "product": "1x4 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7578",
      "product": "1x6 R/F STK Cedar Bevel Siding"
   },
   {
      "location": "7578",
      "product": "1x6 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7578",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7578",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7578",
      "product": "1x8 R/F STK KD Cedar Bevel Sid"
   },
   {
      "location": "7578",
      "product": "2x4 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7578",
      "product": "2x6 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7579",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7579",
      "product": "1/2x4 S/F Clear KD Cedar Bevel"
   },
   {
      "location": "7579",
      "product": "1x4 KD S4S Clear Cedar R/L"
   },
   {
      "location": "7579",
      "product": "1x4 S/F Clear KD Cedar T&G V/J"
   },
   {
      "location": "7579",
      "product": "1x4 Hemlock KD VG Clear T&G S/"
   },
   {
      "location": "7579",
      "product": "1x5 Hemlock KD VG Clear T&G S/"
   },
   {
      "location": "7579",
      "product": "1x6 S/F Clear KD Cedar T&G V/J"
   },
   {
      "location": "7579",
      "product": "1x8 R/F STK KD Cedar Channel S"
   },
   {
      "location": "7581",
      "product": "1x10 R/F STK Cedar Haida Skirl"
   },
   {
      "location": "7581",
      "product": "1x12 R/F STK  Cedar Haida Skir"
   },
   {
      "location": "7581",
      "product": "1x4 Fir Floor T&G VG Clear R/L"
   },
   {
      "location": "7582",
      "product": "Sonotube 6X12'"
   },
   {
      "location": "7582",
      "product": "Sonotube 10X12'"
   },
   {
      "location": "7582",
      "product": "Sonotube 12X12'"
   },
   {
      "location": "7582",
      "product": "Sonotube 14X12'"
   },
   {
      "location": "7582",
      "product": "Sonotube 20X12'"
   },
   {
      "location": "7582",
      "product": "Stair Treads Sturdi Wood 1x11-"
   },
   {
      "location": "7583",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7583",
      "product": "1x4 S/F Clear KD Cedar T&G V/J"
   },
   {
      "location": "7583",
      "product": "1x4 S/F STK KD WRC T&G V-Joint"
   },
   {
      "location": "7583",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7583",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7583",
      "product": "1x4 KD 2Com Pine Vj Primed R/L"
   },
   {
      "location": "7584",
      "product": "1/2x4 S/F Clear KD Cedar T&G V"
   },
   {
      "location": "7584",
      "product": "1x4 S/F STK KD WRC T&G V-Joint"
   },
   {
      "location": "7584",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7584",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7584",
      "product": "1X6 Primed Pine T&G R/L (6 PER"
   },
   {
      "location": "7584",
      "product": "2X6 T&G SEL KD SP DECK 10"
   },
   {
      "location": "7585",
      "product": "5/8x4 S/F STK KD Cedar Rabbitt"
   },
   {
      "location": "7585",
      "product": "1x4 S/F STK KD WRC T&G V-Joint"
   },
   {
      "location": "7585",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7585",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7585",
      "product": "1x8 R/F STK KD Cedar Channel S"
   },
   {
      "location": "7585",
      "product": "1X8 R/F STK Cedar Center Ploug"
   },
   {
      "location": "7585",
      "product": "1x4 KD 2Com Pine Vj Primed R/L"
   },
   {
      "location": "7585",
      "product": "1X6 Primed Pine T&G R/L (6 PER"
   },
   {
      "location": "7586",
      "product": "Wheelbarrow 6Cu Ft Flat Free C"
   },
   {
      "location": "7586",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7586",
      "product": "1x6 S/F STK KD Cedar T&G V/J R"
   },
   {
      "location": "7586",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7586",
      "product": "1X8 R/F STK Cedar Center Ploug"
   },
   {
      "location": "7587",
      "product": "1/2x4 S/F Clear KD Cedar T&G V"
   },
   {
      "location": "7587",
      "product": "1/2x6 S/F Clear KD Cedar F/J B"
   },
   {
      "location": "7587",
      "product": "1X6 R/F STK GRN Cedar Channel"
   },
   {
      "location": "7587",
      "product": "1X6 R/F STK KD Cedar Drop Sidi"
   },
   {
      "location": "7587",
      "product": "1x6 S/F STK KD Cedar T&G V/J R"
   },
   {
      "location": "7587",
      "product": "1X6 R/F STK Cedar Shiplap Sidi"
   },
   {
      "location": "7587",
      "product": "1x8 R/F STK KD Cedar Bevel Sid"
   },
   {
      "location": "7587",
      "product": "1X8 R/F STK Cedar Center Ploug"
   },
   {
      "location": "7587",
      "product": "1X6 Primed Pine T&G R/L (6 PER"
   },
   {
      "location": "7588",
      "product": "18 #1 Cedar Roofing Shingle"
   },
   {
      "location": "7588",
      "product": "24 #1 Medium Resaw Shake"
   },
   {
      "location": "7588",
      "product": "Road Salt 20kg/44lb"
   },
   {
      "location": "7588",
      "product": "Road Salt 10kg/22lb"
   },
   {
      "location": "7588",
      "product": "18 #2 Cedar Roofing Shingle"
   },
   {
      "location": "7588",
      "product": "18 #3 Cedar Roofing Shingle"
   },
   {
      "location": "7588",
      "product": "18 #4 Cedar Roofing Shingle"
   },
   {
      "location": "7588",
      "product": "Ice Melter 9/10kg"
   },
   {
      "location": "7588",
      "product": "18 #1 R&R Sidewall Shingle (BL"
   },
   {
      "location": "7588",
      "product": "Cedar Shim Shingles Bundle"
   },
   {
      "location": "7588",
      "product": "18 Cedar Ridge Cap Bundle"
   },
   {
      "location": "7588",
      "product": "24 Cedar Ridge Cap Bundle"
   },
   {
      "location": "7588",
      "product": "18 #1 Primed (Grey) R&R Sidewa"
   },
   {
      "location": "7588",
      "product": "Ice Melter 18/20kg"
   },
   {
      "location": "7601",
      "product": "Ultralight NAUF 1/2x4"
   },
   {
      "location": "7601",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7601",
      "product": "1 Std Fir T&G 4X8 Plywood"
   },
   {
      "location": "7601",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7601",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7601",
      "product": "3/4 *T&G* Std Fir 4X8 Plywood"
   },
   {
      "location": "7601",
      "product": "5/8 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7601",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7601",
      "product": "23/32 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7601",
      "product": "4'X8' Mahogany 1/4 *FSC* Certi"
   },
   {
      "location": "7601",
      "product": "Primed Pine F/J Window Sill -"
   },
   {
      "location": "7601",
      "product": "Ultralight - 1/2x11-1/4x16' (M"
   },
   {
      "location": "7601",
      "product": "Ultralight Nauf Casing - 9/16x"
   },
   {
      "location": "7601",
      "product": "6'X8' Fence Panel Solid (actua"
   },
   {
      "location": "7601",
      "product": "***INDUSTRIAL***l 17.5 Crown 4"
   },
   {
      "location": "7601",
      "product": "Powerwool Rigiboard 1 (1.5x2'x"
   },
   {
      "location": "7601",
      "product": "Powerwool Rigiboard 1 (2x2'x4'"
   },
   {
      "location": "7601",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7601",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7601",
      "product": "1x4 S4S KD SPF Gorman/Canfor W"
   },
   {
      "location": "7602",
      "product": "17.5mm Crown 43 4x8 MDO Paper"
   },
   {
      "location": "7602",
      "product": "2X4 S4S 2&Btr KD Fir 18"
   },
   {
      "location": "7602",
      "product": "2X4 S4S 2&Btr KD Fir 20"
   },
   {
      "location": "7602",
      "product": "2X6 S4S 2&Btr KD Fir 10"
   },
   {
      "location": "7602",
      "product": "2X4 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7602",
      "product": "2x4 S4S 2&BTR KD SPF 116-1/4"
   },
   {
      "location": "7602",
      "product": "2x4 S4S 2&Btr KD SPF 88"
   },
   {
      "location": "7602",
      "product": "2X6 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7602",
      "product": "2X6 S4S 2&Btr KD SPF 116-1/4"
   },
   {
      "location": "7602",
      "product": "2x6 S4S 2&Btr KD SPF 88"
   },
   {
      "location": "7602",
      "product": "2x6 S4S 2&BTR KD SPF 97-1/2"
   },
   {
      "location": "7603",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7603",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7603",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7603",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7604",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7604",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7604",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7605",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7605",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7605",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7605",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7605",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7605",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7606",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7606",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7606",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7606",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7606",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7606",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7606",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7607",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7607",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7607",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7607",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7607",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7607",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7608",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7608",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7608",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7608",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7608",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7609",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7609",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7609",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7609",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7610",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7610",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7610",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7611",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7611",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7612",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7612",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7612",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7612",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7612",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7612",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7613",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7613",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7613",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7613",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7613",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7614",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7614",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7614",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7614",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7614",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7614",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7615",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7615",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7615",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7615",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7615",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7615",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7616",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7616",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7616",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7616",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7616",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7616",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7617",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7617",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7617",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7617",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7617",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7617",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7618",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7618",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7618",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7618",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7618",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7618",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7619",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7619",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7619",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7619",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7619",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7619",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7620",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7620",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7620",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7620",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7620",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7620",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7621",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7621",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7621",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7621",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7621",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7621",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7622",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7622",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7622",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7622",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7622",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7622",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7623",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7623",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7623",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7623",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7623",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7623",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Natural Roc"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7624",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7624",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7624",
      "product": "4X6 S4S 2&Btr Grn Fir 20"
   },
   {
      "location": "7625",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7625",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7625",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7625",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7625",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7625",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7625",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7625",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7625",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7625",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7625",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7626",
      "product": "Insulation Rigid 1.5 2X8 Type"
   },
   {
      "location": "7626",
      "product": "Insulation Rigid 2 2x8 Type 3"
   },
   {
      "location": "7626",
      "product": "Insulation Rigid 3 2X8 Type 3"
   },
   {
      "location": "7626",
      "product": "Insulation Rigid 4 2X8 Type 4"
   },
   {
      "location": "7626",
      "product": "2X4 S4S Std&Btr Grn Fir 12"
   },
   {
      "location": "7626",
      "product": "4X6 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7626",
      "product": "4X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7626",
      "product": "4X6 S4S 2&Btr Grn Fir 22"
   },
   {
      "location": "7626",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7626",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7626",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7627",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7627",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7627",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7628",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7628",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7628",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7629",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7629",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7629",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7630",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7630",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7630",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7631",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7631",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7631",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7632",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7632",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7632",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7633",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7634",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7634",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7634",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7635",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7635",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7635",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7636",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7636",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7636",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7637",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7637",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7638",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7638",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7638",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7639",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7639",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7639",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7640",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7640",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7641",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7641",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7642",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7642",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7642",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7642",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7643",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7643",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7644",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7644",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7645",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7645",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7646",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7646",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7647",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7647",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7648",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7648",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7649",
      "product": "Trex 5/4x6 Enhance Natural Roc"
   },
   {
      "location": "7649",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7649",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7650",
      "product": "Trex 5/4x6 Enhance Natural Roc"
   },
   {
      "location": "7650",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7650",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7650",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7651",
      "product": "Trex 5/4x6 Enhance Natural Roc"
   },
   {
      "location": "7651",
      "product": "Trex 5/4x6 Enhance Natural Toa"
   },
   {
      "location": "7651",
      "product": "Trex 5/4x6 Enhance Basic Clam"
   },
   {
      "location": "7652",
      "product": "TimberTech 5/4X6 Terrain Plus"
   },
   {
      "location": "7652",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7652",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7653",
      "product": "Timbertech 5/4x6 Terrain Silve"
   },
   {
      "location": "7653",
      "product": "TimberTech 5/4X6 Terrain Plus"
   },
   {
      "location": "7653",
      "product": "TimberTech 5/4X6 Terrain Plus"
   },
   {
      "location": "7653",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7653",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7654",
      "product": "Timbertech 5/4x6 Terrain Silve"
   },
   {
      "location": "7654",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7654",
      "product": "TimberTech 5/4X6 Edge Prime Pl"
   },
   {
      "location": "7655",
      "product": "15/32 OSB 4x10"
   },
   {
      "location": "7655",
      "product": "2X4 S4S 2&Btr KD Fir 104-1/4"
   },
   {
      "location": "7655",
      "product": "2X6 S4S 2&Btr KD Fir 104-1/4"
   },
   {
      "location": "7655",
      "product": "2X4 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7655",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7655",
      "product": "2X4 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7655",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7656",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7656",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7657",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7657",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7657",
      "product": "Parallam PSL 5-1/4 x 14 2.2E"
   },
   {
      "location": "7657",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7657",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7658",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7658",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7658",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7658",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7658",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7658",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7658",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7659",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7659",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7659",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7659",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7659",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7659",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7659",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7660",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7660",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7660",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7660",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7660",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7660",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7660",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7660",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7661",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7661",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7661",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7661",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7661",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7661",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7661",
      "product": "Microllam LVL 1-3/4 x 9-1/4 2."
   },
   {
      "location": "7662",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7662",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7662",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7662",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7662",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7662",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7662",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7663",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7663",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7663",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7663",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7663",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7663",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7664",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7664",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7664",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7664",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7664",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7664",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7664",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7665",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7665",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7665",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7665",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7665",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7666",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7666",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7666",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7666",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7666",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7666",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7666",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7667",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7667",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7667",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7667",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7667",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7667",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7667",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7667",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7668",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7668",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7668",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7668",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7669",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7669",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7669",
      "product": "Parallam Column 3-1/2 x 7 1.8E"
   },
   {
      "location": "7669",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7669",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7669",
      "product": "Parallam Column 5-1/4 x 7 1.8E"
   },
   {
      "location": "7669",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7669",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7669",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7670",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7670",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7670",
      "product": "Parallam Column 3-1/2 x 7 1.8E"
   },
   {
      "location": "7670",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7670",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7670",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7670",
      "product": "Parallam Column 5-1/4 x 7 1.8E"
   },
   {
      "location": "7670",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7670",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7671",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7671",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7671",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7671",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7672",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7672",
      "product": "Parallam Column 3-1/2 x 7 1.8E"
   },
   {
      "location": "7672",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7672",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7672",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7672",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7672",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7672",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7673",
      "product": "Parallam Column 3-1/2 x 7 1.8E"
   },
   {
      "location": "7674",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7674",
      "product": "Parallam Column 5-1/4 x 7 1.8E"
   },
   {
      "location": "7674",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7675",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7675",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7675",
      "product": "Parallam Column 5-1/4 x 7 1.8E"
   },
   {
      "location": "7676",
      "product": "Parallam PSL 3-1/2 x 9-1/4 2.2"
   },
   {
      "location": "7676",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7676",
      "product": "Parallam Column 5-1/4 x 7 1.8E"
   },
   {
      "location": "7676",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7676",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7676",
      "product": "Parallam PSL 7 x 9-1/4 2.2E"
   },
   {
      "location": "7701",
      "product": "Insulation Rigid 1 2X8 Type 3"
   },
   {
      "location": "7701",
      "product": "Drywall Firestop Type X 4'X8'X"
   },
   {
      "location": "7701",
      "product": "1x10 R/F STK KD Cedar Bevel Si"
   },
   {
      "location": "7701",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7701",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7701",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7701",
      "product": "Ultralight 1x8 - 11/16x7-1/4x1"
   },
   {
      "location": "7701",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7701",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7701",
      "product": "Poly UV Clear 10'X100' 6 mil"
   },
   {
      "location": "7701",
      "product": "Rebar 10mm X 10'  (same as 1/2"
   },
   {
      "location": "7701",
      "product": "Rebar 10mm X 20' (same as 1/2)"
   },
   {
      "location": "7701",
      "product": "Rebar 15mm X 20'  (same as 5/8"
   },
   {
      "location": "7701",
      "product": "1/8 Oroboard (MDF) 4x8"
   },
   {
      "location": "7701",
      "product": "3/4 FIRE Treated Standard Plyw"
   },
   {
      "location": "7701",
      "product": "Flashing Drip Cap White 3X1-3/"
   },
   {
      "location": "7701",
      "product": "Flashing Firestop 30 Guage Gal"
   },
   {
      "location": "7701",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7701",
      "product": "Sweep Compound Dustbane Drum 3"
   },
   {
      "location": "7701",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7701",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7701",
      "product": "Fence Barrier Orange 4'x50'"
   },
   {
      "location": "7701",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7701",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7701",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7701",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7701",
      "product": "4X6 S4S 2&Btr Grn Fir 12"
   },
   {
      "location": "7701",
      "product": "6X6 S4S 2&Btr Grn Fir 10"
   },
   {
      "location": "7701",
      "product": "2X12 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7701",
      "product": "2X12 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&Btr KD Fir 12"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&Btr KD Fir 16"
   },
   {
      "location": "7701",
      "product": "4X4 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7701",
      "product": "4'X4' Rough Treated H/F 12'"
   },
   {
      "location": "7701",
      "product": "6X6 Rough 2&Btr Treated H/F 12"
   },
   {
      "location": "7701",
      "product": "2X10 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7701",
      "product": "2X10 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7701",
      "product": "2X10 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7701",
      "product": "2X10 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7701",
      "product": "2X12 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7701",
      "product": "2X4 S4S 2&BTR KD SPF 92-1/4"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&BTR KD SPF 104-1/4"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7701",
      "product": "2X6 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7701",
      "product": "2X8 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7701",
      "product": "2X8 S4S 2&Btr KD SPF 104-1/4"
   },
   {
      "location": "7701",
      "product": "2X8 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7701",
      "product": "1X4 S4S Util&Btr Grn SPF 12"
   },
   {
      "location": "7701",
      "product": "1x6 Primed Comb Fascia 16'"
   },
   {
      "location": "7701",
      "product": "2x10 Primed Comb Fascia 12'"
   },
   {
      "location": "7701",
      "product": "2x10 Primed S4S App Fascia 16'"
   },
   {
      "location": "7701",
      "product": "2x4 Primed S4S App Fascia 16'"
   },
   {
      "location": "7701",
      "product": "2x6 Primed S4S App Fascia 16'"
   },
   {
      "location": "7701",
      "product": "2x8 Primed S4S App Fascia 16'"
   },
   {
      "location": "7702",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7702",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7702",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7702",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7702",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7702",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7702",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7702",
      "product": "1/2x1-7/8 Treated CCA Plywood"
   },
   {
      "location": "7702",
      "product": "2X6 S4S App Knotty Deck  WRC 1"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7702",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7702",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7702",
      "product": "J Channel Aluminum Trim White"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7702",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7702",
      "product": "Microllam LVL 1-3/4 x 7-1/4 2."
   },
   {
      "location": "7702",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7702",
      "product": "2X6 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7702",
      "product": "2X6 S4S 2&Btr Treated  H/F 16'"
   },
   {
      "location": "7702",
      "product": "2X8 S4S 2&Btr Treated H/F 12'"
   },
   {
      "location": "7702",
      "product": "6'X6' Rough 2&Btr Treated H/F"
   },
   {
      "location": "7702",
      "product": "Pallet Deposit Refundable"
   },
   {
      "location": "7702",
      "product": "1X6 Primed Pine T&G R/L (6 PER"
   },
   {
      "location": "7702",
      "product": "Insulation Roxul/Rockwool 80 C"
   },
   {
      "location": "7702",
      "product": "2X12 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7702",
      "product": "2X12 S4S 2&Btr KD SPF 12"
   },
   {
      "location": "7702",
      "product": "2X12 S4S 2&Btr KD SPF 14"
   },
   {
      "location": "7702",
      "product": "2X12 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7702",
      "product": "2X12 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7702",
      "product": "2X4 S4S 2&Btr KD SPF 08"
   },
   {
      "location": "7702",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7702",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7702",
      "product": "2X6 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7702",
      "product": "2X6 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7702",
      "product": "2x10 Primed Comb Fascia Dado 1"
   },
   {
      "location": "7702",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7702",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7702",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7703",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7703",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7703",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7703",
      "product": "1X3 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7703",
      "product": "1X8 S/F STK KD Cedar Doublebev"
   },
   {
      "location": "7703",
      "product": "1X8 S1S2E #2BTR Cedar 12'"
   },
   {
      "location": "7703",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7703",
      "product": "5/8 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7703",
      "product": "23/32 T&G OSB Edge Gold 4x8"
   },
   {
      "location": "7703",
      "product": "Flashing 'L' Galvanized 2x2x10"
   },
   {
      "location": "7703",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7703",
      "product": "Timberstrand LSL 3-1/2 x 11-7/"
   },
   {
      "location": "7703",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7703",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7703",
      "product": "Parallam Column 5-1/4 x 5-1/4"
   },
   {
      "location": "7703",
      "product": "Parallam PSL 5-1/4 x 9-1/2 2.2"
   },
   {
      "location": "7703",
      "product": "Parallam PSL 7 x 9-1/2 2.2E"
   },
   {
      "location": "7703",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7703",
      "product": "4X4 S4S 2&Btr Grn Fir 08"
   },
   {
      "location": "7703",
      "product": "1X2 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7703",
      "product": "2X10 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7703",
      "product": "2X10 S4S 2&Btr Treated H/F 16'"
   },
   {
      "location": "7703",
      "product": "2X2 S4S 2&Btr Treated H/F 10'"
   },
   {
      "location": "7703",
      "product": "2X4 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7703",
      "product": "Powerwool Rigiboard 1 (1.5x2'x"
   },
   {
      "location": "7703",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7703",
      "product": "TJI 230 Series 9-1/2 I-Joist"
   },
   {
      "location": "7703",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7703",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "7704",
      "product": "Insulation Rigid 3 2X8 Type 3"
   },
   {
      "location": "7704",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7704",
      "product": "Rimboard Timberstrand 1-1/4 x"
   },
   {
      "location": "7704",
      "product": "Microllam LVL 1-3/4 x 11-7/8 2"
   },
   {
      "location": "7704",
      "product": "Timberstrand LSL 1-3/4 x 11-7/"
   },
   {
      "location": "7704",
      "product": "1 Std Fir Sq 4X8 Plywood"
   },
   {
      "location": "7704",
      "product": "1/2 Std Fir 4x8 Plywood"
   },
   {
      "location": "7704",
      "product": "3/4 Std Fir Sq 4x8 Plywood"
   },
   {
      "location": "7704",
      "product": "3/4 *T&G* Std Fir 4X8 Plywood"
   },
   {
      "location": "7704",
      "product": "3/8 Std Fir 4X8 Plywood"
   },
   {
      "location": "7704",
      "product": "5/8  *T&G* Std Fir  4X8 Plywoo"
   },
   {
      "location": "7704",
      "product": "Poly UV Clear 20'X100' 6 mil"
   },
   {
      "location": "7704",
      "product": "Rebar 10mm X 10'  (same as 1/2"
   },
   {
      "location": "7704",
      "product": "Rebar Corner 10mm (1/2) 90deg"
   },
   {
      "location": "7704",
      "product": "1/2 TREATED CCA Plywood 4'X8'"
   },
   {
      "location": "7704",
      "product": "2X6 Rough 2&Btr Cedar 10'"
   },
   {
      "location": "7704",
      "product": "2X8 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7704",
      "product": "Parallam PSL 3-1/2 x 11-7/8 2."
   },
   {
      "location": "7704",
      "product": "Parallam Column 3-1/2 x 7 1.8E"
   },
   {
      "location": "7704",
      "product": "Parallam PSL 3-1/2 x 9-1/2 2.2"
   },
   {
      "location": "7704",
      "product": "Timberstrand LSL 3-1/2 x 9-1/2"
   },
   {
      "location": "7704",
      "product": "4X4 S4S D&Btr Clear Cedar 08'"
   },
   {
      "location": "7704",
      "product": "Parallam PSL 5-1/4 x 11-7/8 2."
   },
   {
      "location": "7704",
      "product": "Parallam PSL 5-1/4 x 9-1/4 2.2"
   },
   {
      "location": "7704",
      "product": "Parallam PSL 7 x 11-7/8 2.2E"
   },
   {
      "location": "7704",
      "product": "Parallam PSL 7 x 14 2.2E"
   },
   {
      "location": "7704",
      "product": "Microllam LVL 1-3/4 x 9-1/2 2."
   },
   {
      "location": "7704",
      "product": "Timberstrand LSL 1-3/4 x 9-1/2"
   },
   {
      "location": "7704",
      "product": "17.5mm Crown 43 4x8 MDO Paper"
   },
   {
      "location": "7704",
      "product": "2X10 S4S 2&Btr Treated H/F 14'"
   },
   {
      "location": "7704",
      "product": "Insulation Roxul/Rockwool R14X"
   },
   {
      "location": "7704",
      "product": "2X4 S4S 2&Btr KD SPF 10"
   },
   {
      "location": "7704",
      "product": "2X4 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7704",
      "product": "2X6 S4S 2&Btr KD SPF 18"
   },
   {
      "location": "7704",
      "product": "2X8 S4S 2&Btr KD SPF 16"
   },
   {
      "location": "7704",
      "product": "2X8 S4S 2&Btr KD SPF 20"
   },
   {
      "location": "7704",
      "product": "2x12 Primed Comb Fascia 16'"
   },
   {
      "location": "7704",
      "product": "TJI 230 Series 11-7/8 I-Joist"
   },
   {
      "location": "7704",
      "product": "TJI 360 Series 11-7/8 I-Joist"
   },
   {
      "location": "7704",
      "product": "TJI 360 Series 9-1/2 I-Joist"
   },
   {
      "location": "7704",
      "product": "TJI 560 Series 11-7/8 I-Joist"
   },
   {
      "location": "7704",
      "product": "TJI 560 Series 9-1/2 I-Joist"
   },
   {
      "location": "8888",
      "product": "simpson strong tie joist angle hanger post sadle hardware"
   },
   {
      "location": "8889",
      "product": "Parallam PSL"
   },
   {
      "location": "8889",
      "product": "Microllam LVL"
   }
]
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



function initonclickrect() {
   let rects = document.querySelectorAll('[id*="rect"]')
   rects.forEach(e => {
      e.addEventListener('click', function (ev) {
         console.log(e.getAttribute('inkscape:label'))
         createpopup(e, ev)
         removename(e.id)
         showname(e.id)
      })
   })
}

function initprodcategory() {
   // let rects = document.querySelectorAll('[id*="rect"]')
   // let title = document.querySelectorAll(`title`)
}

function createBox(texts) {
   var box = document.createElement('div');
   box.className = 'box';
   box.style.left = `${window.scrollX + event.clientX}px`;
   box.style.top = `${window.scrollY + event.clientY}px`;
   let map = document.querySelector('body')
   let ul = document.createElement('ul')
   texts.forEach(c => {
      let li = document.createElement('li')
      let a = document.createElement('a')
      a.innerHTML = c['product']
      a.setAttribute('href', `https://standardbuildingsupplies.ca/catalogsearch/result/?q=${c['product']}`)
      li.appendChild(a)
      ul.appendChild(li)
   })
   box.appendChild(ul)
   map.appendChild(box);
}

function removepopup() {
   let txt = document.querySelectorAll('text').forEach(e => e.remove())
   let b = document.querySelectorAll('.textbacking').forEach(e => e.remove())
   let box = document.querySelectorAll('.box').forEach(e => e.remove())
}

function createpopup(e, ev) {
   removepopup()

   // console.log(id)
   let element = document.getElementById(e.id)
   let parent = document.querySelector('svg')
   //console.log(element.getAttributeNames())
   let list = []
   searchdata.forEach(f => {
      if (f['location'].includes(element.querySelector('title').innerHTML)) {
         list.push(f)
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

function initcurrentlocation() {
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

   // textt.forEach(e => {
   //    NEWproductnames.push(e.split('|'))
   //    let f = e.split('|')
   //    searchdata.push({ 'location': f[0], 'product': f[3] })
   // })
   // console.log(searchdata)
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
   let hasdesc = false
   if (document.querySelector(`g[id='${groupname}'] > desc`)) {
      subproducts = document.querySelector(`g[id='${groupname}'] > desc`).innerHTML.split(',')
      hasdesc = true
   }
   //console.log(subproducts)
   for (let i = 0; i < allelementsh.length; i++) {
      allelementsh[i].classList.remove('highlightgroup')
   }
   if (allli.length == 0) {
      for (let i = 0; i < elements.length; i++) {
         elements[i].classList.add('highlightgroup');
         pan(elements[elements.length - 1])
         if (elements.length <= 4 && elements[i].id != '' && hasdesc == false && elements[i].matches('[id*="rect"]')) {
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
            if (elements.length <= 4 && elements[i].id != '' && hasdesc == false && elements[i].matches('[id*="rect"]')) {
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
   else {

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

      try {
         console.log(location)
         console.log(title.innerHTML)
         if (title.innerHTML != location) {
            allelementsh[i].classList.toggle('highlightgroup')
         }
         if (title.innerHTML == location) {
            pan(allelementsh[i])
            showname(allelementsh[i].id)
         }
      }
      catch (e) {
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
      if (r.tagName == 'path') {
         x = x - ((bb.x + bb.width) - (sbb.width + sbb.x))
         y = y - ((bb.y + bb.height) - (sbb.height + sbb.y))
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
   document.querySelectorAll('circle').forEach(e => {
      if (!e.classList.contains('location') && !e.classList.contains('locationP2') && !e.classList.contains('locationP3')) {
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
         try {
            elmt.setAttributeNS(null, name, o[name]);
            //code that causes an error

         } catch (e) {
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
         pan(rect[rect.length - 1])
      }
      else {
         rect[i].classList.remove('highlightgroup');
      }
   }


}
