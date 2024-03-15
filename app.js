const yourDate = new Date("2022-12-04T01:10:24"),
music = ['boo'];


document.addEventListener('DOMContentLoaded', function(){
    // Khai báo danh sách nhạc
    const playlist = document.querySelectorAll('.song');

    // Hàm chuyển đổi giữa các bài hát
    function switchSong(song) {
        const audio = document.querySelector("audio");
        const imgSrc = song.getAttribute('data-img');
        const audioSrc = song.getAttribute('data-src');

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
