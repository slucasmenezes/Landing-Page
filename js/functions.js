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
      $('.circleDotsAnima').addClass('animated zoomIn anima-1');
      $('.circleDotsAnima').css({'display': 'block','float': 'left'});
    
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
      }
  
      if(y > 2000){ 
        $('.eventosAnima1').addClass('animated fadeInUp anima-1');
        $('.eventosAnima1').css({'display': 'block','float': 'left'});
        $('.eventosAnima2').addClass('animated fadeInUp anima-2');
        $('.eventosAnima2').css({'display': 'block','float': 'left'});
        $('.eventosAnima3').addClass('animated fadeInUp anima-3');
        $('.eventosAnima3').css({'display': 'block','float': 'left'});
        $('.eventosAnima4').addClass('animated fadeInUp anima-4');
        $('.eventosAnima4').css({'display': 'block','float': 'left'});
        $('.eventosAnima5').addClass('animated fadeInUp anima-5');
        $('.eventosAnima5').css({'display': 'block','float': 'left'});
               
      } 
    }
  
      window.onscroll=function(){
      animaBox();  
    };
    animaBox();
  
  
  
  
  }); 

