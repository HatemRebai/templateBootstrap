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

     var person1 = {
      img : "./img/images/categ_lashes_home@1x.png",
      title:"Lashes & brows",
      description : "- Event makeup </br>- Make up workshop</br>- Makeup with test</br>- Nude makeup</br>- Fashion makeup</br>- Our makeup artists",
    };
    var person2 = {
      img :"./img/images/categ_nails_home@1x.png",
      title :"Nails & more",
    description :"- Event makeup </br>- Make up workshop</br>- Makeup with test</br>- Nude makeup</br>- Fashion makeup</br>- Our makeup artists",
    };
    var person3 = {
      img :"./img/images/categ_haire_style_home@1x.png",
      title :"Haire style",
    description :"- Brushing of Ay-to-d'Ay </br>- Event hairstyle</br>- trundy brushing</br>- Hairstyle with test</br>- Bun or attached</br>- Our hairdressers",
    };
    var person4 = {
      img :"./img/images/categ_wax_home@1x.png",
      title :"Categ Home",
    description :"- Brushing of Ay-to-d'Ay </br>- Event hairstyle</br>- trundy brushing</br>- Hairstyle with test</br>- Bun or attached</br>- Our hairdressers",
    };
    var person5 = {
      img :"./img/images/categ_goming_soon_home@1x.png",
      title :"Categ Soon",
      description :"- Brushing of Ay-to-d'Ay </br>- Event hairstyle</br>- trundy brushing</br>- Hairstyle with test</br>- Bun or attached</br>- Our hairdressers",
    };
 var tabCateg =[person1,person2,person3,person4,person5];
     var html = '<div class="carousel-item col-md-4 active ">';
     for(let i=0;i<tabCateg.length;i++){
      html +='<div class="card">'
      html +='<img class="card-img-top img-fluid" src='+tabCateg[i].img+' alt="Card image cap">'
      html +='<div class="card-body">'
      html +='<h4 class="card-title">'+tabCateg[i].title+'</h4>'
      html += '<p class="card-text">'+tabCateg[i].description+'</p>'
      html += '</div>'
      html +='</div>'
      html +='</div>'
      document.getElementById("SlideCateg").innerHTML += html;
      html = '<div class="carousel-item col-md-4 ">'
        console.log(html);
    }
  }
  