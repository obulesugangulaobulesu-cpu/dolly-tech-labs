const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    alert("✅ Product added to cart! (Demo)");
  });
});