import PhotoSwipeLightbox from "/js/photoswipe-lightbox.esm.min.js";
import PhotoSwipeDynamicCaption from "/js/photoswipe-dynamic-caption-plugin.esm.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () => import("/js/photoswipe.esm.min.js"),
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  type: "auto",
});

lightbox.init();
