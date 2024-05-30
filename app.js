const yourDate = new Date("2022-12-04T01:10:24"),
music = ['boo','Perfect'];


document.addEventListener('DOMContentLoaded', function(){
    // Khai báo danh sách nhạc
    const playlist = document.querySelectorAll('Bài hát hay nghe ^^');

    // Hàm chuyển đổi giữa các bài hát
    function switchSong(song) {
        const audio = document.querySelector("Perfect");
        const imgSrc = song.getAttribute('Perfect.jpg');
        const audioSrc = song.getAttribute('Perfect.mp3');

        document.getElementById('mask').style.backgroundImage = `url('${imgSrc}')`;
        audio.src = audioSrc;
        audio.play();
    }

    // Lắng nghe sự kiện click trên nút Show Playlist
    document.getElementById('showPlaylist').addEventListener('click', function() {
        document.getElementById('playlist').classList.toggle('show');
    });

    // Lắng nghe sự kiện click trên các bài hát trong danh sách
    playlist.forEach(song => {
        song.addEventListener('click', function() {
            switchSong(this);
        });
    });

    // Các hàm khác ở đây...
});

// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Handle music button click
document.getElementById('music-button').addEventListener('click', function() {
  // Code to show music player interface
});

// Handle change background button click
document.getElementById('change-background').addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
});





//Hàm đếm ngày yêu
document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" NGÀY";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
