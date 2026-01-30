const username = "AlinaSkultecka";

/* Only repos you WANT to show */
const featuredRepos = [
  "DataDoc",
  "ShopManager",
  "Python_Interview_Coach",
  "QuizGameWPF"
];

const container = document.getElementById("projects-grid");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    const selected = repos.filter(repo =>
      featuredRepos.includes(repo.name)
    );

    selected.forEach(repo => {
      const card = document.createElement("a");
      card.className = "project-card";
      card.href = repo.html_url;
      card.target = "_blank";

      card.innerHTML = `
        <h4>${repo.name}</h4>
        <p class="muted">
          ${repo.description || "No description yet"}
        </p>
        <div class="project-meta">
          <span>${repo.language || "—"}</span>
          <span>⭐ ${repo.stargazers_count}</span>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("GitHub API error:", err);
  });
