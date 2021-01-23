jQuery(function ($) {
  //touch screen experience
  if ("ontouchstart" in window || !"ontouch" in window) {
    let desiredVideo = "thinkspace";
    $(`.${desiredVideo}-video`).trigger("play");
  }
  //on desktop
  else {
    $("a").hover(
      function (data) {
        let className = data.currentTarget.className;
        console.log(className);
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
