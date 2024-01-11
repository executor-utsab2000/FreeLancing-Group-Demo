
var images = ['profile _pics_about/own.jpg', 'profile _pics_about/saptarshi.jpg','profile _pics_about/ankit.jpeg','profile _pics_about/priyo.jpeg','profile _pics_about/hriju.jpg','profile _pics_about/shalini.jpg','profile _pics_about/subhomoy.jpg','profile _pics_about/rohan.jpg']; // Array of image URLs
      var intervals = [3400,3250,1900,3300,1900,2500,2950,3200,]; 
var currentIndex = 0; // Current index of the displayed image
      
function changeImage() {
  var image = document.getElementById("image_pic");
  currentIndex = (currentIndex + 1) % images.length; // Increment the index and loop back to 0 if out of bounds
  image.src = images[currentIndex]; // Set the source of the image

  // Clear the previous interval and set a new one based on the current image's interval
  clearInterval(imageInterval);
  imageInterval = setInterval(changeImage, intervals[currentIndex]);
}

// Set the initial interval
var imageInterval = setInterval(changeImage, intervals[currentIndex]);
// --------------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------------

function countAnimation(target, countEnd, duration) {
  const countElement = document.getElementById(target);
  const countStart = parseInt(countElement.innerText);
  const countIncrement = Math.ceil((countEnd - countStart) / (duration / 10));

  let currentCount = countStart;

  // Animation loop
  const countInterval = setInterval(() => {
    currentCount += countIncrement;
    countElement.innerText = currentCount;

    // Stop the animation when reaching the target count
    if (currentCount >= countEnd) {
      countElement.innerText = countEnd;
      clearInterval(countInterval);
    }
  }, 10);
}

// Start the counting animations when the page loads
window.onload = function() {
  countAnimation("client_count", 1000, 2000); // Target element ID, end count, and duration in milliseconds
  countAnimation("project_count", 250, 5000); // Target element ID, end count, and duration in milliseconds
  countAnimation("award_count", 500, 4000); // Target element ID, end count, and duration in milliseconds
  countAnimation("experience_count", 25, 6000); // Target element ID, end count, and duration in milliseconds
};


// -------------------------------------------------------------------------------------------------------------------------
// 
