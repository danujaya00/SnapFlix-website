document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to

  var customDate = new Date("2023-05-14");
  var now = new Date().getTime();
  var timeDiff = customDate.getTime() - now;
  var seconds = Math.floor(timeDiff / 1000);
  var twoDaysFromNow = new Date().getTime() / 1000 + seconds - 19800;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow);

  // Start the countdown
  flipdown.start();

  // Do something when the countdown ends
  flipdown.ifEnded(() => {
    console.log("The countdown has ended!");
  });

  var ver = document.getElementById("ver");
  ver.innerHTML = flipdown.version;
});
