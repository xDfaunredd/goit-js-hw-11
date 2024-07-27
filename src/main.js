import { renderFunc, errorFunc, lightbox } from "./js/render-functions";
import receivingDataFromServer from "./js/pixabay-api";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const inputValue = form.elements.information;
const loader = document.querySelector(".loader");

const sendRequestToServer = (event) => {
  event.preventDefault();

  loader.classList.remove("visually-hidden");

  receivingDataFromServer(inputValue.value)
    .then((data) => {
      loader.classList.add("visually-hidden");

      errorFunc(data);

      const itemsArr = renderFunc(data);

      gallery.innerHTML = "";
      gallery.insertAdjacentHTML("afterbegin", itemsArr);
      form.reset();

      lightbox.refresh();
    })
    .catch((error) => {
      console.log(error);
      loader.classList.add("visually-hidden");
    });
};

form.addEventListener("submit", sendRequestToServer);
