const contentArea = document.querySelector(".content");
const navlinks = document.querySelectorAll(".navlink");

const renderContent = (articles) => {
  let html = "";
  articles.forEach((article) => {
    html += ` 
          <div class="newscard">
            <div class='img-placeholder'>
              <img class='card-img' src="${article.urlToImage}" />
            </div>
            <div class="card-content">
              <h4>${article.title}</h4>
              <p>${article.description}</p>
            </div>
          </div>`;
  });
  contentArea.innerHTML = html;
};

const renderError = (e) => {
  contentArea.innerHTML = `<h2 class='error'> Error Failed to get Articles <br/> ${e}</h2>`;
};

const cateSwitch = (keyword) => {
  getCategoryNews(keyword)
    .then(({ articles }) => {
      renderContent(articles);
    })
    .catch((e) => {
      renderError(e);
    });
};

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const keyword = e.target.attributes["cate"].value;
    cateSwitch(keyword);
  });
});

cateSwitch("Today");