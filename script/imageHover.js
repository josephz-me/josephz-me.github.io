jQuery(function ($) {
  //touch screen experience
  if ("ontouchstart" in window || !"ontouch" in window) {
    let allVideos = document.querySelectorAll("main > video:not(.other-video)");
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
        $(`.${className}-video`).addClass("show");
      },
      function (data) {
        let className = data.currentTarget.className;
        $(`.${className}-video`).removeClass("show");
      }
    );
  }
});
