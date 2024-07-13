const blogList = document.getElementById("blog-list");

fetch("posts.json")
  .then((response) => response.json())
  .then((posts) => {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p>${post.date}</p>
      `;
      blogList.appendChild(listItem);
    });
  });
