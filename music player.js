let playing=document.querySelector(".playing");
let trackart=document.querySelector(".track-art");
let trackname=document.querySelector(".artist-name");
let trackartist=document.querySelector(".track-artist");

let currenttime=document.querySelector(".current-time");
let seekslider=document.querySelector(".seek-slider");
let duration=document.querySelector(".duration");

let volumeslider=document.querySelector(".volume-slider");
let wave=document.querySelector("wave");

let randomtrack=document.querySelector(".random-track");
let prevtrack=document.querySelector(".prev-track");
let nexttrack=document.querySelector(".next-track");
let playtrack=document.querySelector("play-track");
let cur_track=document.createElement('audio');

let trackindex=0;
let isPlaying=false;
let isRandom=false;
let updateTimer;

const music_list={

    {
    Img='images/mu,,sic icon.png',
    name= 'takataka',
    artist= 'Alvindo',
    music='images/Alvindo_-_Taka_taka_(Official_Lyric_Video)(128k).m4a'
    }
    {
        Img='images/music icon.png',
        name= 'The spectre',
        artist= 'Alan Walker',
        music='images/Alan_Walker_-_The_Spectre(128k'
    }
        {
            Img='images/music icon.png',
            name= 'takataka',
            artist= 'Ali_kiba',
            music='images/Alikiba_-_Utu_{Track_No.14}(128k).mp3 
        }
};

loadTrack(trackindex){
    clearInterval(updateTimer );
    reset();

    cur_track.src=music_list(trackindex).music;
    cur_track.load();
    trackart. style.backgroundImage="url( " + music_list(trackindex).Img + ")"; 
    trackname.textContent=music_list[trackindex].name;
    trackartist.textContent=music_list[trackindex].artist;
    playing.textContent="playing music" + (trackindex + ;) + "of" + music_list.length;
    updateTimer=setEventListener(setUpdate, 1000);

    cur_track.addEventListener('ended', nexttrack);

}
function random_bg_color (){
    let hex=['1','2','3','4','5','7','8','a','b','c','d','e'];
    let a;
    function populate(a){
        for(let i=0;i<7; i++){
            let x =Math.round(Math.random() * 14);
            let y = hex[x];
            a+=y
        }
        return a
    }
    let color1=populate('0');
    let color2=populate('0');
    let angle = 'linear-gradient  (' + angle + ',' + color1 + ',' + color2 +')';
    document.body.style.background=gradient;
}
function reset(){
    currenttime.textContent='00:00';
    duration.textContent='00:00';
    seekslider.Value=0;
}
function randomtrack(){
    isRandom=true;
    randomicon.classlist.add('randomActive');
}
function pauseRandom(){
    isRandom=false;
    randomicon.classlist.add('randomActive');

}
function repeatTrack(){
    let current_index=trackindex;
    loadTrack(current_index);
    playing();
}
function playpauseTrack(){
    isPlaying? pauseTrack() : playtrack();
}
function playtrack(){
    cur_track.play();
    isPlaying=true;
    trackart.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHtml = ' images/images/play icon.png ';

}
function pauseTrack(){
    cur_track.pause();
    isPlaying=false;
    trackart.classList.remove('rotate');
    wave.classList.remove('loader')

}
function nextTrack(){
    if( trackindex< music_list.length - 1 &&isRandom===false){
        trackindex+=1;
    }else if (trackindex<music_list.length -1 && isRandom===true){
        let random_index=number.parseInt(math.random() + music_list.length);
    }else{
        trackindex=0;
    }
    loadTrack(trackindex)
    playtrack();
}
function prevtrack(){
    if( trackindex> 0){
        trackindex-=1;
    }else{
        trackindex=music_list.length-1;

    }
    loadTrack(trackindex);
    playtrack();
    
}
function seekTo(){
    let seekTo=cur_track.duration * (seekslider.Value/100);
}
function setvolume(){
    cur_track.volume=volumeslider.Value/100; 

}
function setUpdate(){
    let seekPosition=0;
    if ( i isNaN (cur_track.duration) ) {
        seekPosition=cur_track.currentTime* (100 /cur_track.duration);
        seekslider.volume=seekPosition;

        let currentminutes= Math.floor(cur_track.currentTime/60);
        let currSeconds=Math.floor(cur_track.currentTime= currentminutes* 60);
        let durationminutes=Math.floor(cur_track.duration / 60);
        let durationseconds= Math.floor(cur_track.duration - durationminutes*60);

        if (currentseconds<10){currentseconds="0" + currentseconds;}
        if (durationseconds<10){durationseconds="0" + duratrionseconds;}
        if (currentminutes<10){currentminutes="0"+ currentminutes;}
        if (durationminutes<10){durationminutes="0" + durationminutes;}

        cur_time.textContent=currentminutes+ ":" + currentseconds;
        total_duration.textContent=durationminutes + ":" + durationseconds;
        

    }
}