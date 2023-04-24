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
    let _depth1 = `${50 - (_mouseX - _w) * 0.03}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();

// parallax scroll effect for hero section without jquery
//auto run 
window.addEventListener("scroll", parallaxScroll, false);

function parallaxScroll(e) {
  // move background Position vertically when scroll for 3 layers
  var scrolled = window.pageYOffset;
  const parallax = document.querySelector("#parallax");
  //scroll parallax from current mouse position

  // get current background position of parallax
  var curpos1 = parallax.style.backgroundPosition.split(" ");
  var curpos2 = parallax.style.backgroundPosition.split(" ");
  var curpos3 = parallax.style.backgroundPosition.split(" ");

  var _scroll1 = curpos1[0] + " " + (curpos1[2].split("%")[0] - scrolled * 0.06) + "%";
  var _scroll2 = curpos2[0] + " " + (curpos2[2].split("%")[0] - scrolled * 0.04) + "%";
  var _scroll3 = curpos3[0] + " " + (curpos3[2].split("%")[0] - scrolled * 0.02) + "%";

  console.log(_scroll1, _scroll2, _scroll3);



  // var _scroll1 = "50% " + (50 - scrolled * 0.03) + "%";
  // var _scroll2 = "50% " + (50 - scrolled * 0.02) + "%";
  // var _scroll3 = "50% " + (50 - scrolled * 0.01) + "%";

  let x = `${_scroll1}, ${_scroll2}, ${_scroll3}`; 
    parallax.style.backgroundPosition = x;



}



var messenger1 = function (el) {
  "use strict";
  var m = this;

  m.init = function () {
    m.codeletters = "snap flix<>{}   ";
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