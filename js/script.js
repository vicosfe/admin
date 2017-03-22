$(document).ready(function(){
	var opts = {
		cssClass : 'el-rte',
				// lang     : 'ru',
				height   : 450,
				toolbar  : 'complete',
				cssfiles : ['css/elrte-inner.css']
			}
			$('#editor').elrte(opts);
			var tabAdm = $(".tab-adm");
			var tabItem = $(".tab-item");
			$(".tab-item").not(":first").hide();
			$(tabAdm).click(function(e) {
				event.preventDefault();
				$(tabAdm).removeClass("active-panel-adm").eq($(this).index()).addClass("active-panel-adm");
				$(tabItem).hide().eq($(this).index()).fadeIn()
			}).eq(0).addClass("active-panel-adm"); 


			//Превью фото
			var	prewImgAdmPlace = $(".prewImgAdmPlace");
			prewImgAdmPlace.change(() => {
				var preview = document.querySelector('.imagePrev');
				var files   = document.querySelector('input[type=file]').files;

				function readAndPreview(file) {

    // Расширение у выбранного фото
    if ( /\.(jpe?g|png|gif)$/i.test(file.name)) {
    	var reader = new FileReader();

    	reader.addEventListener("load", function () {
    		var image = new Image();
    		/*image.height = 190;*/
    		image.title = file.name;
    		image.src = this.result;
    		preview.appendChild( image );
    	}, false);

    	reader.readAsDataURL(file);
    };

  };

  if (files) {
  	[].forEach.call(files, readAndPreview);
  };
});

		});




