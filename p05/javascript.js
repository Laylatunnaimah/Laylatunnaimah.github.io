$(document).ready(function () {
  var x = 1;
  for (let i = 1; i <= 3; i++) {
    $(`.isi_${i}`).css("display", "none");
    $(`.menu_${i}`).click(function () {
      $(`.isi_${i}`).slideToggle("slow");
      $(`.menu_${i}`).toggleClass("aktif");
    });
  }
});
