let card = document.querySelector('.card-grid');
let currentAudio = null;
card.addEventListener('click', (e) => {
   let preAusio = new Audio();
   preAusio.pause();
   let card = e.target.closest('.card');
   var title;
   if (card) {
         title = card.querySelector('h4').innerText;
        console.log(title);
   }
    fetch('http://127.0.0.1:5500/9999_Spotify_clone/Music/songs/songs.json')
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
          for(let i = 0 ; i < 6 ; i++){
            if(data[i].title == title){
              console.log(data[i].title)
              if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0; 
                }
              currentAudio = new Audio(data[i].path);
              console.log(currentAudio);
              currentAudio.play();

            }
          }
        })

})


