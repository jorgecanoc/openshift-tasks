if (window.location.href.indexOf('/wps/portal/banorte/Home/seccion-ayuda') > 0 ){

}else{
  var dominioAudiencias = window.location.toString().split('/Home')[0].split('portal/')[1];
  if (window.location.href.indexOf('/wps/portal/banorte/Home/seguros/seguro-auto/auto') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/nomina') > 0
  //|| window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicita-tu-tarjeta')>0
  || window.location.href.indexOf('/wps/portal/ixe/Home/preferente.proteccion-patrimonio2/preferente-seguro-auto2') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-platinum') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-infinite') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-oro') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-united') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/united-universe') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-por-ti') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/clasica') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/oro') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/mujer-banorte') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-40') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/tuzos') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-basica') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/ke-buena') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/cotiza-en-linea/nomina/credito-de-nomina') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/adelanto-nomina') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-platinum') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-infinite') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-oro') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-united') > 0 
  || window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/united-universe') > 0 
  || window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-banorte') > 0
  || window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicitar-tarjeta-de-credito/') > 0) { //Parche chat Banorte
    document.addEventListener('DOMNodeInserted', function(e) {
      var clase = $(e.target).attr('class');
      if (clase == 'gpe-resizable-handle gpe-resizable-nw') { //Patch para cuando se muestre el cat
        setTimeout(function() {
          //$('.gpe-dialog-title').html('&iquest;Qu&eacute; podemos hacer por ti?');
          //$('.message-content').html('&iquest;Necesitas ayuda?');
          $('.gpe-dialog-titlebar-close').click(function(event) {
            event.stopPropagation();
            $('.gpe-dialog').attr('style', 'display:inherit!important;');
            $('.gpe-dialog').toggleClass('show-chat');
          });
          $("button[type='callback'], button[type='chat']").click(function(event) {
            $('.gpe-dialog').attr('style', 'display:none!important;');
          });
        }, 100);
        setTimeout(function() { //Ocultar chat manualmente 30 segundos
          $('.gpe-dialog').remove();
        }, 30000);
      };

      if (clase == 'gwc-chat-registration-input') { //Patch para placeholder en chat
        addPlaceHolder();
      };
    }, false);
  };

  function addPlaceHolder() {
    (function($) {
      $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);

    //fix for IE7 and IE8
    $(function() {
      if (!$.support.placeholder) {
        $("[placeholder]").focus(function() {
          if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function() {
          if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function() {
          $(this).find('[placeholder]').each(function() {
            if ($(this).val() == $(this).attr("placeholder")) {
              $(this).val("");
            }
          });
        });
      }
    });
  };

  //FIX ICONO CASA DE BOLSA
  if (window.location.href.indexOf('/wps/portal/ixe-xima') > 0) {
  	if (window.location.href.indexOf('acceso24.banorte.com') > 0 ){
	    $("a.logo").css("background-image", "url(https://www.banorte.com/cms/casadebolsa/files/logos/Logo_BP_64x341.png)");
	    $("a.logo").css("width", "341px");
  	}else{
	    $("a.logo").css("background-image", "url(https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png)");
	    $("a.logo").css("width", "341px");
  	}
  }


  if ($('.wpthemeHeader').length == 0 && (location.href).indexOf('www.banorte.com') == -1 && (location.href).indexOf('acceso24.banorte.com') == -1) {
    //chatbot
    //Firebase
    var script1 = document.createElement("script");
    script1.src = "https://www.gstatic.com/firebasejs/4.2.0/firebase.js";
    script1.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script1);

    $(document).ready(function() {
      // var randomnos = Math.ceil(Math.random() * 1000000000);
      // var script = document.createElement("script");
      // var link = document.createElement("link");
      // link.href = "http://15.128.1.157/PORTAL3/chatbot/styles.css" + "?v=" + randomnos;
      // link.type = "text/css";
      // link.rel = "stylesheet";
      // link.media = "screen,print";
      // document.getElementsByTagName("head")[0].appendChild(link);
      // //EMoji LIB
      // var link = document.createElement("link");
      // link.href = "https://afeld.github.io/emoji-css/emoji.css";
      // link.type = "text/css";
      // link.rel = "stylesheet";
      // link.media = "screen,print";
      // document.getElementsByTagName("head")[0].appendChild(link);
      // //APP.JS
      // script.src = "http://15.128.1.157/PORTAL3/chatbot/app.js" + "?v=" + randomnos;
      // script.type = "text/javascript";
      // document.getElementsByTagName("head")[0].appendChild(script);
      // //Finish JS Load
      // $('body').append('<button id="beginChat" class="pulse-button"><div>&iquest;Necesitas ayuda?</div></button><div id="chatBox"><a id="toggleInfo" href="javascript:toggleInfo()"></a><div class="profileBot"></div><div id="infoArea"></div><a id="minChat" href="javascript:minimize();"><img src="" /></a><div id="toolChat"></div><div id="chatForm"><div class="wrapChat"><ul id="chatArea"><li class="writing botWrite"><div class="avatar"><img src="" draggable="false" /></div><div class="msg"><p class="title-chat"></p><p class="botMsg"><!--span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span></p--></div></li></ul></div><div id="chatBottom"><textarea id="inputBox" rows="2" placeholder="">Escribe tus preguntas aqu&iacute;</textarea><a href="javascript:actionEmoji(0);"><img src="" class="emoji-icon smile" /></a><a href="javascript:actionEmoji(1);"><img src="" class="emoji-icon sad" /></a><a href="javascript:actionEmoji(2);"><img src="" class="emoji-icon doubt" /></a><button id="chatSend" class="redButton">Enviar</button></div></div></div>');

    });
  }

  /*$(document).ready(function(){
    //Chat IBM Watson Insert DOM
    //document.createComment('<!--[if lt IE 9]><script src="js/lib/html5.js"><script src="js/lib/ie8Bind.js"/><![endif]-->');
    //document.createComment('<!--[if lt IE 9]><script>$('body').addClass('ie8');<script><![endif]-->');
    $("body").append('<button id="beginChat" class="pulse-button"><div>ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿Necesitas ayuda?</div></button><chat-container style="display: none;"><header><i class="fa fa-circle-thin" aria-hidden="true"><i class="fa fa-info" aria-hidden="true"></i></i><h1>Asistente Banorte</h1><i class="fa fa-chevron-d" aria-hidden="true"></i></header><main id="dialog"><div id="loading"></div></main><div id="timeout" title="La session expirarÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡" style="display: none;"><p style="text-align: center;">Su Chat ha estado inactivo por <span id="idleMinutes"></span>minutos.<br />Esta ventana se cerrara en<span id="closeMinutes"></span> minutos.</p></div><footer><form id="chatInput" action="javascript:chat.advance()"><input type="text" id="textIn" onclick="this.select()" placeholder="Escribe tu mensaje aqui"  /><input type="submit" value="Enviar" id="inputSend" /></form></footer></chat-container><div id="loaderModal"></div>');
    var css = ['reset.css','fonts.css','jquery-ui.min.css','chat.css','tags.css','login.css','styles.css','font-awesome.min.css'];
    var path = "/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/watson/";
    //Load css & js
    var randomnos = Math.ceil(Math.random() * 1000000000);
    var script = document.createElement( "script" );
    for (var i = 0; i < css.length; i++) {
      var link = document.createElement( "link" );
      link.href = path+"css/"+css[i]+"?v="+randomnos;
      link.type = "text/css";
      link.rel = "stylesheet";
      document.getElementsByTagName( "head" )[0].appendChild( link );
    };
    script.setAttribute('data-main', path+"js/src/main.js");
    script.src = path+"js/lib/require.js";
    script.type = "text/javascript";
    document.getElementsByTagName( "head" )[0].appendChild( script );
  });*/


  //AJUSTES
  if (window.location.href.indexOf('www.banorte.com') > 0) {
    if (window.location.href.indexOf('/promociones/promociones-nfl') > 0) {
      window.location.href = "https://www.banorte.com/wps/portal/banorte/Home/promociones";
    }
  }


  var randomnos = Math.ceil(Math.random() * 1000000000);
  var script = document.createElement("script");
  script.src = "https://nebula-cdn.kampyle.com/wu/283131/onsite/embed.js" + "?v=" + randomnos;
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);

  //validaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n para login contingente
  var contingente = false;
  script = document.createElement("script");
  if ((location.href).indexOf('www.banorte.com') > -1) {
    script.src = "https://www.banorte.com/cms/functions/contingente.js" + "?v=" + randomnos;
  } else {
    contingente = false;
    script.src = "https://www.banorte.com/cms/functions/contingente.js" + "?v=" + randomnos;
  };
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);

  $(document).ready(function() {
    if ($('#widget_login').length != 0) {
      if (contingente) {
        $('#widget_login').attr('style', 'visibility: hidden;display: none;');
        $('#widget_login_emerg').attr('style', '');
        $('#IVSAR_acceso24').attr('style', 'visibility: hidden;display: none;');

        if (window.location.href.indexOf('/wps/portal/empresas') > 0) {
          $("#standarLogin").attr("src", "https://nbem.banorte.com/NBXI/aaloginsum.aspx?BEM");
        }
      } else {
        $('#widget_login_emerg').attr('style', 'visibility: hidden;display: none;');
        $('#widget_login').attr('style', '');
      };
    };
  });


  //Se esconde buscador
  /*$(document).ready(function(){
    if(window.location.href.indexOf('/wps/portal/banorte/')>0 || window.location.href.indexOf('/wps/portal/ixe/')>0){
      $(".search_trigger").hide();
    }
  });*/


  /*************INICIO DE MENU HEADER************/
  $(document).ready(function() { /***************PARCHE FOOTER***************/

    function changeFooter(c, r) {
      //c: cambiar, r: remover
      try {
        var footerEle = $('.footer_sitemap .layout  ul  li');
        $(footerEle[c]).html('<div class="d_st"><a href="/wps/portal/gfb">Grupo Financiero Banorte</a></div>');
        if (r) $(footerEle[r]).remove();
      } catch (e) {
        console.log(e);
      }
    } /*************FIN PARCHE FOOTER*************/





    var htmlPopup = '<div class="popup" dir="ltr" id="popUpInteracciones" style="padding: 40px 10px 10px;width: 668px;margin-left: -284px;top: 20px;display: none;height: 567px !important;"><div class="closePopup" id="closePopUpInteracciones" style="position:relative;top: -69px;right: -632px;height: 45px;line-height:20px;">&nbsp;</div><a href="/wps/portal/banorte/Home/inicio"><img src="/wps/wcm/connect/banorte/6a37b35c-af04-4f21-8ad9-e7c2c9aa43e2/banner_banorte_650x550%5B6%5D.jpg?MOD=AJPERES&amp;CACHEID=6a37b35c-af04-4f21-8ad9-e7c2c9aa43e2"  style="margin-top: -75px;"/></a></div>';

    $("#popUpLoginIxeNet").after(htmlPopup);

    var amenus = [];
    amenus['banorte'] = {
      a: $('<a href="/wps/portal/banorte/" class="opt header-opt">').html('Personal')
    };
    amenus['ixe'] = {
      a: $('<a href="/wps/portal/ixe/" class="opt header-opt">').html('Preferente')
    };
    amenus['pyme'] = {
      a: $('<a href="https://www.circulopymebanorte.com" class="opt header-opt">').html('PyMES')
    };
    amenus['empresa'] = {
      a: $('<a href="/wps/portal/empresas/Home/empresas-corporativos/" class="opt header-opt">').html('Empresas')
    };
    amenus['gobierno'] = {
      a: $('<a href="/wps/portal/empresas/Home/gobierno/" class="opt header-opt">').html('Gobierno')
    };
    amenus['casa'] = {
      a: $('<a href="/wps/portal/ixe-xima/" class="opt header-opt">').html('Casa de Bolsa')
    };
    // amenus['interacciones'] = {
    //   a: $('<a href="#" class="opt header-opt" onclick="popUpInteracciones();">').html('Interacciones')
    // };


    var url2 = "";
    var rSearch = -95;
    var rIcon = -5; //position icono localizador
    var r = 422; //position menu
    var footer_fix = ''; //css de footer en gfb
    if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/myportal/gfb') > 0) {

      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(

      );
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/gfb/!ut/p/digest!P7m2uaT5VfwJjWsb_kRo2g/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/homepage_search.png";
      rIcon = -21;
      //Parche para footer en GFB
      footer_fix = '@media screen and (min-width:1024px){.footer_sitemap{padding:0px!important}.footer_sitemap>.layout{margin:auto!important;width:974px!important}.gbanorte .footer_sitemap .layout .footer_column{width:33%!important;margin:0px!important}}';
    }


    if (window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href.indexOf('/wps/myportal/banorte') > 0 || dominioAudiencias == undefined || dominioAudiencias == null) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a, amenus['casa'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/banorte/!ut/p/digest!DVkRyeWvPl9Ovd7WCqiZVA/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/homepage_search.png";
      changeFooter(3, 2);
    }

    if (window.location.href.indexOf('/wps/portal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/ixe/') > 0) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['banorte'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a, amenus['casa'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/ixe/!ut/p/digest!34M0MbmTmkO39PEaDU8UBQ/dav/fs-type1/themes/PreferenteResponsivoTheme/css/images/homepage_search.png";
      changeFooter(3, 2);
    }

    if (window.location.href.indexOf('/wps/portal/ixe-xima/') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima/') > 0) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/ixe-xima/!ut/p/digest!KhlAdr30swEzDGgKyhcYhQ/dav/fs-type1/themes/XimaResponsivoTheme/css/images/homepage_search.png";
      r = 545;
      rIcon = -3;
      rSearch = -77;
      changeFooter(2, null);
    }

    //Parche logo empresas
    if (window.location.href.indexOf('/wps/portal/empresas/') > 0 || window.location.href.indexOf('/wps/portal/empresas/') > 0) {
      $("#map_wrapper").css("height", "658px");
      $('a.logo').attr('href', '/wps/portal/empresas/Home/empresas-corporativos/');
    }

    if (window.location.href.indexOf('/Home/gobierno/') > 0 || window.location.href.indexOf('/Home/gobierno/') > 0) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['casa'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
      r = 527;
      rIcon = -21;
      changeFooter(2, null);
    }

    if (window.location.href.indexOf('/Home/empresas-corporativos/') > 0 || window.location.href.indexOf('/Home/empresas-corporativos/') > 0) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['gobierno'].a, amenus['casa'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
      r = 527;
      rIcon = -21;
      changeFooter(2, null);
    } /**PRE  BORRAR A PASAR A PRO**/
    if (window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0 || window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0) {
      var css = '';
      $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
      amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['gobierno'].a, amenus['casa'].a);
      $(".header_menu").prepend($liBnt);
      url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
      r = 527;
      rIcon = -21;
      changeFooter(2, null);
    } /**PRE**/
    var mediaCss = '';
    if ($('#logoutlink').is(':visible')) { //Si esta autenticado eliminar el menu
      $('#menu_pyme_opt').remove();
      mediaCss = 'li.logout {top: -18px!important;right: 18px;margin-left: 40px!important;}li.location_trigger {top: 13px;}';
    } else {
      mediaCss = '.search_trigger{top:-28px!important}li.location_trigger {top:-25px!important;}.header_menu{height: 40px!important;}';
      mediaCss += '.pyme1{right: ' + r + 'px;top: 5px;width: 590px!important;text-align: right;}';
    }

    var url = "/wps/wcm/connect/banorte/b80dc59c-98a9-4ec0-a250-c16340ae94c6/ubic.png?MOD=AJPERES&ContentCache=NONE&CACHEID=b80dc59c-98a9-4ec0-a250-c16340ae94c6";


    //fix logo de banorte ixe-xima para moviles
    var headerLogoFix = "";
    if (window.location.href.indexOf('/ixe-xima/') > 0){
        headerLogoFix = '@media screen and (max-width: 480px) and (min-width: 321px){ .xima > header .header_top a.logoÂ {background-size: 74% !important;background-repeat: no-repeat !important;display: block;height: 64px;width: 341px;background-image: url(https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png);width: 341px;}}';
    } 

    var stylesHeaderMenu = $('<style>').append( //Agregar estilos "necesarios" para el menu -- AntiNatural stuffÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°
    '@media(min-width: 1024px){.pyme1{position:relative;}' + mediaCss + '.mmenu_trigger{visibility: hidden;}.search_trigger {float: right!important;}li.location_trigger{display:inline!important;right: ' + rIcon + 'px!important;}li.search_trigger{right:' + rSearch + 'px!important;}}', '@media(max-width: 1023px){.pyme1{position:absolute;}.mmenu_trigger{visibility: initial;}li.location_trigger{display:none!important}.pyme1{visibility:hidden;}}', '.header-opt{padding-right:10px!important;font-size: 12px!important;margin-right: 0px !important;}', '.mmenu_trigger {width: 31px!important;}', 'li.location_trigger a {display: none;}', 'li.location_trigger.active::before {content: "";display: block;width: 38px;height: 20px;position: absolute;top: 42px;left: -4px;background-image: url(' + url2 + ');background-size: 38px 12px;background-repeat: no-repeat;background-position: 0 0;}', 'li.location_trigger.active{background-image: url(' + url + ')!important;background-size: 82%!important;background-repeat: no-repeat!important;background-position: inherit!important;}', 'li.location_trigger {float: right!important;padding-top: 11px!important;width: 32px;height: 32px!important;background-size: 82%;vertical-align: middle;background-image: url(' + url + ');background-repeat: no-repeat;cursor: pointer;position: relative;padding: 0;margin: 0;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}', '#menu_pyme_opt{top:-1px;}', footer_fix, headerLogoFix);
    document.getElementsByClassName("search_trigger")[0].style.setProperty("background-position", "-134.5px -934px", "important"); //Cambiar icono de buscador responsivo
    $(".header_menu").children("li:eq(1)").remove();
    $(".header_menu").prepend(stylesHeaderMenu);
  });



  /******************FIX IMAGEN GEO*********************/
  var css = '.banorte .mapicon { background-image: url(https://www.banorte.com/cms/images/spriteGenericButtons.png) }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style); /********************************************/

  /*************FIN DE MENU HEADER************/
  /*** SCRIPT POP UP INTERACCIONES **/

  function popUpInteracciones() {
    popupScript("#popUpInteracciones");

    $("#closePopUpInteracciones").click(function(btn, e) {
      closeanypopup("#popUpInteracciones");
    });
  } /*** FIN SCRIPT POP UP INTERACCIONES **/


  function popupScript($id) {
    var movimiento = 800;
    var widthx = $($id).width();
    var heighty = $($id).height();
    var scroll = $(window).scrollTop();
    var offset = 20;
    var remove = (scroll + heighty + offset + offset) * -1;
    lightbox('open');
    $($id).show().animate({
      top: (scroll + offset)
    }, movimiento, 'swing');
    $($id + ' button').click(function() {
      if ($(this).hasClass('cancelar')) {
        if ($('.lightbox').hasClass('open')) {
          closeanypopupScript(remove);
          lightbox('close');
        }
      } else {
        $($id + ' .error').slideDown();
      }
    });
    // CLOSE WITH ESCAPE
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        if ($('.lightbox').hasClass('open')) {
          closeanypopupScript(remove);
          lightbox('close');
          $('.lightbox').removeClass('open');
        }
      }
    });
    $(".closePopup").on('click', function() {
      closeanypopupScript(remove);
      lightbox('close');
      $('.lightbox').removeClass('open');
    });

    $(".lightbox").click(function(event) {
      closeanypopupScript(remove);
      lightbox('close');
      $('.lightbox').removeClass('open');
    });

    $('input[name="image"]').click(function() {
      closeanypopupScript(remove);
      lightbox('close');
      $('.lightbox').removeClass('open');
    });
  }

  function closeanypopupScript($remove) {
    var e = 800;
    var t = $(window).scrollTop();
    var n = 50;
    var r = 0;
    if ($remove < 0 || $remove > 0) {
      r = $remove;
    } else {
      var target = $remove.replace('#', '');
      r = document.getElementById(target).style.height;
    }
    var i = (t + (r == '' ? 0 : parseInt(r)) + n + n) * -1;
    //console.log(i);
    $(".popup").animate({
      top: i
    }, e / 2, "swing", function() {
      $(this).hide()
    });
    lightbox("close")
    $('.lightbox').removeClass('open');
  /*var movimiento = 800;
   if($remove) var remove = $remove;
   else var remove = "-1100px";
   $('.popup').animate({ top: remove }, (movimiento/2), 'swing', function(){
     $(this).hide();
   });
   lightbox("close");
   */
  }

  // Remove ", popup" and ",popup" from links and add attribute openInTab for popupwarning validation start
  $(document).ready(function() {
    console.log("validate that widget tabs exist")
    console.log($(".widget_tabs_content > .layout .columns2B ul.menu li a"));
    if ($(".widget_tabs_content > .layout .columns2B ul.menu li a") != undefined || $(".widget_tabs_content > .layout .columns2B ul.menu li a") != null) {
      for (var i = 0; i < $(".widget_tabs_content > .layout .columns2B ul.menu li a").length; i++) {
        var oldPopUpURL = $($(".widget_tabs_content > .layout .columns2B ul.menu li a")[i]).attr('href')
        var index = oldPopUpURL.indexOf(", popup");
        var index2 = oldPopUpURL.indexOf(",popup");
        console.log($(".widget_tabs_content > .layout .columns2B ul.menu li a")[i]);
        if (index != -1) {
          var txt = oldPopUpURL.substr(index);
          var newURL = oldPopUpURL.replace(txt, " ");
          console.log(newURL);
          $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("href", newURL);
          $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("openInTab", "True");
        }

        if (index2 != -1) {
          var txt = oldPopUpURL.substr(index2);
          var newURL = oldPopUpURL.replace(txt, " ");
          console.log(newURL);
          $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("href", newURL);
          $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("openInTab", "True");

        }
      }
    }
  })

  // Remove ", popup" and ",popup" from links and add attribute openInTab for popupwarning validation end
  // funcion de facebook pixel start
  !
  function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1590569481248436');
  fbq('track', 'PageView');
  // funcion de facebooj pixel end
  $(document).ready(function() {

    //necsario para el pixel de facebook
    $('head').append('<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1590569481248436&ev=PageView&noscript=1"/></noscript>');

    // produccion
    // cambio de text en login 

    if (dominioAudiencias == undefined || dominioAudiencias == null || window.location.href.indexOf('www.banorte.com/wps/portal/banorte/') > 0) {
      var login_buttons = document.getElementsByClassName("menu_gray")
      var login_Li = login_buttons[0].children[0].innerHTML = '<a target="_new" href="http://189.254.22.28/ContratantePIB/logincontratantePIB.aspx">Patrimonio Vida Banorte / Patrimonio Integral Banorte</a>'
      var login_Li = login_buttons[0].children[0].setAttribute("style", "line-height: 19px;margin-top: 10px;");
    }

    // warningmessage
    if (dominioAudiencias == undefined || dominioAudiencias == null || window.location.href.indexOf('www.banorte.com/wps/portal/banorte/') || window.location.href.indexOf('www.banorte.com/wps/portal/ixe/') > 0 || window.location.href.indexOf('www.banorte.com/wps/portal/empresas/') > 0 || window.location.href.indexOf('www.banorte.com/wps/portal/ixe-xima/') > 0 || window.location.href.indexOf('www.banorte.com/wps/portal/gfb/') > 0) {

      if ( (location.href).indexOf('incluirt.com')>-1 != true ){
        var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">' + '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>' + '<div class="popupcenter">' + '<div class="popupWarning">' + '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">Navegar&aacute;s en un sitio ajeno a Banorte, el cual administra su propia informaci&oacute;n y pol&iacute;tica de privacidad y seguridad.</h2>' + '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>' + '</div>' + '</div>' + '</div>';
        $(".wpthemeInner").append(warningTemplate);
  
        var randomnos = Math.ceil(Math.random() * 1000000000);
        var script = document.createElement("script");
        var styles = document.createElement("link");
        styles.rel = "stylesheet"
        styles.type = "text/css"
        styles.href = "https://www.banorte.com/cms/functions/popup-warning.css" + "?v=" + randomnos;
        script.src = "https://www.banorte.com/cms/functions/popup-warning.js" + "?v=" + randomnos;
        // $(".wpthemeInner").append(styles);
        // $(".wpthemeInner").append(script);
        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].appendChild(styles);
      }
    }

    // if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/banorte') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/ixe') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/empresas') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/gfb') > 0){
    //     var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">' + '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>' + '<div class="popupcenter">' + '<div class="popupWarning">' + '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">Navegar&aacute;s en un sitio ajeno a Banorte, el cual administra su propia informaci&oacute;n y pol&iacute;tica de privacidad y seguridad.</h2>' + '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>' + '</div>' + '</div>' + '</div>';
    //     $(".wpthemeInner").append(warningTemplate);
    //     var randomnos = Math.ceil(Math.random() * 1000000000);
    //     var script = document.createElement("script");
    //     var styles = document.createElement("link");
    //     styles.rel = "stylesheet"
    //     styles.type = "text/css"
    //     styles.href = "http://15.128.1.157/PORTAL3/functions/popup-warning.css" + "?v=" + randomnos;
    //     script.src = "http://15.128.1.157/PORTAL3/functions/popup-warning.js" + "?v=" + randomnos;
    //     // $(".wpthemeInner").append(styles);
    //     // $(".wpthemeInner").append(script);
    //     document.getElementsByTagName("head")[0].appendChild(script);
    //     document.getElementsByTagName("head")[0].appendChild(styles);
    // }
    // se usa para pruebas en nueva interfaz 2
    // if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0)
    // {
    //   // warningmessage
    //   var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">'+
    //   '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>'+
    //   '<div class="popupcenter">'+
    //   '<div class="popupWarning">'+
    //   '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">NavegarÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡s en un sitio ajeno a Banorte, el cual administra su propia informaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n y polÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­tica de privacidad y seguridad.</h2>'+
    //   '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>'+
    //   '</div>'+
    //   '</div>'+
    //   '</div>';
    //   $(".wpthemeInner").append(warningTemplate);
    //   var randomnos = Math.ceil(Math.random() * 1000000000);
    //   var script = document.createElement("script");
    //   var styles = document.createElement("link");
    //   styles.rel = "stylesheet"
    //   styles.type = "text/css"
    //   styles.href = "https://www.banorte.com/cms/functions/popup-warning.css" + "?v=" + randomnos;
    //   script.src = "https://www.banorte.com/cms/functions/popup-warning.js" + "?v=" + randomnos;
    //   // $(".wpthemeInner").append(styles);
    //   // $(".wpthemeInner").append(script);
    //   document.getElementsByTagName("head")[0].appendChild(script);
    //   document.getElementsByTagName("head")[0].appendChild(styles);
    // }
    /*Parche home banner banorte*/
    $('.banorte.homepage').css("margin-top", "54px"); /****************************/
    /************AJUSTE FOOTER*****************/
    if (window.location.href.indexOf('/wps/portal/gfb') == -1 && window.location.href.indexOf('/wps/myportal/gfb') == -1) {
      var url_promo = '/wps/portal/banorte/Home/promociones';
      if (window.location.href.indexOf('/wps/portal/ixe') > 0 || window.location.href.indexOf('/wps/myportal/ixe') > 0) {
        url_promo = '/wps/portal/ixe/Home/promociones-preferente';
      };
      if (window.location.href.indexOf('/wps/portal/ixe-xima') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima') > 0) {
        url_promo = '/wps/portal/banorte/Home/promociones';
      };

      var footerHTML = "<div class='layout'>" + "<ul>" + "  <li><div class='d_st'><a href='" + url_promo + "'>Promociones</a></div></li>" + "  <li><div class='d_st'><a href='/wps/portal/gfb/Home/relacion_con_inversionistas'>Relaci&oacute;n con Inversionistas</a></div></li>" + "  <li><div class='d_st'><a href='/wps/portal/gfb'>Grupo Financiero Banorte</a></div></li>" + "  <li><div class='d_st'><a href='https://empleos.banorte.com/'>Empleos Banorte</a></div></li>" +
      //"  <li><div class='d_st'><a href='https://www.banorte.com/cms/talento-banorte/'>Empleo Banorte</a></div></li>"+
      "  <li><div class='d_st'><a href='/wps/portal/gfb?uri=nm:oid:responsabilidad-social-sustentabilidad'>Responsabilidad Social</a></div></li>" + "</ul>" + "</div>";
      $(".footer_sitemap").html(footerHTML);
      $('.footer_sitemap > .layout > ul > li').on("click", function() {
        var url = $(this).find('a').attr('href');
        if (!(isEmpty(url))) {
          window.location.href = url;
        }
        return false;
      });
    }
    $(".footer_sitemap .layout").css("width", "1182px");
    $(".footer_sitemap .layout").css("font-size", "14px");
    $(".footer_sitemap .layout").css("letter-spacing", "-0.03em");
    $(".footer_sitemap .layout ul li").css("margin", "0 17px 0 0");
    $(".redes-sociales").css("width", "220px"); /************FIN AJUSTE FOOTER*****************/

  });

  $(document).ready(function() {
    // Ajuste en botones de redes sociales footer 
    // produccion
    if (document.getElementsByClassName("redes-sociales") != undefined) {
      var mylist = document.getElementsByClassName("redes-sociales")
      var listitems = mylist[0].getElementsByTagName("a")
      for (i = 0; i < listitems.length; i++) {
        console.log("div items");
        if (listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined) {
          listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
          listitems[i].removeAttribute("data-url")
          if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
          }
          if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
          }
          if (listitems[i].getAttribute("href").indexOf("youtube") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/2.png" alt="" style="height: 50px;width: 50px; margin-left: 7px;">' + '</div>'
          }
          if (listitems[i].getAttribute("href").indexOf("instagram") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/3.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
          }
        }

        // Ajuste de iconos para el portal ixe 
        if (window.location.href.indexOf('www.banorte.com/wps/portal/ixe') != -1 || window.location.href.indexOf('http://lnxsaut1p.unix.banorte.com:10039/wps/portal/ixe') != -1) {
          if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
            listitems[i].setAttribute("href", "https://www.facebook.com/banorte");
          }
          if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
            listitems[i].setAttribute("href", "https://twitter.com/Banorte_mx");
          }
          if (listitems[i].getAttribute("href").indexOf("instagram") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/3.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
            listitems[i].setAttribute("href", "https://www.instagram.com/banorte_mx/");
          }
        }
        // Ajuste de iconos para el portal GFB 
        if (window.location.href.indexOf('www.banorte.com/wps/portal/gfb') != -1 || window.location.href.indexOf('http://lnxsaut1p.unix.banorte.com:10039/wps/portal/gfb') != -1) {
          if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
            listitems[i].setAttribute("href", "https://www.facebook.com/GFBanorte");
          }
          if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
            listitems[i].setAttribute("href", "https://twitter.com/GFBanorte_mx");
          }
        }
      }
    }

    // se usa para pruebas con nuevainterfaz 2
    // if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0)
    //   {
    //     if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0 && document.getElementsByClassName("redes-sociales") != undefined)
    //     {
    //       var mylist=document.getElementsByClassName("redes-sociales")
    //       var listitems= mylist[0].getElementsByTagName("a")
    //         for (i=0; i<listitems.length; i++) {
    //           console.log("Frome here")
    //           console.log(listitems)
    //           console.log(listitems[i])
    //           if(listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined){
    //             listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
    //             listitems[i].removeAttribute("data-url")
    //           }
    //       }
    //     }  
    //     if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0 && document.getElementsByClassName("redes-sociales") != undefined){
    //       var mylist=document.getElementsByClassName("redes-sociales")
    //       var listitems= mylist[0].getElementsByTagName("a")
    //       for (i=0; i<listitems.length; i++) 
    //       {
    //         console.log("Frome here")
    //         console.log(listitems)
    //         console.log(listitems[i])
    //         if(listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined){
    //           listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
    //           listitems[i].removeAttribute("data-url")
    //         }
    //       }
    //     }
    //   }
  });

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  $(document).ready(function() {

    //START AJUSTE PARA ENLACES INVESTORS GFB RI 

    if(window.location.href.indexOf('www.banorte.com/') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/banorte') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/myportal/banorte') > 0) {


      var oid = getParameterByName('uri');

      if (window.location.href.indexOf('relacion_con_inversionistas') > 0 || window.location.href.indexOf('relacion-con-inversionistas.informacion-financiera.datos-historicos') > 0 || window.location.href.indexOf('/investor-relations') > 0){
          window.location.href = "https://investors.banorte.com"
      }

      if (window.location.href.indexOf('banorte-te-informa/gobierno-corporativo') > 0){
        window.location.href = "https://investors.banorte.com/governance/shareholders-meetings?sc_lang=esÂ "
    }

      if (window.location.href.indexOf('responsabilidad-social-sustentabilidad') > 0){
        window.location.href = "https://investors.banorte.com/sustainability?sc_lang=es"
      }

      if(oid != undefined && oid != null && oid != ""){
        if(oid.indexOf('relacion-con-inversionistas.informacion-financiera.datos-historicos') >  0 || oid.indexOf('investor-relations') >  0 ){
          window.location.href = "https://investors.banorte.com"
        }

        if(oid.indexOf('banorte-te-informa.gobierno-corporativo') >  0 ){
          window.location.href = "https://investors.banorte.com/governance/shareholders-meetings?sc_lang=esÂ "
        }
      }

      try {
        var footerEle = $('.footer_sitemap .layout  ul  li');
        footerEle[1].children[0].children[0].setAttribute("href", "https://investors.banorte.com/")
        footerEle[4].children[0].children[0].setAttribute("href", "https://investors.banorte.com/sustainability?sc_lang=es")
        
        // Ajuste de texto en footer a sustentabilidad
        footerEle[4].children[0].children[0].innerText = "Sustentabilidad"
      } catch (e) {
        console.log(e);
      }
    }
    //END AJUSTE PARA ENLACES INVESTORS


    //START Ajuste para agregar span en logo de portales y agregar tag de img adentro
    
    var logoBanorte = document.getElementsByClassName("logo")[0];
  
    var logoSpan = document.createElement('span');
    logoSpan.innerText ="Pagina inicio";
    logoSpan.setAttribute("style", "opacity:0!important;");

    //logoBanorte.setAttribute("style", "background-image:none!important;");
    logoBanorte.appendChild(logoSpan);

   // $('body').append('<style>'+ ''+ ''+ '@media screen and (max-width: 480px) and (min-width: 321px){'+ '.banorte-mobile-logo{'+ 'height: 52px !important;'+ 'width: 385px !important;'+ 'object-fit: none !important;'+ 'object-position: -819px -1350px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ '-webkit-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(0.55) !important;'+ 'margin-left: -91px !important;'+ 'margin-top: -23px !important;'+ '}'+ ''+ '.ixe-mobile-logo{'+ 'height: 100% !important;'+ 'width: 152px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(1.9) !important;'+ 'margin-top: -24px !important;'+ 'margin-left: 33px !important;'+ '}'+ ''+ '.cdb-mobile-logo{'+ 'height: 96% !important;'+ 'width: 252px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(1) !important;'+ 'margin-top: -25px !important;'+ 'margin-left: -12px !important;'+ '}'+ ''+ '.gfb-mobile-logo{'+ 'height: 100%;'+ 'width: 373px;'+ 'object-fit: none;'+ 'object-position: -820px -1343px;'+ '-ms-transform: scale(0.7, 0.7);'+ '-webkit-transform: scale(0.7, 0.7);'+ 'transform: scale(0.6);'+ 'margin-left: -80px;'+ 'margin-top: -23px;'+ '}'+ '}'+ ''+ '</style>');
    
    if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/banorte') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/empresas') > 0){
      var wrapper= document.createElement('div');
      wrapper.innerHTML = '<img class="banorte-mobile-logo" src="https://www.banorte.com/wps/contenthandler/banorte/!ut/p/digest!C3O49CLoCp1sqZdfgs91qQ/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/spriteBanorteButtons.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 52px;width: 378px;object-fit: none;object-position: -819px -1350px;-ms-transform: scale(0.7, 0.7);-webkit-transform: scale(0.7, 0.7);transform: scale(0.75);margin-left: -49px;margin-top: -23px;">';
       //logoBanorte.appendChild(wrapper.firstChild);
    }

    if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/ixe') > 0){
      var wrapper= document.createElement('div');
      wrapper.innerHTML = '<img class="ixe-mobile-logo" src="https://www.banorte.com/wps/contenthandler/ixe/!ut/p/digest!nPRKrXU48ENRC6EpgrEokw/dav/fs-type1/themes/PreferenteResponsivoTheme/css/images/Banorte-Banca-Preferente_1.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 100%;width: 253px;-ms-transform: scale(0.7, 0.7);transform: scale(1.5);margin-top: 15px;margin-left: -47px;">';
     //logoBanorte.appendChild(wrapper.firstChild);
    }

    if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/ixe-xima') > 0){
      try {
        logoBanorte.removeChild(logoBanorte.childNodes[1]); 
      } catch (e) {
        console.log(e);
      }
      var wrapper= document.createElement('div');
      wrapper.innerHTML = '<img class="cdb-mobile-logo" src="https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 96%;width: 290px;-ms-transform: scale(0.7, 0.7);transform: scale(1);margin-top: 0px;margin-left: -93px;">';
      //logoBanorte.appendChild(wrapper.firstChild);
    }

    if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/gfb') > 0){
      var wrapper= document.createElement('div');
      wrapper.innerHTML = '<img class="gfb-mobile-logo" src="https://www.banorte.com/wps/contenthandler/gfb/!ut/p/digest!o56m9atE6KHWP7NwW7UUCA/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/spriteGbanorteButtons.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 100%;width: 376px;object-fit: none;object-position: -820px -1343px;-ms-transform: scale(0.7, 0.7);-webkit-transform: scale(0.7, 0.7);transform: scale(0.7);margin-left: -60px;margin-top: -23px;">';
    // logoBanorte.appendChild(wrapper.firstChild);
    }

    //END Ajuste para agregar span en logo de portales y agregar tag de img adentro

    // START Ajuste para remover contacto por email de necesictas ayuda en detalle de producto 
    var cssNecesitasAyuda = '.widget_help .content > div:nth-child(3n){display:none;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = cssNecesitasAyuda;
    } else {
      style.appendChild(document.createTextNode(cssNecesitasAyuda));
    }
    head.appendChild(style);

    
    setTimeout(function(){
      try {
        var widgetHelp = document.getElementsByClassName('widget_help')
        if(widgetHelp != undefined && widgetHelp[0].firstElementChild.children[3] != undefined){
          widgetHelp[0].firstElementChild.children[3].setAttribute("onclick", "")
        }
      } catch (e) {
        console.log(e);
      }
    }, 1000);
    
    // END Ajuste para remover contacto por email de necesictas ayuda en detalle de producto 


    //START Ajuste de banner para cookies// 
  //  if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/') > 0) {
      $('body').append('<style>'+ '.cookiesBanner {'+ 'position: fixed;'+ 'z-index: 9999999999999;'+ 'background-color: #f8d44c;'+ 'width: 100%;'+ 'min-height: 22px;'+ 'height: 45px;'+ 'bottom: 0%;'+ 'padding: 16px;'+ 'padding-top: 9px;'+ 'padding-left: 2%;'+ 'border-style: solid;'+ 'border-width: 2px;'+ 'border-color: #f8d44c;'+ '}'+ ''+ '.cookiesText {'+ 'text-align: left;'+ 'width: 79%;'+ '}'+ ''+ '.acceptCookies {'+ 'width: 8%;'+ 'height: 33px;'+ 'position: absolute;'+ 'top: 24%;'+ 'left: 84%;'+ 'background-color: #614f4d;'+ 'color: white;'+ '-webkit-box-sizing: border-box;'+ 'border-radius: 0px;'+ 'border: none;'+ 'box-sizing: border-box;'+ '-moz-box-sizing: border-box;'+ 'transition: all 0.5s;'+ 'cursor: pointer;'+ 'font-size: 16px;'+ '}'+ ''+ '@media (max-width: 480px) {'+ '.cookiesBanner {'+ 'position: fixed !important;'+ 'z-index: 9999999999999 !important;'+ 'background-color: #f8d44c !important;'+ 'width: 100% !important;'+ 'min-height: 57px !important;'+ 'height: auto !important;'+ 'bottom: 0% !important;'+ 'padding: 28px !important;'+ 'padding-top: 9px !important;'+ 'padding-left: 2% !important;'+ 'border-style: solid !important;'+ 'border-width: 2px !important;'+ 'border-color: #f8d44c !important;'+ '}'+ ''+ '.cookiesText {'+ 'text-align: justify !important;'+ 'width: 96% !important;'+ 'font-size: 12px !important;'+ '}'+ ''+ '.acceptCookies {'+ 'width: 19% !important;'+ 'height: 33px !important;'+ 'position: absolute !important;'+ 'top: 68% !important;'+ 'left: 65% !important;'+ 'background-color: #614f4d !important;'+ 'color: white !important;'+ '-webkit-box-sizing: border-box !important;'+ 'border-radius: 0px !important;'+ 'border: none !important;'+ 'box-sizing: border-box !important;'+ '-moz-box-sizing: border-box !important;'+ 'transition: all 0.5s !important;'+ 'cursor: pointer !important;'+ 'font-size: 16px !important;'+ '}'+ '}'+ ''+ '@media (max-width: 1022px) {'+ '.cookiesBanner {'+ 'position: fixed;'+ 'z-index: 9999999999999;'+ 'background-color: #f8d44c;'+ 'width: 100%;'+ 'min-height: 57px;'+ 'height: auto;'+ 'bottom: 0%;'+ 'padding: 28px;'+ 'padding-top: 9px;'+ 'padding-left: 2%;'+ 'border-style: solid;'+ 'border-width: 2px;'+ 'border-color: #f8d44c;'+ '}'+ ''+ '.cookiesText {'+ 'text-align: justify;'+ 'width: 96%;'+ 'font-size: 12px;'+ '}'+ ''+ '.acceptCookies {'+ 'width: 16%;'+ 'height: 33px;'+ 'position: absolute;'+ 'top: 55%;'+ 'left: 40%;'+ 'background-color: #614f4d;'+ 'color: white;'+ '-webkit-box-sizing: border-box;'+ 'border-radius: 0px;'+ 'border: none;'+ 'box-sizing: border-box;'+ '-moz-box-sizing: border-box;'+ 'transition: all 0.5s;'+ 'cursor: pointer;'+ 'font-size: 16px;'+ '}'+ '}'+ '</style>'+ '<div id="cookiesBanner" class="cookiesBanner">'+ '<p class="cookiesText">Esta página puede utilizar cookies, web beacons, y/u otras tecnologías para mejorar nuestros'+ ' servicios y analizar los hábitos de navegación del usuario. Si continua navegando, consideramos que acepta su'+ ' uso. Para obtener más información consulte nuestro aviso de privacidad publicado <a'+ 'href="https://www.banorte.com/wps/portal/gfb?uri=nm:oid:banorte-te-informa.aviso-de-privacidad">aquí</a></p>'+ '<button id="acceptCookies" class="acceptCookies">Aceptar</button>'+ '</div>');
      var aceptoCookies = localStorage.getItem("didAcceptCookies");
      
      if(aceptoCookies != undefined || aceptoCookies != null){
        $("#cookiesBanner").hide();
        $("#beginChat").css("bottom", "45px");
      }else{
        $("#beginChat").css("bottom", "93px");
      };

      $("#acceptCookies").click(function() {
        localStorage.setItem("didAcceptCookies", "true");
        $("#beginChat").css("bottom", "45px");
        $("#cookiesBanner").hide();
      });
   // }
    //END Ajuste de panner para cookies//

    // Start de icono de inklusion 

    // Opcion de icono para pagina incluyente

    debugger;

    if(window.location.href.indexOf('www.banorte.com') > 0  && window.location.href.indexOf('/wps/portal/empresas/Home/gobierno/') > 0 == false && window.location.href.indexOf('/wps/portal/gfb') > 0 == false && window.location.href.indexOf('/wps/portal/empresas/Home/empresas-corporativos/') > 0 == false && window.location.href.indexOf('/wps/portal/ixe-xima') > 0 == false && window.location.href.indexOf('/wps/portal/ixe') > 0 == false){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/banorte" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/banorte\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');
        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);    
      } catch (e) {
        console.log(e);
      }

    }

    if(window.location.href.indexOf('/wps/portal/ixe') > 0 && window.location.href.indexOf('/wps/portal/ixe-xima') > 0 == false){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/ixe" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/ixe\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');
        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);
      } catch (e) {
        console.log(e);
      }
  
    }

    if(window.location.href.indexOf('/wps/portal/ixe-xima') > 0){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/ixe-xima" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/ixe-xima\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');
        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);
        
      } catch (e) {
        console.log(e);
      }
  
    }

    if(window.location.href.indexOf('/wps/portal/empresas/Home/empresas-corporativos/') > 0){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/empresas"  onclick="window.location=\'https://banorte.inklusion.incluirt.com/wps/portal/empresas\'"  class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');

        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);
      } catch (e) {
        console.log(e);
      }
    }

    if(window.location.href.indexOf('/wps/portal/gfb') > 0){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/gfb" onclick="window.location=\'https://banorte.inklusion.incluirt.com/wps/portal/gfb\'"  class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 9%; left: 30px;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');
        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);  
      } catch (e) {
        console.log(e);
      }
    }

    if(window.location.href.indexOf('/wps/portal/empresas/Home/gobierno/') > 0){

      try {
        var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/gobierno" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/gobierno\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
        var mainMenu = document.getElementById('menu_pyme_opt');
        let doc = new DOMParser().parseFromString(iconImage, 'text/html');
        let firstDiv = doc.body.firstChild;
        mainMenu.appendChild(firstDiv);
        
      } catch (e) {
        console.log(e);
      }

    }


    // End de icono Inklusion


  });
  
  //


  /**AJUSTES VISUALES A LA CAJA DE LOGIN**/
  var cssLoginBox = '.widget_login .layout .login_box .others_box {left: 2px; top: 275px; width: 276px;}.widget_login .layout .headline{width: 279px;left: 1px;margin-top: 1px;}.header_search{overflow:hidden;}#sincronizarTokenId{top: -13px; position: relative;}.logo_login{width:279px;}.ixe .widget_login .layout .login_box .others_box{margin-top: 21px !important;}.ixe .widget_login .layout .login_box .others_box{padding-top: 5px;}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = cssLoginBox;
  } else {
    style.appendChild(document.createTextNode(cssLoginBox));
  }
  head.appendChild(style); /***************************************/
  /*****FIX GFB CON LOS ICONOS DE BUSCADOR*****/
  if (window.location.href.indexOf('/wps/portal/gfb') > 0) {
    var cssLoginBox = '#menu_pyme_opt{top:0px !important; width:300px !important; right:-50px !important;} .active{border: none;} #header_search{overflow:hidden;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = cssLoginBox;
    } else {
      style.appendChild(document.createTextNode(cssLoginBox));
    }
    head.appendChild(style);
  } /*******************************************/
  /****FIX DEL BUSCADOR CUANDO SWITCHEA DE OVERFLOW HIDDEN NO HIDDEN ***/
  $(".search_trigger").click(function() {
    setTimeout(fixOverflowFlipFlop, 1000);
  });

  function fixOverflowFlipFlop() {
    $("#header_search").css("overflow", "hidden");
  } 
  /********************************************************************/
}