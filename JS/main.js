// mario elementini tap
var marioElement = document.getElementById("mario");

var marioPositionX = 0; // Mario'nun X uzre başlangıç pozisyonunu
var marioPositionY = 0; // Mario'nun Y uzre başlangıç pozisyonunu
var marioSpeed = 30; // Mario'nun hereket sureti
var jumpHeight = 150; //150 piksele qeder yukselsin
var audio = new Audio(
  "http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav"
); // Ses dosyanızın URL'sini tanit

// Klavyeleri dinle
document.addEventListener("keydown", function (e) {
  // Sağa hareket et
  if (e.key === "ArrowRight") {
    marioPositionX += marioSpeed; //marionu X oxu uzerinnen marionun sureti qeder artmasi meselen sped 10 dusa 10,10,10 addimlasn
    marioElement.style.transform =
      "translate(" + marioPositionX + "px, " + marioPositionY + "px)";
    marioElement.classList.add("caminar");
  }

  // Sola hareket et
  if (e.key === "ArrowLeft") {
    marioPositionX -= marioSpeed; //marionu X oxu uzerinnen marionun sureti qeder azalmasi sped 10dusa 10,10,10  addm
    marioElement.style.transform =
      "translate(" +
      marioPositionX +
      "px, " +
      marioPositionY +
      "px) rotateY(180deg)";
    marioElement.classList.add("caminar");
  }

  //spacebar duymesini basanda tullansn
  if (e.code === "Space" && marioPositionY + jumpHeight > 0) {
    marioPositionY -= jumpHeight;
    marioElement.style.transform = `translate(${marioPositionX}px, ${marioPositionY}px)`;
    marioElement.classList.add("caminar");
  }

  //B duymesine basanda boyelsin
  if (e.key.toLowerCase() === "b") {
    marioElement.style.transform =
      "translate(" +
      marioPositionX +
      "px, " +
      marioPositionY +
      "px) scale(2.5)";

    // Ses çalinsin
    audio.play();
  }
});

// Klavye bıraxıldığında animasiyoni durdur
document.addEventListener("keyup", function (e) {
  marioElement.classList.remove("caminar");

  //spacebar duymesini buraxanda yerine dussun

  if (e.code === "Space") {
    marioPositionY += jumpHeight;
    marioElement.style.transform = `translate(${marioPositionX}px, ${marioPositionY}px)`;
  }

  //B duymesini buraxanda animasya dursun

  if (e.key.toLowerCase() === "b") {
    marioElement.style.transform =
      "translate(" + marioPositionX + "px, " + marioPositionY + "px) scale(1)";

    audio.pause(); // Ses dursun
    audio.currentTime = 0; // Ses başa sıfırlansin
  }
});
