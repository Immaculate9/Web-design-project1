function showImagePopup(img) {
  var imagePopup = document.getElementById("imagePopup");
  var popupImg = document.createElement("img");
  popupImg.src = img.src;
  imagePopup.innerHTML = "";
  imagePopup.appendChild(popupImg);
  imagePopup.style.display = "block";
}

function hideImagePopup() {
  var imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
}
 
    document.addEventListener("keydown", function(event) {
      // Check if the backspace key (keyCode 8) is pressed
      if (event.keyCode === 8) {
        // Prevent the default browser behavior (going back in history)
        event.preventDefault();
        // Go back to the previous page using JavaScript
        window.history.back();
      }
    });
  