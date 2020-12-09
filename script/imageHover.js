jQuery(function ($) {
  //touch screen experience
  if ("ontouchstart" in window || !"ontouch" in window) {
    let desiredVideo = "other";
    let allVideos = document.querySelectorAll("main > video:not(.other-video)");
    $(`.${desiredVideo}-video`).trigger("play");
    console.log(allVideos[0].className);

    for (let i = 0; i < 3; i++) {
      let desiredClass = `.${allVideos[i].className}`;
      $(desiredClass).css("display", "none");
    }
  }
  //on desktop
  else {
    $("a").hover(
      function (data) {
        let className = data.currentTarget.className;
        $(`.${className}-video`).trigger("play");
        $(`.${className}-video`).addClass("show");
      },
      function (data) {
        let className = data.currentTarget.className;
        $(`.${className}-video`).trigger("pause");
        $(`.${className}-video`).removeClass("show");
      }
    );
  }
});
