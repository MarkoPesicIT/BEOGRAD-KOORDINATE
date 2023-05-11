function enlargeImage(image) {
      // Create the enlarged image container
      var enlargedImageContainer = document.createElement("div");
      enlargedImageContainer.classList.add("enlarged-image");
    
      // Create the close button
      var closeButton = document.createElement("span");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "X";
    
      // Add the close button to the container
      enlargedImageContainer.appendChild(closeButton);
    
      // Create the enlarged image
      var enlargedImage = document.createElement("img");
      enlargedImage.setAttribute("src", image.src);
    
      // Add the enlarged image to the container
      enlargedImageContainer.appendChild(enlargedImage);
    
      // Add the container to the document body
      document.body.appendChild(enlargedImageContainer);
    
      // Add a click event listener to the close button
      closeButton.addEventListener("click", function() {
        document.body.removeChild(enlargedImageContainer);
      });
    }