let bodyContainer = document.getElementById("bodyContainer")

const url = './articles.json';  // Utilise './' pour désigner le fichier dans le même dossier que ton script.js

fetch(url)
  .then(response => response.json()) // On parse la réponse JSON
  .then(data => {
    console.log(data); // Afficher les articles dans la console pour vérification

    data.forEach(article => {
        let articleCard = document.createElement("div")
        articleCard.className = "articleCard"
        bodyContainer.appendChild(articleCard)

        let articleTitle = document.createElement("div")
        articleTitle.className = "articleTitle"
        articleCard.appendChild(articleTitle)

        let articleLink = document.createElement("a")
        articleLink.className = "articleLink"
        articleLink.href = article.link
        articleTitle.appendChild(articleLink)

        let articleTitleH1 = document.createElement("h1")
        articleTitleH1.textContent = article.title
        articleLink.appendChild(articleTitleH1)
    });

  })