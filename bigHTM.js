/*
bigHTM.js by joj-the-egg.
this is a javascript library built to increase ability of html by adding features.
to use:

 - if your file is .html (which is recommended), make sure to add a <!DOCTYPE html>.
   then add a <html> tag from beginning to end (excluding DOCTYPE). write everything within this html tag.
   outside of the main html tag, add a script tag to include bigHTM (recommended to use my link: //backspacf.github.io/js/bigHTM.js):
   <script src="(bigHTM source)"></script>


have fun, and don't die. visit me at https://backspacf.github.io

    ALPHA-0.01. all this is is a thing that writes all hyper-text markup out of the script tag. more to come.
 */
function bigHTM(){
  var mHTM = document.getElementById('bigHTM').innerHTML;
  document.write(mHTM);
  alert(mHTM);
};
bigHTM();
