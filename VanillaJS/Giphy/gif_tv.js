var API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";
const contents = ["dog", "jindo", "shiba", "cat"];
const keyword = contents[Math.floor(Math.random() * contents.length)];
//contents를 3초 마다 돌아가면서 보여주면 됩니다.
// 0, 1, 2, 3 중 랜덤한 인덱스를 선택해서 찔러줍니다.

const tvArea = document.querySelector("#js-tv-area");

function searchTV() {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToTvDOM(parsedData);
  });
}

function pushToTvDOM(parsedData) {
  tvArea.innerHTML = null;
  const dataSet = parsedData.data;
  let i = 0;
  setInterval(() => {
    const imgURL = dataSet[i].images.fixed_height.url;
    tvArea.innerHTML = `<img src = "${imgURL}" class="img-center"/>`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000);
}
document.addEventListener("DOMContentLoaded", searchTV);
