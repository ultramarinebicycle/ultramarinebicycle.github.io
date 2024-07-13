const blogList = document.getElementById("blog-list");

fetch("posts.json")
  .then((response) => response.json())
  .then((posts) => {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h2 style="margin-top: 1rem; margin-bottom: 0.5rem">
        <a href="${post.url}" style="font-size: 2rem">${post.title}</a>
        </h2>
        <p>${post.date}</p>
      `;
      blogList.appendChild(listItem);
    });
  });
