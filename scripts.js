
$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
          current = 0,
          elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("DESENVOLVEDOR FULLSTACK + CLOUD");
  // adicionar mais uma linha embaixo do holder

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


  sleep(4000).then(() => {
    document.getElementById('firstline').style.display = 'none';
    document.getElementById('secondline').style.display = 'inline';
    document.getElementById('secondline').className = 'blinking-cursor';
    $("#holder2").writeText("ACADEMICO DE CIÊNCIA DA COMPUTAÇÃO");
  });



  $("#fullpage").fullpage({
    navigationTooltips: ["home", "sobre mim", "portfolio", "contact"],
    anchors: ["home", "about", "portfolio", "contact"],
    menu: "#myMenu",
    fitToSection: true,
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      if (index == 2) {
        $(".skillbar").each(function () {
          $(this)
          .find(".skillbar-bar")
          .animate(
              {
                width: $(this).attr("data-percent")
              },
              2500
          );
        });
      }
    }
  });


});