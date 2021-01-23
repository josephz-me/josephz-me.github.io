jQuery(function ($) {
  //touch screen experience
  let fileName = location.href.split("/").slice(-1)[0];

  if (
    ("ontouchstart" in window || !"ontouch" in window) &&
    fileName !== "expanded.html"
  ) {
    let desiredVideo = "thinkspace";
    $(`.${desiredVideo}-video`).trigger("play");
  }
  //on desktop
  else {
    $("a").hover(
      function (data) {
        let className = data.currentTarget.className;

        if ($(`.${className}-video`).length === 1) {
          $(`.${className}-video`).trigger("play");
          $(`.${className}-video`).addClass("show");
        } else {
          $(`.${className}-img`).addClass("show");
        }
      },
      function (data) {
        let className = data.currentTarget.className;
        if ($(`.${className}-video`).length === 1) {
          $(`.${className}-video`).trigger("pause");
          $(`.${className}-video`).removeClass("show");
        } else {
          $(`.${className}-img`).removeClass("show");
        }
      }
    );
  }
});
