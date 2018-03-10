fetch(`https://lit-fortress-6467.herokuapp.com/object`)
  .then(response => response.json())
  .then(albums => {
    console.log(albums)
    for (let i = 0; i < albums.results.length; i++) {

      let playlist_box =
        `<a id="cover_art${i}" class="title" href="#"><img id="img${i}" class="albums-${i} cover-row" src="images/${albums.results[i].cover_art}"></a>`
      document.getElementById('album-bin').innerHTML += playlist_box;
    }
  })
fetch(`https://lit-fortress-6467.herokuapp.com/object`)
  .then(response => response.json())
  .then(albums => {
    for (let i = 0; i < albums.results.length; i++) {

      document.getElementById('clear_track').addEventListener('click', clear);
      document.getElementById(`cover_art${i}`).addEventListener('click', trackAddition);

      function trackAddition(e) {
        let trackBox = `
                  <p>${albums.results[i].artist}: ${albums.results[i].title}<p>`
        document.getElementById('track_box').innerHTML += trackBox;
      }

      function clear(e) {
        document.getElementById('track_box').innerHTML = "";
      }
    }
  })
