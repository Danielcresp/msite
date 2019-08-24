$(document).ready(function(){
    const mobileNav = () => {
        const navdropdown = document.querySelector('.navdropdown');
        const nav = document.querySelector('.navlinks');
        const navlinks = document.querySelectorAll('.navlinks li')

        navdropdown.addEventListener('click', ()=>{
            nav.classList.toggle('nav-active');
            navlinks.forEach((link, index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + .15}s`;
                }
            });

            navdropdown.classList.toggle('toggle');
        });
    }

    const smoothScroll= () => {
        var smoothScroll = $('.scroll');

        smoothScroll.click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            }, 750)
        })
    }

    smoothScroll();
    mobileNav();
        $('#iam').typeIt({
            strings: ["Web Developer...", "Backend & Fontend!"],
            speed: 200,
            breakLines: false,
            startDelay: false
        });



        // // Menu Responsive
        // var select = $("#menu");
        // var menu = $("#menu-link");
        
        // $(window).scroll(function() {
        //     if (select.offset().top && menu.offset().top > 6) {
        //         select.addClass("bg-inverse");
        //         menu.addClass("bg-inverse");
        //     }
        // });

 
            $('.ir-arriba').click(function(){
                $('body, html').animate({
                    scrollTop: '0px'
                }, 300);
            });
         
            $(window).scroll(function(){
                if( $(this).scrollTop() > 0 ){
                    $('.ir-arriba').slideDown(300);
                } else {
                    $('.ir-arriba').slideUp(300);
                }
            });
        //cambiar en menu items ACTIVE
  
            var select1 = $("#1item");
            var select2 = $("#2item");
            var select3 = $("#3item");
            var menu = $("#menu");
            var select =$("#items");
        
            $(window).scroll(function() {
              if (menu.offset().top > 15) {
                select1.addClass("active");
                select2.removeClass("active");
              }
              if(menu.offset().top > 1300){
                select1.removeClass("active");
                select2.addClass("active"); 
                select3.removeClass("active");
              }
              if(menu.offset().top > 2000){
                select2.removeClass("active");
                select3.addClass("active");
              }
                //var barra = $(window).scrollTop();
                var barrabo = $(window).scrollTop() - $(window).height();
                 var posicion = barrabo * 0.18;
        
                $('.nav-site').css({
                    'background-position': '0 ' + posicion + 'px'
                });
            });
        
        
});

