//mobile menu
const menuBtn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-collapse');
const menuLinks = document.querySelectorAll('.navbar-collapse .nav-link');
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close'); 

menuBtn.addEventListener('click', () => {
   if (menu.classList.contains('collapse')) {
       menu.classList.remove('collapse');
   } else {
       menu.classList.add('collapse');
   }
   if (menuIcon.classList.contains('d-none')) {
       menuIcon.classList.remove('d-none');
   } else {
       menuIcon.classList.add('d-none');
   }
   if (closeIcon.classList.contains('d-none')) {
       closeIcon.classList.remove('d-none');
   } else {
       closeIcon.classList.add('d-none');
   }

   //  menu.classList.toggle('collapse');
   //  menuIcon.classList.toggle('d-none');
   //  closeIcon.classList.toggle('d-none');
    
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('collapse');

        if (menuIcon.classList.contains('d-none')) {
           menuIcon.classList.remove('d-none');
       } else {
           menuIcon.classList.add('d-none');
       }
       if (closeIcon.classList.contains('d-none')) {
           closeIcon.classList.remove('d-none');
       } else {
           closeIcon.classList.add('d-none');
       }
       //  menuIcon.classList.toggle('d-none');
       //  closeIcon.classList.toggle('d-none');
    });
});

window.addEventListener('DOMContentLoaded', event => {

    




     // Navbar shrink function
     let navbarShrink = function () {
         const navbarCollapsible = document.body.querySelector('#mainNav');
         const navbarLogo = document.body.querySelector('#navbarLogo');

         if (!navbarCollapsible) {
             return;
         }
         if (window.scrollY <= 50) {
             navbarCollapsible.classList.remove('navbar-shrink');
             navbarLogo.classList.add('d-none');
         } else {
             navbarCollapsible.classList.add('navbar-shrink');
             navbarLogo.classList.remove('d-none');
         }
     };

     // Shrink the navbar 
     navbarShrink();

     // Shrink the navbar when page is scrolled
     document.addEventListener('scroll', navbarShrink);

     



     // Collapse responsive navbar when toggler is visible
     const navbarToggler = document.body.querySelector('.navbar-toggler');
     const responsiveNavItems = [].slice.call(
         document.querySelectorAll('#navbarResponsive .nav-link')
     );

     responsiveNavItems.map(function (responsiveNavItem) {
         responsiveNavItem.addEventListener('click', () => {
             if (window.getComputedStyle(navbarToggler).display !== 'none') {
                 navbarToggler.click();
             }
         });
     });

 });


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

 function parallaxScroll() {
     // move background Position vertically when scroll for 3 layers
     let scrolled = window.pageYOffset;
     const parallax = document.querySelector("#parallax");
     //scroll parallax from current mouse position
     if (parallax.style.backgroundPosition == "") {
         parallax.style.backgroundPosition = "50% 50%, 50% 50%, 50% 50%";
     }
     // console.log(parallax.style.backgroundPosition);

     // get current background position of parallax
     let curpos = parallax.style.backgroundPosition.split(", ");
     let curpos1 = curpos[0].split(" ");
     let curpos2 = curpos[1].split(" ");
     let curpos3 = curpos[2].split(" ");
     // console.log(curpos); 
     // console.log(curpos1, curpos2, curpos3);
     // let curpos2 = parallax.style.backgroundPosition.split(" ");
     // let curpos3 = parallax.style.backgroundPosition.split(" ");

     let _scroll1 = curpos1[0] + " " + (50 - scrolled * 0.06) + "%";
     let _scroll2 = curpos2[0] + " " + (50 - scrolled * 0.04) + "%";
     let _scroll3 = curpos3[0] + " " + (50 - scrolled * 0.02) + "%";

     // console.log(_scroll1, _scroll2, _scroll3);



     let x = `${_scroll1}, ${_scroll2}, ${_scroll3}`;
     parallax.style.backgroundPosition = x;
 }


 messenger1 = function (el) {
     "use strict";
     let m = this;

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
         let random_text = "";
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

             let message = m.generateRandomString(m.current_length);
             document.getElementById(el).innerHTML = message;

             setTimeout(m.animateIn, 20);
         } else {
             setTimeout(m.animateFadeBuffer, 20);
         }
     };

     m.animateFadeBuffer = function () {
         if (m.fadeBuffer === false) {
             m.fadeBuffer = [];
             for (let i = 0; i < m.messages[m.message].length; i++) {
                 m.fadeBuffer.push({
                     c: Math.floor(Math.random() * 12) + 1,
                     l: m.messages[m.message].charAt(i),
                 });
             }
         }

         let do_cycles = false;
         let message = "";

         for (let i = 0; i < m.fadeBuffer.length; i++) {
             let fader = m.fadeBuffer[i];
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

         // document.querySelector(el).html(message);
         document.getElementById(el).innerHTML = message;


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

         setTimeout(m.animateIn, 200);
     };

     m.init();
 };

 messenger1 = new messenger1('messenger1');


 /**
  * @name FlipDown
  * @description Flip styled countdown clock
  * @author Peter Butcher (PButcher) <pbutcher93[at]gmail[dot]com>
  * @param {number} uts - Time to count down to as unix timestamp
  * @param {string} el - DOM element to attach FlipDown to
  * @param {object} opt - Optional configuration settings
  **/
 class FlipDown {
     constructor(uts, el = "flipdown", opt = {}) {
         // If uts is not specified
         if (typeof uts !== "number") {
             throw new Error(
                 `FlipDown: Constructor expected unix timestamp, got ${typeof uts} instead.`
             );
         }

         // If opt is specified, but not el
         if (typeof el === "object") {
             opt = el;
             el = "flipdown";
         }

         // FlipDown version
         this.version = "0.3.2";

         // Initialised?
         this.initialised = false;

         // Time at instantiation in seconds
         this.now = this._getTime();

         // UTS to count down to
         this.epoch = uts;

         // UTS passed to FlipDown is in the past
         this.countdownEnded = false;

         // User defined callback for countdown end
         this.hasEndedCallback = null;

         // FlipDown DOM element
         this.element = document.getElementById(el);

         // Rotor DOM elements
         this.rotors = [];
         this.rotorLeafFront = [];
         this.rotorLeafRear = [];
         this.rotorTops = [];
         this.rotorBottoms = [];

         // Interval
         this.countdown = null;

         // Number of days remaining
         this.daysRemaining = 0;

         // Clock values as numbers
         this.clockValues = {};

         // Clock values as strings
         this.clockStrings = {};

         // Clock values as array
         this.clockValuesAsString = [];
         this.prevClockValuesAsString = [];

         // Parse options
         this.opts = this._parseOptions(opt);

         // Set options
         this._setOptions();

         // Print Version
         // console.log(`FlipDown ${this.version} (Theme: ${this.opts.theme})`);
     }

     /**
      * @name start
      * @description Start the countdown
      * @author PButcher
      **/
     start() {
         // Initialise the clock
         if (!this.initialised) this._init();

         // Set up the countdown interval
         this.countdown = setInterval(this._tick.bind(this), 1000);

         // Chainable
         return this;
     }

     /**
      * @name ifEnded
      * @description Call a function once the countdown ends
      * @author PButcher
      * @param {function} cb - Callback
      **/
     ifEnded(cb) {
         this.hasEndedCallback = function () {
             cb();
             this.hasEndedCallback = null;
         };

         // Chainable
         return this;
     }

     /**
      * @name _getTime
      * @description Get the time in seconds (unix timestamp)
      * @author PButcher
      **/
     _getTime() {
         return new Date().getTime() / 1000;
     }

     /**
      * @name _hasCountdownEnded
      * @description Has the countdown ended?
      * @author PButcher
      **/
     _hasCountdownEnded() {
         // Countdown has ended
         if (this.epoch - this.now < 0) {
             this.countdownEnded = true;

             // Fire the ifEnded callback once if it was set
             if (this.hasEndedCallback != null) {
                 // Call ifEnded callback
                 this.hasEndedCallback();

                 // Remove the callback
                 this.hasEndedCallback = null;
             }

             return true;

             // Countdown has not ended
         } else {
             this.countdownEnded = false;
             return false;
         }
     }

     /**
      * @name _parseOptions
      * @description Parse any passed options
      * @param {object} opt - Optional configuration settings
      * @author PButcher
      **/
     _parseOptions(opt) {
         let headings = ["Days", "Hours", "Minutes", "Seconds"];
         if (opt.headings && opt.headings.length === 4) {
             headings = opt.headings;
         }
         return {
             // Theme
             theme: opt.hasOwnProperty("theme") ? opt.theme : "dark",
             headings,
         };
     }

     /**
      * @name _setOptions
      * @description Set optional configuration settings
      * @author PButcher
      **/
     _setOptions() {
         // Apply theme
         this.element.classList.add(`flipdown__theme-${this.opts.theme}`);
     }

     /**
      * @name _init
      * @description Initialise the countdown
      * @author PButcher
      **/
     _init() {
         this.initialised = true;

         // Check whether countdown has ended and calculate how many digits the day counter needs
         if (this._hasCountdownEnded()) {
             this.daysremaining = 0;
         } else {
             this.daysremaining = Math.floor(
                 (this.epoch - this.now) / 86400
             ).toString().length;
         }
         let dayRotorCount = this.daysremaining <= 2 ? 2 : this.daysremaining;

         // Create and store rotors
         for (let i = 0; i < dayRotorCount + 6; i++) {
             this.rotors.push(this._createRotor(0));
         }

         // Create day rotor group
         let dayRotors = [];
         for (let i = 0; i < dayRotorCount; i++) {
             dayRotors.push(this.rotors[i]);
         }
         this.element.appendChild(this._createRotorGroup(dayRotors, 0));

         // Create other rotor groups
         let count = dayRotorCount;
         for (let i = 0; i < 3; i++) {
             let otherRotors = [];
             for (let j = 0; j < 2; j++) {
                 otherRotors.push(this.rotors[count]);
                 count++;
             }
             this.element.appendChild(this._createRotorGroup(otherRotors, i + 1));
         }

         // Store and convert rotor nodelists to arrays
         this.rotorLeafFront = Array.prototype.slice.call(
             this.element.getElementsByClassName("rotor-leaf-front")
         );
         this.rotorLeafRear = Array.prototype.slice.call(
             this.element.getElementsByClassName("rotor-leaf-rear")
         );
         this.rotorTop = Array.prototype.slice.call(
             this.element.getElementsByClassName("rotor-top")
         );
         this.rotorBottom = Array.prototype.slice.call(
             this.element.getElementsByClassName("rotor-bottom")
         );

         // Set initial values;
         this._tick();
         this._updateClockValues(true);

         return this;
     }

     /**
      * @name _createRotorGroup
      * @description Add rotors to the DOM
      * @author PButcher
      * @param {array} rotors - A set of rotors
      **/
     _createRotorGroup(rotors, rotorIndex) {
         let rotorGroup = document.createElement("div");
         rotorGroup.className = "rotor-group";
         let dayRotorGroupHeading = document.createElement("div");
         dayRotorGroupHeading.className = "rotor-group-heading";
         dayRotorGroupHeading.setAttribute(
             "data-before",
             this.opts.headings[rotorIndex]
         );
         rotorGroup.appendChild(dayRotorGroupHeading);
         appendChildren(rotorGroup, rotors);
         return rotorGroup;
     }

     /**
      * @name _createRotor
      * @description Create a rotor DOM element
      * @author PButcher
      * @param {number} v - Initial rotor value
      **/
     _createRotor(v = 0) {
         let rotor = document.createElement("div");
         let rotorLeaf = document.createElement("div");
         let rotorLeafRear = document.createElement("figure");
         let rotorLeafFront = document.createElement("figure");
         let rotorTop = document.createElement("div");
         let rotorBottom = document.createElement("div");
         rotor.className = "rotor";
         rotorLeaf.className = "rotor-leaf";
         rotorLeafRear.className = "rotor-leaf-rear";
         rotorLeafFront.className = "rotor-leaf-front";
         rotorTop.className = "rotor-top";
         rotorBottom.className = "rotor-bottom";
         rotorLeafRear.textContent = v;
         rotorTop.textContent = v;
         rotorBottom.textContent = v;
         appendChildren(rotor, [rotorLeaf, rotorTop, rotorBottom]);
         appendChildren(rotorLeaf, [rotorLeafRear, rotorLeafFront]);
         return rotor;
     }

     /**
      * @name _tick
      * @description Calculate current tick
      * @author PButcher
      **/
     _tick() {
         // Get time now
         this.now = this._getTime();

         // Between now and epoch
         let diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;

         // Days remaining
         this.clockValues.d = Math.floor(diff / 86400);
         diff -= this.clockValues.d * 86400;

         // Hours remaining
         this.clockValues.h = Math.floor(diff / 3600);
         diff -= this.clockValues.h * 3600;

         // Minutes remaining
         this.clockValues.m = Math.floor(diff / 60);
         diff -= this.clockValues.m * 60;

         // Seconds remaining
         this.clockValues.s = Math.floor(diff);

         // Update clock values
         this._updateClockValues();

         // Has the countdown ended?
         this._hasCountdownEnded();
     }

     /**
      * @name _updateClockValues
      * @description Update the clock face values
      * @author PButcher
      * @param {boolean} init - True if calling for initialisation
      **/
     _updateClockValues(init = false) {
         // Build clock value strings
         this.clockStrings.d = pad(this.clockValues.d, 2);
         this.clockStrings.h = pad(this.clockValues.h, 2);
         this.clockStrings.m = pad(this.clockValues.m, 2);
         this.clockStrings.s = pad(this.clockValues.s, 2);

         // Concat clock value strings
         this.clockValuesAsString = (
             this.clockStrings.d +
             this.clockStrings.h +
             this.clockStrings.m +
             this.clockStrings.s
         ).split("");

         // Update rotor values
         // Note that the faces which are initially visible are:
         // - rotorLeafFront (top half of current rotor)
         // - rotorBottom (bottom half of current rotor)
         // Note that the faces which are initially hidden are:
         // - rotorTop (top half of next rotor)
         // - rotorLeafRear (bottom half of next rotor)
         this.rotorLeafFront.forEach((el, i) => {
             el.textContent = this.prevClockValuesAsString[i];
         });

         this.rotorBottom.forEach((el, i) => {
             el.textContent = this.prevClockValuesAsString[i];
         });

         function rotorTopFlip() {
             this.rotorTop.forEach((el, i) => {
                 if (el.textContent != this.clockValuesAsString[i]) {
                     el.textContent = this.clockValuesAsString[i];
                 }
             });
         }

         function rotorLeafRearFlip() {
             this.rotorLeafRear.forEach((el, i) => {
                 if (el.textContent != this.clockValuesAsString[i]) {
                     el.textContent = this.clockValuesAsString[i];
                     el.parentElement.classList.add("flipped");
                     let flip = setInterval(
                         function () {
                             el.parentElement.classList.remove("flipped");
                             clearInterval(flip);
                         }.bind(this),
                         500
                     );
                 }
             });
         }

         // Init
         if (!init) {
             setTimeout(rotorTopFlip.bind(this), 500);
             setTimeout(rotorLeafRearFlip.bind(this), 500);
         } else {
             rotorTopFlip.call(this);
             rotorLeafRearFlip.call(this);
         }

         // Save a copy of clock values for next tick
         this.prevClockValuesAsString = this.clockValuesAsString;
     }
 }

 /**
  * @name pad
  * @description Prefix a number with zeroes
  * @author PButcher
  * @param {string} n - Number to pad
  * @param {number} len - Desired length of number
  **/
 function pad(n, len) {
     n = n.toString();
     return n.length < len ? pad("0" + n, len) : n;
 }

 /**
  * @name appendChildren
  * @description Add multiple children to an element
  * @author PButcher
  * @param {object} parent - Parent
  **/
 function appendChildren(parent, children) {
     children.forEach((el) => {
         parent.appendChild(el);
     });
 }


 document.addEventListener("DOMContentLoaded", () => {
     // Unix timestamp (in seconds) to count down to

     let customDate = new Date("2023-05-14");
     let now = new Date().getTime();
     let timeDiff = customDate.getTime() - now;
     let seconds = Math.floor(timeDiff / 1000);
     let twoDaysFromNow = new Date().getTime() / 1000 + seconds - 19800;

     // Set up FlipDown
     let flipdown = new FlipDown(twoDaysFromNow);

     // Start the countdown
     flipdown.start();

     // Do something when the countdown ends
     flipdown.ifEnded(() => {
         console.log("The countdown has ended!");
     });

 });



 class TextScramble {
     constructor(el) {
         this.el = el;
         this.chars = "!<>-_\\/[]{}—=+*^?#_";
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
             this.queue.push({
                 from,
                 to,
                 start,
                 end
             });
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
             let {
                 from,
                 to,
                 start,
                 end,
                 char
             } = this.queue[i];
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
     "SNAP FLIX is a competition that creates a platform for aspiring video makers, filmmakers, and enthusiasts to showcase their skills and to guide and encourage Sri Lankan youth to participate in international competitions.",
     "SNAP FLIX is a Short Film Hackathon where you will have to create an amazing short film within a given time frame.",

     "SNAP FLIX is Sri Lanka's First-Ever Short Film Hackathon that challenges participants to create compelling and creative films in just a limited amount of time. This event is open to all Sri Lankans aged between 18-27, and it invites filmmakers, writers, and other creatives to collaborate and compete in a high-energy, fast-paced environment"
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



 let cards = document.getElementsByClassName("card-object"),
     faceButtons = document.getElementsByClassName("face");

 for (let i = 0; i < faceButtons.length; i++) {
     faceButtons[i].addEventListener('click', flipCard);
 }

 function flipCard(event) {
     event.preventDefault();
     let btnFace = this,
         card = btnFace.closest('.card-object');
     if (card.classList.contains("flip-in")) {
         closeCards();
     } else {
         closeCards();
         openCard(card);
     }
 }

 function closeCards() {
     for (let i = 0; i < cards.length; i++) {
         if (cards[i].classList.contains("flip-in")) {
             cards[i].classList.remove("flip-in");
             cards[i].offsetHeight;
             cards[i].classList.add("flip-out");
         }
     }
 }

 function openCard(card) {
     card.classList.remove("flip-out");
     card.offsetHeight;
     card.classList.add("flip-in");
 }