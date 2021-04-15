jQuery(function ($) {
  if ("ontouchstart" in window || !"ontouch" in window) {
    return;
  }

  //   //on desktop
  else {
    $(document).mousemove(function (event) {});
    $("a").hover(
      function (data) {
        let className = data.currentTarget.className;
        // $(".hoverCard").attr("src", `public/${className}.jpg`);
        let desiredMedia = $(`.hoverCard.${className}`);
        desiredMedia.addClass("showHoverCard");
        desiredMedia.trigger("play");
      },
      function (data) {
        $(".hoverCard").removeClass("showHoverCard");
        desiredMedia.trigger("pause");
      }
    );
  }
});

// jQuery(function ($) {
//   //touch screen experience
//   let fileName = location.href.split("/").slice(-1)[0];

//   if ("ontouchstart" in window || !"ontouch" in window) {
//     return;
//   }
//   //on desktop
//   else {
//     $("a").hover(
//       function (data) {
//         let className = data.currentTarget.className;

//         if ($(`.${className}-video`).length === 1) {
//           $(`.${className}-video`).trigger("play");
//           $(`.${className}-video`).addClass("show");
//         } else {
//           $(`.${className}-img`).addClass("show");
//         }
//       },
//       function (data) {
//         let className = data.currentTarget.className;
//         if ($(`.${className}-video`).length === 1) {
//           $(`.${className}-video`).trigger("pause");
//           $(`.${className}-video`).removeClass("show");
//         } else {
//           $(`.${className}-img`).removeClass("show");
//         }
//       }
//     );
//   }
// });
