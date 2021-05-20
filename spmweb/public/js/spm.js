    var loc = window.location.pathname;
    $(".nav .nav-item a.nav-active").each(function(){
      $( this ).parent( 'li' ).toggleClass('active', $(this).attr('href') == loc);
    });

$(document).ready(function(){ 
  
  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })  
   $("#product-slider").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      center: true,
      responsive: {
         0: {
            items: 1
         },
         640: {
            items: 3
         }
      },
   });

   $("#event-slider").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      center: true,
      items: 1,
   });

   $("#news-slider").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      center: true,
      items: 1,
   });

   $(".product-carousel-service").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="carousel-angle-right fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="carousel-angle-right fa-stack-1x fa-inverse"></i></span>'],
      center: true,
      responsive: {
         0: {
            items: 1
         },
         640: {
            items: 3
         }
      },
   });
   var owl = $('.carousel-team');
    owl.owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: true,
      margin: 10,
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
      slideBy: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768:{
          items:2
        },
        960: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    });



    $( '.filter' ).on( 'click', function() {
      var cat = $(this).attr("data-rel");
      if ( cat == 'all' ) {
        $( '.category-filter' ).removeClass( 'd-none' );
        setTimeout(function(){
          $( '.category-filter' ).removeClass( 'd-none' );
        },300);
        } 
      else {
        $( '.category-filter' ).addClass( 'd-none' );
        setTimeout(function(){
          $( '.category-filter.' + cat).removeClass( 'd-none' );
        },300);
        }
    }); 


    $(".hover-sub").hover(
      function() {
        TweenLite.to($(this).find(".hover-div"), 1, {css:{height:"100%",opacity:"0.9"}, ease:Sine.easeOut});
        $('.hover-sub-text p').addClass('t-white p-10');
        TweenLite.to($(this).find(".hover-sub-text"), 1.1, {css:{display:"initial"}, ease:Sine.easeOut});
      }, 
      function() {
        TweenLite.to($(this).find(".hover-div"), 1, {css:{height:"20%",opacity:"1"}, ease:Sine.easeOut});
        
        TweenLite.to($(this).find(".hover-sub-text"), 0.3, {css:{display:"none"}, ease:Sine.easeOut});
      }
    );
  
   var controller = new ScrollMagic.Controller();

      //background move effect
      $(".background-inner").each(function(){
      var background_move = new ScrollMagic.Scene({
        triggerElement : this,
        triggerHook : 0.6,
      })
      .setTween(TweenMax.to(this, 5, {y: '-15%', ease: Power0.easeIn}))
      .addTo(controller);
  });
/*    var parallaxTl2 = new TimelineMax();
    parallaxTl2
      .from(".bg-parallax-parent .parallax-content" , 0.4 ,{autoAlpha:0,ease:Power0.easNone},0.4)
      .to('.bg-parallax-parent .row-background .background-wrapper',10,{y:'-50%',ease:Power0.easNone},0);


    var slideParallaxScene2 = new ScrollMagic.Scene({
      triggerElement : ".bg-parallax-parent",
      triggerHook : 1,
      duration:'200%'
    })
    .setTween(parallaxTl2)
    .addTo(controller);
*/

    /*
     Headings
     */
	  /*
     Headings
     */

  $('.text-anim').not('.demo').each(function(){
    var $this = this;
    $(this).css('visibility', 'visible');
    splitWords($this);

    var headingTween = new TimelineLite()
    .staggerFrom($(this).find('span.holder'), 1.5, {ease: Power4.easeOut, y: '100%', force3D:true,rotation:0.01}, 0.10)
    .delay(0.2);
    new ScrollMagic.Scene({
        triggerHook: 0.85,
        triggerElement: $this
    })
    .addTo(controller)//.addIndicators()
    .setTween(headingTween);
  });

  $(".spm-fadeinup").each(function(){
    var fadeUpScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.85
    })
    .setTween(TweenMax.from(this, 0.8, {y: 50, opacity: 0, ease: Power1.easeIn}))
    .addTo(controller)
  });

});

/*--video--*/
document.addEventListener("DOMContentLoaded",
  function() {
      var div, n,
          v = document.getElementsByClassName("youtube-player");
      for (n = 0; n < v.length; n++) {
          div = document.createElement("div");
          div.setAttribute("data-id", v[n].dataset.id);
          div.innerHTML = labnolThumb(v[n].dataset.id);
          div.onclick = labnolIframe;
          v[n].appendChild(div);
      }
  });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" title="youtube video" alt="Youtube Video">',
        play = '<div class="play"></div>';
    return thumb.replace("ID",id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
/*--video--*/

function splitWords(element)
{
    var output = [];
    var words = $(element).html().split(' ');

    $.each( words, function( key, word ) {
        if(word.trim().length) {
            var word_output = '<span class="word"><span class="holder">'+word+'</span></span>';

            if(word_output.indexOf('<br>') > -1) {
                word_output = word_output.replace('<br>', '');
                word_output += '<br />';
            }
            output.push(word_output);
        }
    });
    $(element).html(output.join(' '));
}