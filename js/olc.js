$(document).ready(function () {
  var kelas=$('.kelas');
  var kelaskon=$('.kelas-container');
  var warna=['#000','#fff'];
  $('.org').css({
    opacity: '0'
  });;

/* COURSES LIST ANIMATED */
$('#courses-dropdown').click(function() {
  var opened=$(this).hasClass('open')
  if (!opened) {
    $(this).find('.dropdown-menu').addClass('animated slideInDown');
  }
  else {
    $(this).find('.dropdown-menu').removeClass('animated slideInDown');
  }
});
/* COURSES BACKGROUND ON DIFFERENT SCREEN SIZE */
  if (kelaskon.width()==1000) {
    for (var i = 0; i < kelas.length; i++) {
      if (i<4) {
        if (i%2==1) {
          kelas[i].className+=' dark';
        }
        else {
          kelas[i].className+=' darker';
        }
      }
      else {
        if (i%2==0) {
          kelas[i].className+=' dark';
        }
        else {
          kelas[i].className+=' darker';
        }
      }
    }
  }
  if (kelaskon.width()==500) {
    for (var i = 0; i < kelas.length; i++) {
      if (i<2 || i==4 || i==5) {
        if (i%2==1) {
          kelas[i].className+=' dark';
        }
        else {
          kelas[i].className+=' darker';
        }
      }
      else {
        if (i%2==0) {
          kelas[i].className+=' dark';
        }
        else {
          kelas[i].className+=' darker';
        }
      }
    }
  }
  /* SMOOTH SCROLL WITH 80px FIXED NAVBAR */
     $('a[href^="#"]').not('.carousel-control').click(function(event) {
        event.preventDefault();
        var target=$($(this).attr('href'));
        if (target.length) {
          $('html, body').stop().animate({
              'scrollTop': target.offset().top - 80
          }, 400, 'swing');
        }
     });

/* CLOSE BUTTON FLYING INFO */
     $('#fly-info-close').click(function(event) {
       event.preventDefault();
       $('#fly-info').hide('400', function() {
         $('#fly-info').remove();
       });
     });

/* ANIMATED OTI AND UGM LOGO */
     $(window).scroll(function(event) {
       var s=$(window).scrollTop();
       if ($('#org').length) {
        var top=$('#org').position().top-$(window).height();
       }
       if (s>top) {
         setTimeout(function () {
           $('.org').eq(0).css({opacity: '1'});
           $('.org').eq(0).addClass('animated rubberBand');
           setTimeout(function () {
             $('.org').eq(1).css({opacity: '1'});
             $('.org').eq(1).addClass('animated bounce');
           }, 500);
         }, 1000);
       }
       else if (s< (top+$(window).height())) {
         $('.org').css({
           opacity: '0'
         });
         $('.org').removeClass('animated rubberBand bounce');
       }
     });

     /*---- COURSES PAGE DINAMIC CONTENT ----- */
     var courses=$('input[name="courses-radio"]');
     var listTitle=$('#course-list-title');
     courses.change(function() {
              /* Mengubah judul List menjadi current showed list */
              listTitle.html($(this).attr('data-course'));
              /*
              @
              @
              @ DETAIL, MATERI, DAN SOFTWARE PENDUKUNG MENGGUNAKAN AJAX
              @ JIKA KESULITAN, KONTENNYA PAKE MANUAL ARRAY GAPAPA
              @ ATAU TULIS LANGSUNG DI HTMLNYA, BIKIN SATU2, TAPI GA EFEKTIF
              @ ATAU BISA HUBUNGI AKU
              @
              @
              */
              //example using manual array:
              //saran: array ambil dari database menggunakan ajax
              //daftar course value ==> ["bp","ma","wa","wd","ugd","db","2d","3d"]
              var course=$('input[name="courses-radio"]:checked').val();
              var pemateri=$('#pemateri');
              var waktu=$('#waktu');
              var tempat=$('#tempat');

              var detail=new Array();
              detail['bp']=["M. Hanif","Setiap sabtu pukul 08.00","Ruang 205 Gedung C FMIPA UGM"];
              detail['ma']=["John Doe","Setiap sabtu pukul 13.00","Ruang 104 Gedung C FMIPA UGM"];

              var materi=new Array();
              materi['bp']=["algo","lorem","ipsum","conceur"];
              materi['ma']=["lorem","ipsum","conceur"];

              var software=new Array();
              software['bp']=['Devc++ <a href="#download" class="link">Download</a>','Sublime 3 <a href="#download" class="link">Download</a>'];
              software['ma']=["Android Studio","JDK"];

              /* Menghapus list sebelumnya*/
              $('#materi').children('li').remove();
              $('#software').children('li').remove();

              /* membuat list baru */
              pemateri.html(detail[course][0]);
              waktu.html(detail[course][1]);
              tempat.html(detail[course][2]);
              for (var i = 0; i < materi[course].length; i++) {
                  $('#materi').append('<li class="list-group-item">'+materi[course][i]+'</li>');
                }
              for (var i = 0; i < software[course].length; i++) {
                  $('#software').append('<li class="list-group-item">'+software[course][i]+'</li>');
                }
     });
 });
