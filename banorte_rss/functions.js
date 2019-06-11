<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function P7_Snap() { //v2.65 by PVII
 var x,y,ox,bx,oy,p,tx,a,b,k,d,da,e,el,tw,q0,xx,yy,w1,pa='px',args=P7_Snap.arguments;a=parseInt(a);
 if(document.layers||window.opera){pa='';}for(k=0;k<(args.length);k+=4){
 if((g=MM_findObj(args[k]))!=null){if((el=MM_findObj(args[k+1]))!=null){
 a=parseInt(args[k+2]);b=parseInt(args[k+3]);x=0;y=0;ox=0;oy=0;p="";tx=1;
 da="document.all['"+args[k]+"']";if(document.getElementById){
 d="document.getElementsByName('"+args[k]+"')[0]";if(!eval(d)){
 d="document.getElementById('"+args[k]+"')";if(!eval(d)){d=da;}}
 }else if(document.all){d=da;}if(document.all||document.getElementById){while(tx==1){
 p+=".offsetParent";if(eval(d+p)){x+=parseInt(eval(d+p+".offsetLeft"));y+=parseInt(eval(d+p+".offsetTop"));
 }else{tx=0;}}ox=parseInt(g.offsetLeft);oy=parseInt(g.offsetTop);tw=x+ox+y+oy;
 if(tw==0||(navigator.appVersion.indexOf("MSIE 4")>-1&&navigator.appVersion.indexOf("Mac")>-1)){
  ox=0;oy=0;if(g.style.left){x=parseInt(g.style.left);y=parseInt(g.style.top);}else{
  w1=parseInt(el.style.width);bx=(a<0)?-5-w1:-10;a=(Math.abs(a)<1000)?0:a;b=(Math.abs(b)<1000)?0:b;
  x=document.body.scrollLeft+event.clientX+bx;y=document.body.scrollTop+event.clientY;}}
 }else if(document.layers){x=g.x;y=g.y;q0=document.layers,dd="";for(var s=0;s<q0.length;s++){
  dd='document.'+q0[s].name;if(eval(dd+'.document.'+args[k])){x+=eval(dd+'.left');y+=eval(dd+'.top');
  break;}}}e=(document.layers)?el:el.style;xx=parseInt(x+ox+a),yy=parseInt(y+oy+b);
 if(navigator.appVersion.indexOf("MSIE 5")>-1 && navigator.appVersion.indexOf("Mac")>-1){
  xx+=parseInt(document.body.leftMargin);yy+=parseInt(document.body.topMargin);}
 e.left=xx+pa;e.top=yy+pa;}}}
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function P7_swapClass(){ //v1.4 by PVII
 var i,x,tB,j=0,tA=new Array(),arg=P7_swapClass.arguments;
 if(document.getElementsByTagName){for(i=4;i<arg.length;i++){tB=document.getElementsByTagName(arg[i]);
  for(x=0;x<tB.length;x++){tA[j]=tB[x];j++;}}for(i=0;i<tA.length;i++){
  if(tA[i].className){if(tA[i].id==arg[1]){if(arg[0]==1){
  tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3];}else{tA[i].className=arg[2];}
  }else if(arg[0]==1 && arg[1]=='none'){if(tA[i].className==arg[2] || tA[i].className==arg[3]){
  tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3];}
  }else if(tA[i].className==arg[2]){tA[i].className=arg[3];}}}}
}
function P7_writeStyles(op,a){ //v1.5 by PVII
if(op==0||document.getElementById){var tS="<sty"+"le type=\"text/css\">";
tS+=a+"<"+"/sty"+"le>";document.write(tS);document.close();}
}



function windowOpen (url){
    //window.open (url,dependent='yes',status='yes',scrollbars='yes',menubar=1,toolbar=0,width=800,height=600);
    window.open (url);
}

function onSubmit (forma)
{        
    document[getNetuiTagName(forma,this)].submit();
}

<!-- hide this from older browsers  
function openBrWindow(theURL,winName,features)
{ //v2.0
    window.open(theURL,winName,features);
}

