function BMNIndicadoresFResponsivo(params) {
	this.params = params;
	this.basePath = 'PA_IadoresFinancieros/_IndicadoresFinancieros/';
	this.ENABLE_RESPONSIVE = false;
	this.pos = 0;
	this.isOpen = false;
	this.isResized = false;
	this.srcIndicadores = null;

	this.init();
}

BMNIndicadoresFResponsivo.prototype = {
	constructor: BMNIndicadoresFResponsivo,
	init: function() {
		var ctx = this;
		ctx.srcIndicadores = $("script[src*=_Indicadores]").last().attr("src");
		//console.log("url_irr:" + ctx.srcIndicadores);
		$(window).resize(function() {
			//console.log('resize:'+ctx.pos);
		    ctx.showResponsive(ctx);
			if( ctx.validateResponsive() && ctx.isOpen ) {
				 $('.widget_indicadores_layout .indicadores_trigger').click();
			}
			if( ctx.validateResponsive() && !ctx.isOpen ) {
				 $('.widget_indicadoresrv .close').click();
			}
		});
	},
	showResponsive: function(ctx) {
		var whok = $( '#IVSAR_customHeader .devHeader' ).width();
		//console.log('wcmp:'+whok);
		$('.widget_indicadoresrv').width( whok );

		if( ctx.validateResponsive() ) { // mobile
	    	$('.widget_indicadoresrv').css('display','block');
	    	$( '.widget_indicadoresrv .header' ).hide();
	    	$('#indicadores_financieros_wrapper').hide();
	    	$('.ContentPage .columns2B').hide();
	    }
	    else { // desktop
	    	$('.widget_indicadoresrv').css('display','none');
	    	$( '#indicadores_financieros_wrapper .header' ).show();
	    	$('#indicadores_financieros_wrapper').show();
	    	$('.ContentPage .columns2B').show();
	    }
	},
	// Valida y clona el modo responsivo en forma oculta
	cloneResponsive: function(selectedPos) {
		var ctx = this;
		/*if( ctx.validateResponsive() ) {
			ctx.loadTempCss(ctx);
			ctx.cloneNoHome(selectedPos);
		}
		else {
			$('#indicadores_financieros_wrapper').show();
			$('#IVSAR_customHeader .widget_indicadoresrv').hide();
		}*/
		// ctx.loadTempCss(ctx);
		$('#IVSAR_customHeader').append('<div class="widget_indicadoresrv open"></div>');
	    var cloned = $('#indicadores_financieros_wrapper').clone();
	    cloned.attr('id', '');
	    // $('#indicadores_financieros_wrapper').hide();
	    cloned.appendTo('.widget_indicadoresrv');  
	    // crea combo de listado
	    var opciones = $('.columns2B .content ul.menu li');
	    // console.log(opciones);
	    var htmlOptions = '';
	    $.each(opciones, function(idx, val) {
	        var aUri = $(val).find('a').attr('href');
	        var aTxt = $(val).find('a').html();
	        htmlOptions += '<option value="'+aUri+'">'+aTxt+'</option>';
	    });
	    // generamos el combo destino
	    var indicadoresWrapper = $('.widget_indicadoresrv > div'); //$('#indicadores_financieros_wrapper');
	    indicadoresWrapper.find('.carruselSelector').remove(); // elimina el div wrapper del combo anterior
	    var htmlCombo = '<div class="carruselSelector"><select id="selectMenu" class="productTitle" onchange="$(\'.widget_indicadoresrv .content\').hide(); location = this.options[this.selectedIndex].value;">'+htmlOptions+'</select><div class="selectTitle">M&aacute;s Indicadores Financieros</div></div>';
	    indicadoresWrapper.prepend(htmlCombo);
	    var whok = $( '.devHeader' ).width();
	    indicadoresWrapper.width( whok );  
	    $('.banorte').width( whok );
	    ctx.selectOptionByPos(selectedPos);
	    ctx.showResponsive(ctx);
	},
	// valida si aplica responsivo true es responsivo none es desktop
	validateResponsive: function() {
		var isResponsive = (this.ENABLE_RESPONSIVE && $('li.mmenu_trigger').css('display') != 'none');
		//console.log('Indicadores isResponsive:' + isResponsive);
		return isResponsive;
	},
	selectOptionByPos: function(pos) {
		var ctx = this;
		ctx.pos = pos;
		var p = Number(pos) + 1;
		// console.log('p:'+p);
		// console.log($( "#selectMenu option:nth-child("+p+")" ));
		$( "#selectMenu option:nth-child("+p+")" ).attr('selected','selected');
	},
	cloneResponsiveHome: function() {
		var ctx = this;
		$('#IVSAR_customHeader .widget_indicadoresrv').hide();
		ctx.loadTempCss(ctx);
		if( ctx.validateResponsive() ) {
			
			$('.mmenu_trigger_sidebar ul.header_menu .indicadores_trigger').remove();
			$('.mmenu_trigger_sidebar ul.header_menu').append('<li class="indicadores_trigger"><a href="#" onclick="">Indicadores Financieros</a></li>');
			$('.mmenu_trigger_sidebar ul.header_menu .indicadores_trigger').click(function(e) {
				$('.widget_indicadores  .indicadores_trigger').click();
				$('.mmenu_trigger_sidebar .close').click();
			});
			// cierra los otros widgets
			$('.widget_contacto .close').click();
		}
		else {

		}
	},
	cloneHome: function() {
		var ctx = this;
		 ctx.loadTempCss(ctx);
		if( ctx.validateResponsive() ) {
			$('#IVSAR_customHeader .widget_indicadoresrv').remove();
			$('#IVSAR_customHeader').append('<div class="widget_indicadoresrv open"></div>');
		    var cloned = $('.widget_indicadores').clone();
		    cloned.appendTo('.widget_indicadoresrv');  
		    $('.widget_indicadoresrv .close').click(function(e) {
		    	$('.widget_indicadoresrv').remove();
		    	$('.widget_indicadores.open .headline .close').click();
		    });

		    $('.mmenu_trigger_sidebar .contact_trigger').click(function(e) {
		    	$('.widget_indicadoresrv .close').click();
		    });
		}
		else {
			// abre el widget al retornar de responsivo a desktop
		}
	},
	loadTempCss: function(ctx) {
		var scriptpath = ctx.srcIndicadores.split('?')[0].split('/').slice(0, -2).join('/')+'/';
		$('head').append('<link rel="stylesheet" href="'+scriptpath+'css/indicadores_responsive.css" type="text/css" />');
	}
};

var bmnIndicadoresResponsivoInstance = new BMNIndicadoresFResponsivo({	param1: 1 });