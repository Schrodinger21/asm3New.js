"use strict";

const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
let totalResults = 0;

currentUser = getFormStorage("currentUser");
//Gọi trang mặc định với country là "us" và là page 1
getNewData("us", 1);

async function getNewData(country, page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?coutry=${country}&category=${currentUser.category}&pageSize=${currentUser.pagesize}&page=${page}&apiKey=4395e19190194dca9a0129f504188883`
    );
    const data = await res.json();
    console.log(data);
    displayNewList(data);
  } catch (err) {
    alert("Error: " + err.message);
  }
}
//Hiển thị News List
function displayNewList(data) {
  totalResults = data.totalResults;
  checkPageNum();
  let html = "";
  data.articles.forEach(function (article) {
    html += `
        <div class="card flex-row flex-wrap">
					<div class="card mb-3" style="">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img src=${article.urlToImage ? article.urlToImage : "no-image.png"}
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
    console.log("oke");
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}
//Next trang
btnNext.addEventListener("click", function () {
  getNewData("us", ++pageNum.textContent);
});
//Prev lại trang
btnPrev.addEventListener("click", function () {
  getNewData("us", --pageNum.textContent);
});
