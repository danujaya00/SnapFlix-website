(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-text", {
  scrollTrigger: {
    trigger: ".scroll-text",
    toggleActions: "play none none none",
    scrub: 1,
    start: "start bottom",
    end: "100% start",
    // markers:true,
  }, // start the animation when ".box" enters the viewport (once)
  x: "-210%",
  duration: 10,
});

var messenger1 = function (el) {
  "use strict";
  var m = this;

  m.init = function () {
    m.codeletters = "a ds asd";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      "Sri lanka's First-Ever Short film Hackathon.",
    ];

    setTimeout(m.animateIn, 1000);
  };

  m.generateRandomString = function (length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(
        Math.floor(Math.random() * m.codeletters.length)
      );
    }

    return random_text;
  };

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function () {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: m.messages[m.message].charAt(i),
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 100);
    } else {
      setTimeout(m.cycleText, 80000);
    }
  };

  m.cycleText = function () {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html("");

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

console.clear();
var messenger1 = new messenger1($("#messenger1"));

// var messenger2 = function(el){
//   'use strict';
//   var m = this;

//   m.init = function(){
//     m.codeletters = "as dfg hj jalfa";
//     m.message = 0;
//     m.current_length = 0;
//     m.fadeBuffer = false;
//     m.messages = [
//       'international competitions and make our country shine on a global stage.',
//     ];

//     setTimeout(m.animateIn, 1000);
//   };

//   m.generateRandomString = function(length){
//     var random_text = '';
//     while(random_text.length < length){
//       random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
//     }

//     return random_text;
//   };

//   m.animateIn = function(){
//     if(m.current_length < m.messages[m.message].length){
//       m.current_length = m.current_length + 2;
//       if(m.current_length > m.messages[m.message].length) {
//         m.current_length = m.messages[m.message].length;
//       }

//       var message = m.generateRandomString(m.current_length);
//       $(el).html(message);

//       setTimeout(m.animateIn, 20);
//     } else {
//       setTimeout(m.animateFadeBuffer, 20);
//     }
//   };

//   m.animateFadeBuffer = function(){
//     if(m.fadeBuffer === false){
//       m.fadeBuffer = [];
//       for(var i = 0; i < m.messages[m.message].length; i++){
//         m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
//       }
//     }

//     var do_cycles = false;
//     var message = '';

//     for(var i = 0; i < m.fadeBuffer.length; i++){
//       var fader = m.fadeBuffer[i];
//       if(fader.c > 0){
//         do_cycles = true;
//         fader.c--;
//         message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
//       } else {
//         message += fader.l;
//       }
//     }

//     $(el).html(message);

//     if(do_cycles === true){
//       setTimeout(m.animateFadeBuffer, 100);
//     } else {
//       setTimeout(m.cycleText,80000);
//     }
//   };

//   m.cycleText = function(){
//     m.message = m.message + 1;
//     if(m.message >= m.messages.length){
//       m.message = 0;
//     }

//     m.current_length = 0;
//     m.fadeBuffer = false;
//     $(el).html('');

//     setTimeout(m.animateIn, 200);
//   };

//   m.init();
// }

// console.clear();
// var messenger2 = new messenger2($('#messenger2'));
