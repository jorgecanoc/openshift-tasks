function BMNIndicadoresFinancieros(params) {
	this.urlServicio = params.urlServicio;
}

BMNIndicadoresFinancieros.prototype = {
	constructor: BMNIndicadoresFinancieros,
	loadDataHome: function() {
		var ctx = this;
		bmnIndicadoresResponsivoInstance.isOpen = true;
		$.ajax({
			type : 'POST',
			url : ctx.urlServicio, //Aqui esta la variable que contiene la url al serveResource
			async : true,
		    data : {},
		    success : function(data) {
		    	//console.log(data);
		    	ctx.drawDataHome(data);
		    	bmnIndicadoresResponsivoInstance.cloneHome();
			}
		});
	},
	isArray: function(obj) {
    	return (typeof obj !== 'undefined' &&
            obj && obj.constructor === Array);
	},
	drawDataHome: function(valor) {
		//var valor = '<%=obj%>';
		var ctx = this;
		if(valor != '{}'){
			var objJSON = eval("(" + valor + ")");
			/*console.log('----');
			console.log('valor:'+valor);
			console.log('valor:'+objJSON);
			console.log('arrayis:'+ctx.isArray(objJSON));*/

			if(ctx.isArray(objJSON["tablaDolar"]) && ctx.isArray(objJSON["tablaDivisas"])) {
				var tabla = "<tbody>";
				for ( var i = 0; i < objJSON["tablaDolar"].length; i++) {
					tabla+= "<tr>";
					tabla+= "<td>" + "Dolar" + "</td>";
					tabla+= "<td>$" + objJSON["tablaDolar"][i].compra + "</td>";
					tabla+= "<td>$" + objJSON["tablaDolar"][i].venta + "</td>";
					tabla+= "</tr>";
				}
								
				for ( var i = 0; i < objJSON["tablaDivisas"].length; i++) {
					tabla+= "<tr>";
					tabla+= "<td>" + "Euro" + "</td>";
					tabla+= "<td>$" + objJSON["tablaDivisas"][i].compra + "</td>";
					tabla+= "<td>$" + objJSON["tablaDivisas"][i].venta + "</td>";
					tabla+= "</tr>";
				}
				tabla+= "</tbody>";
				$("#tablaDolarDivisas").empty();
				$("#tablaDolarDivisas").append('<thead><tr><th>Divisas</th><th>Compra</th><th>Venta</th></tr></thead>');
				$("#tablaDolarDivisas").append(tabla);
			}
			if(ctx.isArray(objJSON["tablaIPC"])) {
				var tabla2="<tbody>";
				for ( var i = 0; i < objJSON["tablaIPC"].length; i++) {
					tabla2+= "<tr>";
					tabla2+= "<td>Volumen</td>";
					tabla2+= "<td>" + objJSON["tablaIPC"][i].ultimoValor + "</td>";
					tabla2+= "</tr>";
					tabla2+= "<tr>";
					tabla2+= "<td>Variaci&oacute;n</td>";
					tabla2+= "<td>"; 
					if(objJSON["tablaIPC"][i].flecha == -1){
						tabla2+="<div class=\"icon_tabledown\"></div>";
					}
					else{
						tabla2+="<div class=\"icon_tableup\"></div>";
					}
					tabla2+= objJSON["tablaIPC"][i].variacionUnitaria + " (" + objJSON["tablaIPC"][i].variacionPorcentual + "%)";
					tabla2+= "</td>";
					tabla2+= "</tr>";
				}
				tabla2+= "</tbody>";
				$("#tablaIPC").empty();
				$("#tablaIPC").append('<thead><tr><th>IPC</th><th></th></tr></thead>');
				$("#tablaIPC").append(tabla2);
			}
			if(ctx.isArray(objJSON["tablaNuestraAccion"])) {	
				var tabla3="<tbody>";
				for ( var i = 0; i < objJSON["tablaNuestraAccion"].length; i++) {
					tabla3+= "<tr>";
					tabla3+= "<td>&Uacute;ltimo</td>";
					tabla3+= "<td>" + objJSON["tablaNuestraAccion"][i].ultimoActual + "</td>";
					tabla3+= "</tr>";
					tabla3+= "<tr>";
					tabla3+= "<td>Variaci&oacute;n</td>";
					tabla3+= "<td>"; 
					if(objJSON["tablaNuestraAccion"][i].flecha == -1){
						tabla3+="<div class=\"icon_tabledown\"></div>";
					}
					else{
						tabla3+="<div class=\"icon_tableup\"></div>";
					}
					tabla3+= objJSON["tablaNuestraAccion"][i].variacionUni + " (" + objJSON["tablaNuestraAccion"][i].variacionPctg + "%)";
					tabla3+= "</td>";
					tabla3+= "</tr>";
					tabla3+= "<tr>";
					tabla3+= "<td>Apertura</td>";
					tabla3+= "<td>" + objJSON["tablaNuestraAccion"][i].valorApertura + "</td>";
					tabla3+= "</tr>";
				}
				tabla3+= "</tbody>";
				$("#tablaNuestraAccion").empty();
				$("#tablaNuestraAccion").append('<thead><tr><th colspan="2">GFNORTE</th></tr></thead>');
				$("#tablaNuestraAccion").append(tabla3);	
			}		
		}
	}
};

var bmnIndicadoresFinancierosInstance = new BMNIndicadoresFinancieros({
	urlServicio: gvURLIF
});

$(function(){
	var actionDIV = '.table_vertodos';
	var moreresults = '.moreresults';		
	$(actionDIV).click(function(){
		var tableID = $(this).attr('data-table');
		$(moreresults+'[data-table="'+tableID+'"]').slideToggle('slow');
		$(actionDIV+'[data-table="'+tableID+'"] div').toggle();
	});
	
	function widget_indicadores(){
	    var indicadores = '.widget_indicadores';
	    var trigger = indicadores+ ' .indicadores_trigger';
	    var close = indicadores+' .close';
		var off = -250; var on = 10;
		$(trigger).click(function(){
			// console.log('IFN_1');
			$(indicadores).css('right', off).addClass('open').animate({ right: on }, 400, 'easeOutCubic');
			bmnIndicadoresFinancierosInstance.loadDataHome();
		});
		$(close).click(function(){
			$(indicadores).animate({
				right: off
			}, 400, 'easeInCubic', function(){
				$(this).removeClass('open').animate({ right: on }, 400, 'easeOutCubic');
			});
		});
		bmnIndicadoresResponsivoInstance.cloneResponsiveHome();
	}
	widget_indicadores();
});