jQuery(function ($) {
  if ("ontouchstart" in window || !"ontouch" in window) {
    return;
  }

  //on desktop
  else {
    $(document).mousemove(function (event) {});
    let className;
    let desiredMedia;
    $("a").hover(
      function (data) {
        className = data.currentTarget.className;
        desiredMedia = $(`.${className}.hoverCard video`);
        $(`.${className}.hoverCard`).addClass("showHoverCard");
        desiredMedia.trigger("play");
      },
      function () {
        $(`.${className}.hoverCard`).removeClass("showHoverCard");
        console.log(desiredMedia);
        desiredMedia.trigger("pause");
      }
    );
  }
});
