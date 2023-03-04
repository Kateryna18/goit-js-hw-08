import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(player)

player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
});

