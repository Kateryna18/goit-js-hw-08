import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_PROGRESS_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


function onProgress({seconds}) {
  localStorage.setItem(VIDEO_PROGRESS_KEY, seconds);

}

player.on('timeupdate', throttle(onProgress, 1000));

const storedTime = localStorage.getItem(VIDEO_PROGRESS_KEY);

if(storedTime) {
  player.setCurrentTime(storedTime) 
    
}


