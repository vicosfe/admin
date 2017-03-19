$(document).ready(function(){
var tabAdm = $(".tab-adm");
var tabItem = $(".tab-item");
$(".tab-item").not(":first").hide();
$(tabAdm).click(function(e) {
	event.preventDefault();
	$(tabAdm).removeClass("active-panel-adm").eq($(this).index()).addClass("active-panel-adm");
	$(tabItem).hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-panel-adm"); 
});
