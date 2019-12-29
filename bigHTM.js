/*
olHTM.js by joj-the-egg.
this is a javascript library built to increase ability of html by adding features.

    ALPHA-0.10. added functionality for epicDevBlock.
 */
function newThinger() {
 var mHTM = document.getElementById('olHTM').innerHTML;
   if (
   document.getElementById('olHTM').innerHTML.indexOf('epicDevBlock') != -1){
   //searches for custom tag --epicDevBlock--
       var newmHTM = mHTM.replace("epicDevBlock","a href='#' onclick='javascript:alert(newmHTM);'"
       //replaces block name epicDevBlock to an anchor
       var mHTM = newmHTM;
       //i could have made mHTM equal newmHTM in the first place, but safety measures!
   }
   document.write(mHTM);
}
