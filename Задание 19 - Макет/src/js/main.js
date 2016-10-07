'use strict';

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true
    });
});

var acc = document.getElementsByClassName("accordion__button");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("accordion__button_active");
        this.nextElementSibling.classList.toggle("accordion__panel_show");
  }
}
