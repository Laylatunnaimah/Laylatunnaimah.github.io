$(document).ready(function () {
  for (let i = 1; i <= 3; i++) {
    $(`.isi_${i}`).css("display", "none");
    $(`.menu_${i}`).click(function () {
      $(`.isi_${i}`).slideToggle("slow");
      $(`.isi_${i}`).siblings().hide();
      $(`.menu_${i}`).css("font-weight", "bold");
      $(`.menu_${i}`).siblings().css("font-weight", "400");
    });
  }

  $(`.beranda`).click(function () {
    $(`.tentang`).slideToggle("slow");
    $(`.tentang`).siblings().hide();
    $(`.beranada`).css("font-weight", "bold");
    $(`.beranda`).siblings().css("font-weight", "400");
  });
});
