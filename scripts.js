
$(document).ready(function () {
  function typeText(targetSelector, content, speed) {
    const element = $(targetSelector);
    element.text("");

    let index = 0;
    const timer = setInterval(function () {
      if (index >= content.length) {
        clearInterval(timer);
        return;
      }

      element.text(element.text() + content[index]);
      index += 1;
    }, speed);
  }

  function revealElements(section) {
    const $section = $(section);
    $section.find(".reveal-up").each(function (idx) {
      const element = $(this);
      setTimeout(function () {
        element.addClass("is-visible");
      }, idx * 120);
    });
  }

  function animateSkillBars() {
    $(".skillbar").each(function () {
      const $bar = $(this).find(".skillbar-bar");
      const percent = $(this).attr("data-percent");
      $bar.css("width", "0");
      requestAnimationFrame(function () {
        $bar.css("width", percent);
      });
    });
  }

  typeText("#holder", "DESENVOLVEDOR FULLSTACK + CLOUD", 58);

  setTimeout(function () {
    document.getElementById("firstline").style.display = "none";
    document.getElementById("secondline").style.display = "inline";
    document.getElementById("secondline").className = "blinking-cursor";
    typeText("#holder2", "ACADEMICO DE CIENCIA DA COMPUTACAO", 50);
  }, 2600);

  $("#fullpage").fullpage({
    navigationTooltips: ["home", "sobre mim", "projetos", "contato"],
    anchors: ["home", "about", "projects", "contact"],
    fitToSection: true,
    scrollingSpeed: 780,
    easingcss3: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    onLeave: function (index, nextIndex, direction) {
      const leavingSection = $(".section").eq(index - 1);
      leavingSection.find(".reveal-up").removeClass("is-visible");
    },
    afterLoad: function (anchorLink, index) {
      const loadedSection = $(".section").eq(index - 1);
      revealElements(loadedSection);

      if (anchorLink === "about") {
        animateSkillBars();
      }
    }
  });

  revealElements($(".section").first());
});