import "../css/styles.css";
import { articles } from "./data.js";

function renderArticles() {
  const mainContainer = document.querySelector("#main-articles");

  if (mainContainer) {
    const mainArticles = articles.filter((article) => article.type === "main");

    mainContainer.innerHTML = mainArticles
      .map(
        (article) => `
            <a href="#">
            <article class="group card-article-styling">
            <div class="card-img-wrapper">
                <img src="${article.image}" alt="${article.title}" class="card-img">
                <span class="card-badge">${article.category}</span>
            </div>
            <div class="card-body">
            <p class="card-published"> Published: ${article.date}</p>
                <h3 class="card-header">
                <span class="link-underline">${article.title}</span>
                </h3>
                <p class="card-text">${article.summary}</p>
                <div class="card-read-more">
                Read the Entire Article
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="card-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg> 
          </div>
            </div>
            </article>
            </a>
        `,
      )
      .join("");
  }
}
renderArticles();

function renderSidebar() {
  const aiContainer = document.querySelector("#ai-sidebar-cards");
  const cryptoContainer = document.querySelector("#crypto-sidebar-cards");

  if (!aiContainer || !cryptoContainer) return;

  const aiArticles = articles.filter(
    (a) => a.type === "sidebar" && a.category === "AI",
  );

  aiContainer.innerHTML = aiArticles
    .map(
      (article) => `
    <a href="#" class="group sidebar-card-link">
    <article class="sidebar-card">
    <img src="${article.image}" alt="${article.title}" class="sidebar-img"/>
    <div class="sidebar-card-content">
    <p class="sidebar-published"> ${article.date}</p>
    <h4 class="group-hover:text-brand-accent sidebar-header">
    <span class="link-underline">${article.title}</span>
    </h4>
    </div>
    </article>
    </a>
    `,
    )
    .join("");

  const cryptoArticles = articles.filter(
    (a) => a.type === "sidebar" && a.category === "Crypto",
  );
  cryptoContainer.innerHTML = cryptoArticles
    .map(
      (article) => `
    <a href="#" class="group sidebar-card-link">
    <article class="sidebar-card">
    <img src="${article.image}" alt="${article.title}" class="sidebar-img"/>
    <div class="sidebar-card-content">
    <p class="sidebar-published"> ${article.date}</p>
    <h4 class="group-hover:text-brand-accent sidebar-header">
    <span class="link-underline">${article.title}</span>
    </h4>
    </div>
    </article>
    </a>
    `,
    )
    .join("");
}

renderSidebar();
