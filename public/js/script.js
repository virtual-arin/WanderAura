document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap form validation
  (function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  // Filter slide buttons
  const filters = document.getElementById("filters");
  const leftBtn = document.querySelector(".slide-btn-left");
  const rightBtn = document.querySelector(".slide-btn-right");

  if (filters && leftBtn && rightBtn) {
    const updateButtonVisibility = () => {
      const maxScrollLeft = filters.scrollWidth - filters.clientWidth;
      leftBtn.style.display = filters.scrollLeft > 0 ? "flex" : "none";
      rightBtn.style.display =
        filters.scrollLeft < maxScrollLeft - 1 ? "flex" : "none";
    };

    rightBtn.addEventListener("click", () => {
      filters.scrollLeft += filters.clientWidth * 0.8;
    });

    leftBtn.addEventListener("click", () => {
      filters.scrollLeft -= filters.clientWidth * 0.8;
    });

    filters.addEventListener("scroll", updateButtonVisibility);
    window.addEventListener("resize", updateButtonVisibility); // Also update on resize
    updateButtonVisibility(); // Initial check
  }
});
