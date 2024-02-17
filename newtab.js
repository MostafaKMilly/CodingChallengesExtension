function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

async function fetchPRs() {
  const response = await fetch(
    "https://api.github.com/repos/CodingChallegesFYI/SharedSolutions/pulls"
  );
  const prs = await response.json();
  const prCounter = document.getElementById("pr-counter");
  prCounter.textContent = `There are ${prs.length} PRs open for Shared Solutions:`;
  const prList = document.getElementById("pr-list");
  prs.forEach((pr, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${pr.title}`;
    prList.appendChild(li);
  });
}

fetchPRs();
