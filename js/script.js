(function (global) {
  $(document).ready(function() {
    
      var scrollLink = $('.scroll');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html,div.container-fluid').animate({
          
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });
      
      // Active link switching
      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        

        scrollLink.each(function() {
          
          var sectionOffset = $(this.hash).offset().top -250;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
        
      })

      $(window).scroll(function(){
          if($(this).scrollTop() > 60){
              $(".navbar").addClass("after");
          }
          else{
              $(".navbar").removeClass("after");
          }
      })
      
      window.addEventListener('scroll', scrollAppear);

      function scrollAppear(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + ($(window).height()) -200;
        var tag = $(".tag");

        //for (var i = 0; i < tags.length; i++) {
        //var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
        } else {
        $(tag).removeClass("visible");
        }
      //}
      }

      window.addEventListener('scroll', scrollAppear2);

      function scrollAppear2(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + ($(window).height()) ;
        var tag2 = $(".tag2");

        //for (var i = 0; i < tags.length; i++) {
        //var tag = tags[i];

        if ($(tag2).position().top < pageBottom) {
        $(tag2).addClass("visible");
        } else {
        $(tag2).removeClass("visible");
        }
      //}
      }

      window.addEventListener('scroll', scrollAppear5);

      function scrollAppear5(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + ($(window).height()) - 200 ;
        var tag5 = $(".tag5");

        //for (var i = 0; i < tags.length; i++) {
        //var tag = tags[i];

        if ($(tag5).position().top < pageBottom) {
        $(tag5).addClass("visible");
        } else {
        $(tag5).removeClass("visible");
        }
      //}
      }
      window.addEventListener('scroll', scrollAppear3);

      function scrollAppear3(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + ($(window).height()) -200;
        var tag3 = $(".tag3");

        //for (var i = 0; i < tags.length; i++) {
        //var tag = tags[i];

        if ($(tag3).position().top < pageBottom) {
        $(tag3).addClass("visible");
        } else {
        $(tag3).removeClass("visible");
        }
      //}
      }
      window.addEventListener('scroll', scrollAppear4);

      function scrollAppear4(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + ($(window).height()) -200;
        var tag4 = $(".tag4");

        //for (var i = 0; i < tags.length; i++) {
        //var tag = tags[i];

        if ($(tag4).position().top < pageBottom) {
        $(tag4).addClass("visible");
        } else {
        $(tag4).removeClass("visible");
        }
      //}
      }
      
      
  })

  var dc = {};
  
  document.getElementById("arrow").addEventListener('mouseover', expandArrow);
  document.getElementById("arrow").addEventListener('mouseleave', minArrow);

  function minArrow(){
    $("#arrow").removeClass("mystyle");
  }

  function expandArrow(){
    $("#arrow").addClass("mystyle");
  }
  
  const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words=words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

  }

  //Type Method
  TypeWriter.prototype.type = function(){
    //current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of the current word
    const fullTxt = this.words[current];
    //check if deleting
    if(this.isDeleting){
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
      //ad char
      this.txt = fullTxt.substring(0, this.txt.length + 1); 
    }

    //insert txt into element 
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial Type speed
    let typeSpeed = 100;

    if(this.isDeleting){
      typeSpeed /= 2;
    }


    //if word is complete
    if(!this.isDeleting && this.txt === fullTxt){
      //make a pause at end
      typeSpeed = this.wait;
      //set is deleting to true
      this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
      this.isDeleting = false;
      //move to the next word
      //this.wordIndex++;
      //pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed)
  }

  //Init on DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  //init App
  function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init Typewriter
    new TypeWriter(txtElement, words, wait);
  }

  global.$dc = dc;
})(window);
