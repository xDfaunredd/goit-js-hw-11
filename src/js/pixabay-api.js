const URL = "https://pixabay.com/api/";
const API_KEY = "45132355-1a938d4dc3b6908ed12965e8f";

const receivingDataFromServer = (requestItem) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: requestItem,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  return fetch(`${URL}?${searchParams}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

export default receivingDataFromServer;
