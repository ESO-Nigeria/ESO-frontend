fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/events/")
  .then(res => res.json())
  .then(data => {
    const event = data.results[0];
    console.log("ID:", event.id, "Title:", event.title);
    return fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/events/" + encodeURIComponent(event.title) + '/');
  })
  .then(res => { console.log(res.status); return res.text() })
  .then(console.log);
