let songsIndex = 1;
let audioElement = new Audio('song/Wohi_Khuda_Hai-Atif-Aslam.mp3');
let masterplay = document.getElementById('masterplay');
let playerbar = document.getElementById('playerbar');
let animation = document.getElementById('animation');
// let songitem = Array.from(document.getElementsByClassName('song-item'));

let songs =[
    {
        filepath:"song/Wohi_Khuda_Hai-Atif-Aslam.mp3"
    },
    {
        filepath:"song/Khwahish___Munawar_Faruqui___Official_Music_Video___Prod_by_DRJ_Sohail(128k)-1.m4a"
    },
    {
        filepath:"song/Arijit-Singh-Pachtaoge.mp3"
    },
    {
        filepath:"song/Asim-Azhar-Jo-Tu-Na-Mila.mp3"
    },
    {
        filepath:"song/ASLI-HAI-Young-Stunners-Talha_Anjum-Talhah-Yunus.m4a"
    },
    {
        filepath:"song/AUQAAT-TalhaAnjum-Talhah-Yunus.mp3"
    },
    {
        filepath:"song/BROWN_MUNDE_-_AP_DHILLON___GURINDER_GILL___SHINDA_KAHLON___GMINXR(128k).mp3"
    },
    {
        filepath:"song/Coke_Studio_Season_8_-_Tajdar-e-Haram_-_Atif_Aslam(256k).mp3"
    },
    {
        filepath:"song/Ek_Bar_Muskura_Do_-_Lyrics.m4a"
    },
    {
        filepath:"song/Hamdard_Full_Video_Song__Ek_Villain__Arijit_Singh__Mithoon(256k).mp3"
    },
    {
        filepath:"song/Hawayein - Official Lyric Video  Anushka  Shah Rukh  Pritam  Arijit.mp3"
    },
    {
        filepath:"song/Jaan_Ban_Gaye_-_Khuda_Haafiz__Vidyut_Jammwal__Shivaleeka_Oberoi_Mithoon_Ft_Vishal_Mishra,_Asees_Kaur(128k).mp3"
    },

    {
        filepath:"song/Khamoshiyan_-_Title_Song__Ali_Fazal__Sapna_Pabbi__Gurmeet_Choudhary__Arijit_Singh(256k).mp3"
    },
    {
        filepath:"song/Kuch To Hai   DO LAFZON KI KAHANI  Randeep Hooda Kajal Aggarwal  Armaan Malik Amaal Mallik.mp3"
    },
    {
        filepath:"song/PANIYON SA Full Song  Satyameva Jayate   John Abraham  Aisha Sharma  Tulsi Kumar  Atif Aslam.mp3"
    },
    {
        filepath:"song/Pardadari_-_Abida_Parveen_-_Atif_Aslam__Official_Video__BazmeRang_Chapter_1(256k).mp3"
    },
    {
        filepath:"song/WHY_NOT_-_Young_Stunners___Talha_Anjum___Talhah_Yunus_(Official_Music_Video)(128k).m4a"
    },
   
]


// Play & Pause click
masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterplay.classList.remove('bi-play-circle')
        masterplay.classList.add('bi-pause-circle')
        animation.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('bi-pause-circle')
        masterplay.classList.add('bi-play-circle')
        animation.style.opacity = 0;
    }
} )
// listen Events

audioElement.addEventListener('timeupdate', ()=>{
    // UPDATE
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    playerbar.value =progress;
})

playerbar.addEventListener('change', ()=>{
    audioElement.currentTime = playerbar.value * audioElement.duration/100;
})

// const makeAllplays = ()=>{
//     Array.from(document.getElementsByClassName('play-song')).forEach((element)=>{
//         element.classList.remove('bi-pause-circle-fill');
//         element.classList.add('bi-play-circle-fill');


//     })
// }

// Array.from(document.getElementsByClassName('play-song')).forEach((element)=>{
//     element.addEventListener('click', ()=>{
        
//         makeAllplays();
//         // songsIndex = parseInt(e.target.id);
//        classList.remove('bi-play-circle-fill');
//      classList.add('bi-pause-circle-fill');
//         audioElement.src = `song/${songsIndex}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterplay.classList.remove('bi-play-circle')
//         masterplay.classList.add('bi-pause-circle')
        
//     })
// })


let leftscroll = document.getElementById('left-scroll');
let rightscroll = document.getElementById('right-scroll');
let song =document.getElementsByClassName('song')[0];

leftscroll.addEventListener('click', ()=>{
    song.scrollLeft -= 330;
})
rightscroll.addEventListener('click', ()=>{
    song.scrollLeft += 330;
})