function correctEmail( field )
{
    var email = field.value;
    var arrobaIndex = email.indexOf( "@", 0 );

    if ( arrobaIndex < 0 ) return false; //Email no incluye @
    
    var beforeArroba = email.substring( 0, arrobaIndex );
    var afterArroba = email.substring( arrobaIndex + 1, email.length );

    if ( beforeArroba.length == 0 ) return false; //String vacío antes de la @
    if ( afterArroba.length == 0 ) return false; //String vacío después de la @
    
    if ( afterArroba.indexOf( "--", 0 ) >= 0 ) return false; //Dominio contiene --
    
    var beforeArrobaArray = beforeArroba.split( "." );
    var afterArrobaArray = afterArroba.split( "." );
    
    if ( afterArrobaArray.length < 2 ) return false; //Dominio no contiene al menos un .
    
    var regularExpressionBeforeArroba = /[^a-zA-Z0-9_\-]/
    var regularExpressionAfterArroba = /[^a-zA-Z0-9\-]/
    var resultBeforeArroba;
    var resultAfterArroba;
    var i, word;

    for ( i = 0; i < beforeArrobaArray.length; i++ )
    {
        word = beforeArrobaArray[i];
        resultBeforeArroba = regularExpressionBeforeArroba.exec( word );
        if ( ( resultBeforeArroba != null ) || ( word.length == 0 ) ) //Palabra incorrecta o dos puntos seguidos
        {
            return false;
        }
    }

    for ( i = 0; i < afterArrobaArray.length; i++ )
    {
        word = afterArrobaArray[i];
        if ( word.substring( 0, 1 ) == "-"  ) return false; //Palabra del dominio comienza con -
        if ( word.substring( word.length - 1, word.length ) == "-" ) return false; //Palabra del dominio termina con -
        resultAfterArroba = regularExpressionAfterArroba.exec( word );
        if ( ( resultAfterArroba != null ) || ( word.length == 0 ) || ( word.length > 63 ) ) //Palabra incorrecta, muy larga o dos puntos seguidos
        {
            return false;
        }
    }

    return true;
}

// ----------------------------------------------
// StyleSwitcher functions written by Paul Sowden
// http://www.idontsmoke.co.uk/ss/
// - - - - - - - - - - - - - - - - - - - - - - -
// For the details, visit ALA:
// http://www.alistapart.com/stories/alternate/
//
// nifty StyleSwitcher scripts modified by Aaron Jones 10/10/2002
// ----------------------------------------------

function setActiveStyleSheet(title, reset) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
  if (reset == 1) {
	  createCookie("wstyle", title, 365);
  }
}

function setStyle() {
	var style = readCookie("wstyle");
	if (style != null) {
		setActiveStyleSheet(style, 0);
	}
}

// ----------------------------------------------
// Cookie functions
// ----------------------------------------------

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = ";expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/;";
}

// ----------------------------------------------

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// end the hiding comment -->

function sortList(box)  {
var selectedValue = box.options[box.selectedIndex].value;
var temp_opts = new Array();
var temp = new Object();
for(var i=0; i<box.options.length; i++)  {
temp_opts[i] = box.options[i];
}
for(var x=0; x<temp_opts.length-1; x++)  {
for(var y=(x+1); y<temp_opts.length; y++)  {
if(temp_opts[x].text > temp_opts[y].text)  {
temp = temp_opts[x].text;
temp_opts[x].text = temp_opts[y].text;
temp_opts[y].text = temp;
temp = temp_opts[x].value;
temp_opts[x].value = temp_opts[y].value;
temp_opts[y].value = temp;
}
}
}
for(var i=0; i<box.options.length; i++)  {
box.options[i].value = temp_opts[i].value;
box.options[i].text = temp_opts[i].text;
if (selectedValue == box.options[i].value) box.options[i].selected = true;
}
}
//-->

/*
     FILE ARCHIVED ON 08:20:24 Dec 31, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:40:16 Dec 16, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 86.54 (3)
  esindex: 0.009
  captures_list: 107.725
  CDXLines.iter: 13.149 (3)
  PetaboxLoader3.datanode: 109.519 (4)
  exclusion.robots: 0.161
  exclusion.robots.policy: 0.151
  RedisCDXSource: 4.758
  PetaboxLoader3.resolve: 41.27 (2)
  load_resource: 89.183
*/