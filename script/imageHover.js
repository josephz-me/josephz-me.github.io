jQuery(function ($) {
  //touch screen experience
  if ("ontouchstart" in window || !"ontouch" in window) {
    console.log("running");
    let desiredVideo = "thinkspace";
    // let allVideos = document.querySelectorAll(
    //   "main > video:not(.thinkspace-video)"
    // );
    $(`.${desiredVideo}-video`).trigger("play");
    // console.log(allVideos[0].className);

    // for (let i = 0; i < 3; i++) {
    //   let desiredClass = `.${allVideos[i].className}`;
    //   $(desiredClass).css("display", "none");
    // }
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
