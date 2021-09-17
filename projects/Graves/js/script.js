$(document).ready(function() {
  $(".w3-card-2").hover(function() { // changes height and width of cards when hovered
    $(this).css("height", "600px")
      .css("width", "450px");
  }, function () { // changes height and width of cards back when no longer hovered
      $(this).css("height", "500px")
        .css("width", "400px");
  })

  $(".contact-id").focus (function() { // gives input full border while typing in box
    $(this).css("border-style", "solid")
      .css("border-bottom", "solid");
  })

  $(".contact-id").focusout (function() { // takes away previous border attributes and restores old borders
    $(this).css("border", "none")
      .css("border-bottom", "1px solid #ddd");
  })
});
