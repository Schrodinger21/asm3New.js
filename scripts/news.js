"use strict";

const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
let totalResults = 0;
currentUser = getFormStorage("currentUser");

const getDataNews = async (country, page) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=4395e19190194dca9a0129f504188883`
    );
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
    displayNewsList(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
    alert("Error: " + error.message);
  }
};
//Gọi trang mặc định với country là "us" và là page 1
getDataNews("us", 1);

//Hiển thị News List
function displayNewsList(data) {
  totalResults = data.totalResults;
  checkPageNum();
  let html = "";
  data.articles.forEach(function (article) {
    html += `
      <div class="card flex-row flex-wrap">
        <div class="card p-3" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src=${
                article.urlToImage ? article.urlToImage : "../no-image.jpg"
              }
                class="card-img"
                alt="img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href=${article.url} target="_blank"
                  class="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  newsContainer.innerHTML = html;
}
// Kiểm tra xem có phải là trang đầu tiên hoặc trang cuối cùng không để ẩn và hiện nút Next và Prev
function checkPageNum() {
  if (pageNum.textContent === "1") {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
  if (parseInt(pageNum.textContent) * currentUser.pageSize >= totalResults) {
    console.log("The end");
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}
//Next trang
btnNext.addEventListener("click", function () {
  getDataNews("us", ++pageNum.textContent);
});
//Prev lại trang
btnPrev.addEventListener("click", function () {
  getDataNews("us", --pageNum.textContent);
});
