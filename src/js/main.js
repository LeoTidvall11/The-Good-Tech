import "../css/styles.css";
import { articles } from "./data.js";

function renderArticles() {
  const mainContainer = document.querySelector("#main-articles");

  if (mainContainer) {
    const mainArticles = articles.filter((article) =>
      article.types.includes("main"),
    );

    mainContainer.innerHTML = mainArticles
      .map(
        (article) => `
            <a href="article.html?id=${article.id}">
            <article class="group card-article-styling">
            <div class="card-img-wrapper">
                <img src="${article.image}" alt="${article.title}" class="card-img">
                <div class="card-badge-container">
        ${article.categories
          .map(
            (cat) => `
            <span class="card-badge" data-category="${cat}">${cat}</span>
        `,
          )
          .join("")}
          </div>
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

function renderSidebar() {
  const aiContainer = document.querySelector("#ai-sidebar-cards");
  const cryptoContainer = document.querySelector("#crypto-sidebar-cards");
  const oddContainer = document.querySelector("#odd-sidebar-cards");
  const breakthroughContainer = document.querySelector(
    "#breakthroughs-sidebar-cards",
  );
  const spaceContainer = document.querySelector("#space-sidebar-cards");
  const oceanContainer = document.querySelector("#ocean-sidebar-cards");
  const energyContainer = document.querySelector("#energy-sidebar-cards");
  const sustainabilityContainer = document.querySelector(
    "#sustainability-sidebar-cards",
  );

  if (
    !aiContainer ||
    !cryptoContainer ||
    !oddContainer ||
    !breakthroughContainer ||
    !spaceContainer ||
    !oceanContainer
  )
    return;

  const aiArticles = articles.filter(
    (a) => a.types.includes("sidebar") && a.categories.includes("AI"),
  );

  aiContainer.innerHTML = aiArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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
    (a) => a.types.includes("sidebar") && a.categories.includes("Crypto"),
  );
  cryptoContainer.innerHTML = cryptoArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const oddArticles = articles.filter(
    (a) => a.types.includes("sidebar") && a.categories.includes("Odd"),
  );
  oddContainer.innerHTML = oddArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const breakthroughArticles = articles.filter(
    (a) =>
      a.types.includes("sidebar") && a.categories.includes("Breakthroughs"),
  );
  breakthroughContainer.innerHTML = breakthroughArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const spaceArticles = articles.filter(
    (a) => a.types.includes("sidebar") && a.categories.includes("Space"),
  );
  spaceContainer.innerHTML = spaceArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const oceanArticles = articles.filter(
    (a) => a.types.includes("sidebar") && a.categories.includes("Ocean"),
  );
  oceanContainer.innerHTML = oceanArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const energyArticles = articles.filter(
    (a) => a.types.includes("sidebar") && a.categories.includes("Energy"),
  );
  energyContainer.innerHTML = energyArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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

  const sustainabilityArticles = articles.filter(
    (a) =>
      a.types.includes("sidebar") && a.categories.includes("Sustainability"),
  );
  sustainabilityContainer.innerHTML = sustainabilityArticles
    .map(
      (article) => `
    <a href="article.html?id=${article.id}" class="group sidebar-card-link">
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
renderArticles();
