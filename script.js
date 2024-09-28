document.addEventListener("DOMContentLoaded", function () {
  const ad = this.document.querySelectorAll(".p2_second_parts_frame");
  const home_btn = this.document.querySelector(".home");

  ad.forEach(function (ad) {
    ad.addEventListener("click", function () {
      const adId = ad.getAtribute("date-id");
      window.location.href = `details.html?id=${adId}`;
    });
  });
  home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
