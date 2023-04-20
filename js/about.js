// var Messenger = function (el) {
//   "use strict";
//   var m = this;

//   m.init = function () {
//     m.codeletters = "as dfg hj";
//     m.message = 0;
//     m.current_length = 0;
//     m.fadeBuffer = false;
//     m.messages = [
//       "where you will have to create an amazing short film within the given time frame, that creates a platform for aspiring video makers, filmmakers, and enthusiasts to showcase their skills and to guide and encourage Sri Lankan youth to participate in international competitions and make our country shine on a global stage.",
//       " Get ready to be a part of the most exciting and challenging competition in Sri Lanka. ",
//       " Keep Your Gear Ready! ",
//     ];

//     setTimeout(m.animateIn, 1000);
//   };

//   m.generateRandomString = function (length) {
//     var random_text = "";
//     while (random_text.length < length) {
//       random_text += m.codeletters.charAt(
//         Math.floor(Math.random() * m.codeletters.length)
//       );
//     }

//     return random_text;
//   };

//   m.animateIn = function () {
//     if (m.current_length < m.messages[m.message].length) {
//       m.current_length = m.current_length + 2;
//       if (m.current_length > m.messages[m.message].length) {
//         m.current_length = m.messages[m.message].length;
//       }

//       var message = m.generateRandomString(m.current_length);
//       $(el).html(message);

//       setTimeout(m.animateIn, 20);
//     } else {
//       setTimeout(m.animateFadeBuffer, 20);
//     }
//   };

//   m.animateFadeBuffer = function () {
//     if (m.fadeBuffer === false) {
//       m.fadeBuffer = [];
//       for (var i = 0; i < m.messages[m.message].length; i++) {
//         m.fadeBuffer.push({
//           c: Math.floor(Math.random() * 12) + 1,
//           l: m.messages[m.message].charAt(i),
//         });
//       }
//     }

//     var do_cycles = false;
//     var message = "";

//     for (var i = 0; i < m.fadeBuffer.length; i++) {
//       var fader = m.fadeBuffer[i];
//       if (fader.c > 0) {
//         do_cycles = true;
//         fader.c--;
//         message += m.codeletters.charAt(
//           Math.floor(Math.random() * m.codeletters.length)
//         );
//       } else {
//         message += fader.l;
//       }
//     }

//     $(el).html(message);

//     if (do_cycles === true) {
//       setTimeout(m.animateFadeBuffer, 100);
//     } else {
//       setTimeout(m.cycleText, 5000);
//     }
//   };

//   m.cycleText = function () {
//     m.message = m.message + 1;
//     if (m.message >= m.messages.length) {
//       m.message = 0;
//     }

//     m.current_length = 0;
//     m.fadeBuffer = false;
//     $(el).html("");

//     setTimeout(m.animateIn, 200);
//   };

//   m.init();
// };

// console.clear();
// var messenger = new Messenger($("#messenger"));

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  "where you will have to create an amazing short film within the given time frame, that creates a platform for aspiring video makers, filmmakers, and enthusiasts to showcase their skills and to guide and encourage Sri Lankan youth to participate in international competitions.",
  "Make our country shine on a global stage",
  "Get ready to be a part of the most exciting and challenging competition in Sri Lanka. ",
  "Keep Your Gear Ready! ",
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 5000);
  });
  counter = (counter + 1) % phrases.length;
};

next();
