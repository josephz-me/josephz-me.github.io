jQuery(function ($) {
  $("a").hover(
    function (data) {
      let className = data.currentTarget.className;
      console.log(className);
      $(`.${className}-video`).addClass("show");
    },
    function (data) {
      let className = data.currentTarget.className;
      $(`.${className}-video`).removeClass("show");
    }
  );
});
