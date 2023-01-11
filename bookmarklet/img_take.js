// Get a list of all images on the page
var images = document.querySelectorAll('img');

// Create an empty array to store the unique images
var uniqueImages = [];

// Iterate over the list of images
for (var i = 0; i < images.length; i++) {
  // Check if the current image is in the uniqueImages array
  if (!uniqueImages.includes(images[i].src)) {
    // If it's not, add it to the array
    uniqueImages.push(images[i].src);
  }
}

// Clear the page content
document.body.innerHTML = '';

// Create a table element
var table = document.createElement('table');

// Create a row to hold the images
var row = document.createElement('tr');

// Iterate over the uniqueImages array
for (var i = 0; i < uniqueImages.length; i++) {
  // Create a cell for the image
  var imgCell = document.createElement('td');
  
  // Set the border, width, and height of the cell
  imgCell.style.border = '1px solid';
  imgCell.style.width = '250px';
  imgCell.style.height = '250px';
  
  // Create an img element
  var img = document.createElement('img');
  // Set the src attribute to the current image
  img.src = uniqueImages[i];
  // Add the img element to the cell
  imgCell.appendChild(img);
  
  // Add the cell to the row
  row.appendChild(imgCell);
  
  // If the current index is a multiple of 5, add the row to the table and create a new row
  if (i % 5 === 4) {
    table.appendChild(row);
    row = document.createElement('tr');
  }
}

// Add the final row to the table (if there are any remaining images)
if (row.children.length > 0) {
  table.appendChild(row);
}

// Add the table to the page
document.body.appendChild(table);
