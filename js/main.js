$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });
  
  function show(){

      $.getJSON("https://jsonp.afeld.me/?url=https://api.myglamapp.pl/api/categories?language=EN", function(result){
  
  console.log(result);
  var articles = result.data
 var html = '<div class="carousel-item col-md-4 active ">';
 for(let i=0;i<articles.length;i++){
   console.log(articles[i].imagePath)
  html +='<div class="card">'
  html +='<img class="card-img-top img-fluid" src="http://'+articles[i].imagePath+'" alt="Card image cap">'
  html +='<div class="card-body">'
  html +='<h4 class="card-title">'+articles[i].label+'</h4>'
  html += '<p class="card-text">'+articles[i].description+'</p>'
  html += '</div>'
  html +='</div>'
  html +='</div>'
  document.getElementById("SlideCateg").innerHTML += html;
  html = '<div class="carousel-item col-md-4 ">' 
}
  });
  }

  