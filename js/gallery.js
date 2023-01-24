import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

const lgContainer = document.getElementById("inline-gallery-container");
let galleryData = lgContainer.querySelectorAll("img");
const inlineGallery = lightGallery(lgContainer, {
  container: lgContainer,
  dynamic: true,
  // Do not allow users to close the gallery
  closable: false,
  // Add maximize icon to enlarge the gallery
  showMaximizeIcon: true,
  // Append caption inside the slide item
  // to apply some animation for the captions (Optional)
  appendSubHtmlTo: ".lg-item",
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 50,
  plugins: [lgThumbnail],
  dynamicEl: [...galleryData].map((img) => ({
    src: img.src,
    thumb: img.src,
  })),
  thumbWidth: 80,
  thumbHeight: "60px",
  thumbMargin: 4,
});

inlineGallery.openGallery();
