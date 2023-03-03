import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(player)

player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
});

const currentTime = localStorage.getItem("videoplayer-current-time");
const number = +currentTime;

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime).then(function() {
    player.play();
  });
}