fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    for (i = 0; i < data.results.length; i++) {
      let x = Math.floor(Math.random() * data.results.length);
      var images = document.getElementById('img' + i)
      let imgs = data.results[x].cover_art
      images.src = 'images/' + imgs





    }

  });
