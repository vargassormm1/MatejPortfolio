const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// let page = 1;
let photosArray = [];
const count = 40;

// Unsplash API
const apiKey = "lseYQqv4WUQovyUPoFXWMkmGsWOFCU2qCJ13Ui_WuQ8";
const apiUrl = `https://api.unsplash.com/users/matsefcik/photos?client_id=${apiKey}&per_page=${count}&order_by=latest`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    // Create <a> to link to full photo
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

getPhotos();
