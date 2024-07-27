import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// create gallery elements
const renderFunc = (data) => {
  const itemsArr = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class= "list-item">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="list-img"></a>
 <ul class = "content-list">
 <li class="content-list-item">
 <p class="content-list-title">Likes</p>
 <p class="content-list-value">${likes}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Views</p>
 <p class="content-list-value">${views}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Comments</p>
 <p class="content-list-value">${comments}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Downloads</p>
 <p class="content-list-value">${downloads}</p>
 </li>
 </ul>
    </li>
    `
    )
    .join(" ");

  return itemsArr;
};

// create error when does not find an element
const errorFunc = ({ total }) => {
  if (total === 0) {
    iziToast.error({
      message:
        "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
    });
  }
};

// lightbox initialization
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export { renderFunc, errorFunc, lightbox };
