import "../css/styles.css";
import { articles } from "./data.js";
function renderCategoryCarousel(category) {
  const container = document.querySelector(`#categories-carousel-${category}`);
  if (!container) return;

  const filtered = articles.filter((a) => a.categories.includes(category));

  container.innerHTML = filtered
    .map(
      (article) => `
      <a href="article.html?id=${article.id}">
        <article class="group card-article-styling">
          <div class="card-img-wrapper">
            <img src="${article.image}" alt="${article.title}" class="card-img">
            <div class="card-badge-container">
              ${article.categories
                .map(
                  (cat) =>
                    `<span class="card-badge" data-category="${cat}">${cat}</span>`,
                )
                .join("")}
            </div>
          </div>
          <div class="card-body">
            <p class="card-published">Published: ${article.date}</p>
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

function renderCategories() {
  [
    "AI",
    "Crypto",
    "Odd",
    "Breakthroughs",
    "Latest",
    "Happiest",
    "Sustainability",
    "Health",
    "Ocean",
    "Space",
    "Energy",
  ].forEach(renderCategoryCarousel);
}

renderCategories();
