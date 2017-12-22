jQuery(document).ready(function(){

    $('body').scrollspy({ target: '#navbar1' })
    
      $('.scroll-down').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
          return false;
              }
          }
      });
  
  
    function animaBox(){
      var y = $(window).scrollTop();
      console.log(y);

      
      $('.circleAnima').addClass('animated bounceInUp anima-1');
      $('.circleAnima').css({'display': 'block','float': 'left'});
      $('.imagecirclesAnima').addClass('animated bounceInDown anima-1');
      $('.imagecirclesAnima').css({'display': 'block','float': 'left'});
      $('.waveAnima').addClass('animated lightSpeedIn anima-1');
      $('.waveAnima').css({'display': 'block','float': 'left'});
      
    
      if(y > 750){ 
        $('.cheeseAnima').addClass('animated bounceInDown anima-1');
        $('.cheeseAnima').css({'display': 'block','float': 'left'});
        $('.chamadaAnima1').addClass('animated fadeInUp anima-1');
        $('.chamadaAnima1').css({'display': 'block','float': 'left'});
        $('.chamadaAnima2').addClass('animated fadeInUp anima-2');
        $('.chamadaAnima2').css({'display': 'block','float': 'left'});
        $('.chamadaAnima3').addClass('animated fadeInUp anima-3');      
        $('.chamadaAnima3').css({'display': 'block','float': 'left'});
        $('.chamadaAnima4').addClass('animated fadeInUp anima-4');      
        $('.chamadaAnima4').css({'display': 'block','float': 'left'});
        $('.chamadaAnima5').addClass('animated fadeInUp anima-5');      
        $('.chamadaAnima5').css({'display': 'block','float': 'left'});
        $('.photo01Anima').addClass('animated rotateInDownLeft anima-6');
        $('.photo01Anima').css({'display': 'block','float': 'left'});
        $('.dotsPage03Anima').addClass('animated rotateInDownRight anima-6');
        $('.dotsPage03Anima').css({'display': 'block','float': 'left'});
        $('.triangleAnima').addClass('animated bounceInUp anima-1');
        $('.triangleAnima').css({'display': 'block','float': 'left'});
      }
  
      if(y > 1500){ 
        $('.circleWavesAnima').addClass('animated bounceIn anima-1');
        $('.circleWavesAnima').css({'display': 'block','float': 'left'});
               
      }
      if (y > 2250) {
        $('.circleDotsAnima').addClass('animated zoomIn anima-1');
        $('.circleDotsAnima').css({'display': 'block','float': 'left'});
        $('.eventosAnima1').addClass('animated fadeInUp anima-1');
        $('.eventosAnima1').css({'display': 'block','float': 'left'});
        $('.eventosAnima2').addClass('animated fadeInUp anima-2');
        $('.eventosAnima2').css({'display': 'block','float': 'left'});
        $('.eventosAnima3').addClass('animated fadeInUp anima-3');
        $('.eventosAnima3').css({'display': 'block','float': 'left'});
      } 
      if (y > 3500) {
        $('.mapMarkerAnima').addClass('animated rollIn anima-1');
        $('.mapMarkerAnima').css({'display': 'block','float': 'left'});
        $('.beeAnima').addClass('animated fadeInUp anima-1');
        $('.beeAnima').css({'display': 'block'});
        $('.c21Anima').addClass('animated fadeInUp anima-2');
        $('.c21Anima').css({'display': 'block'});
      } 
    }
  
      window.onscroll=function(){
      animaBox();  
    };
    animaBox();
  
  
  
  
  }); 

