import { articles } from "./data.js";

function initArticlePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));

  const article = articles.find((a) => a.id === id);

  if (!article) {
    window.location.href = "index.html";
    return;
  }
  document.title = `${article.title} | The Good Tech`;
  document.querySelector("#article-title").innerText = article.title;
  document.querySelector("#article-date").innerText =
    `Published: ${article.date}`;
  document.querySelector("#article-image").src = article.image;
  const contentElement = document.querySelector("#article-content");
  contentElement.innerHTML = article.body;

  document.querySelector("#article-badges").innerHTML = article.categories
    .map((cat) => `<span class="card-badge" data-category="${cat}">${cat}</span>`)
    .join("");
}

initArticlePage();
