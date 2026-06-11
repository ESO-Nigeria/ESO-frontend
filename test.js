fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/articles/")
  .then(res => res.json())
  .then(data => {
    const article = data.results[0];
    console.log("ID:", article.id, "Title:", article.title);
    return fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/articles/" + encodeURIComponent(article.title) + '/');
  })
  .then(res => { console.log(res.status); return res.text() })
  .then(console.log);
