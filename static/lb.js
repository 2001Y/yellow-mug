let img = document.querySelectorAll("main picture"),
    jpeg = document.getElementById("lightbox-jpeg"),
    lightbox = document.getElementById("lightbox");

var LbObserver = new IntersectionObserver(handle);
function handle(e) {
  e.forEach(function(a) {
    if (a.intersectionRatio) {
      lbClose();
      LbObserver.disconnect()
    }
  });
}
for (let i = 0; i < img.length; ++i) {
  img[i].onclick = function () {
    let original = this.dataset.original;
    jpeg.src = original;
    lightbox.classList.add('open');
    lightbox.classList.remove('close');
    Top.style.top = pageYOffset - 100 + "px";
    Bottom.style.top = pageYOffset + innerHeight + 100 + "px";
    LbObserver.observe(Top);
    LbObserver.observe(Bottom);
  }
}
document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    lbClose();
  }
};
function lbClose() {
  lightbox.classList.add('close');
  lightbox.classList.remove('open');
  setTimeout("lbDelete();", 500);
}
function lbDelete() {
  jpeg.src = "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7";
}