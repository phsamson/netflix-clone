function toggleTrailer() {
     const trailer = document.querySelector(".movieTrailer");
     const video = document.querySelector(".movieTrailer__video");
     const playTrailerbtn = document.querySelector(".content__playTrailerbtn");
     const closeTrailerbtn = document.querySelector(".movieTrailer__closebtn");

     playTrailerbtn.addEventListener("click", function() {
          trailer.classList.add('active');
          video.play();
     });

     closeTrailerbtn.addEventListener("click", function() {
          trailer.classList.remove('active');
          video.pause();
     });

}

toggleTrailer();