"use strict";

var audio = document.getElementById("audio");

function setupSeek() {
    var seek = document.getElementById("audioSeek");
    seek.min = 0;
    seek.max = Math.round(audio.duration);
    seek.value = 0;
    var duration = document.getElementById("duration");
    duration.innerHTML = "0/" + Math.round(audio.duration);
}

function togglePlay() {
    if (audio.paused || audio.ended) {
        audio.play();
    }
    else {
        audio.pause();
    }
}

function updatePlayPause() {
    var play = document.getElementById("play");
    if (audio.paused || audio.ended) {
        play.value = "Play";
    }
    else {
        play.value = "Pause";
    }
}

function endAudio() {
    document.getElementById("play").value = "Play";
    document.getElementById("audioSeek").value = 0;
    document.getElementById("duration").innerHTML = "0/" + Math.round(audio.duration);
}

// Wire-up the event handlers
audio.addEventListener("durationchange", setupSeek, false);
document.getElementById("play").addEventListener("click", togglePlay, false);
audio.addEventListener("play", updatePlayPause, false);
audio.addEventListener("pause", updatePlayPause, false);
audio.addEventListener("ended", endAudio, false);

// Support progress and seek
function seekAudio() {
    var seek = document.getElementById("audioSeek");
    audio.currentTime = seek.value;
}

function updateSeek() {
    var seek = document.getElementById("audioSeek");
    seek.value = Math.round(audio.currentTime);
    var duration = document.getElementById("duration");
    duration.innerHTML = Math.round(audio.currentTime) + "/" + Math.round(audio.duration);
}

document.getElementById("audioSeek").addEventListener("change", seekAudio, false);
audio.addEventListener("timeupdate", updateSeek, false);

// Support volume and mute
function toggleMute() {
    audio.muted = !audio.muted;
}

function updateMute() {
    var mute = document.getElementById("mute");
    if (audio.muted) {
        mute.value = "Unmute";
    }
    else {
        mute.value = "Mute";
    }
}

function setVolume() {
    var volume = document.getElementById("volume");
    audio.volume = volume.value;
}

document.getElementById("mute").addEventListener("click", toggleMute, false);
audio.addEventListener("volumechange", updateMute, false);
document.getElementById("volume").addEventListener("change", setVolume, false);

// Switch to next file
function nextFile() {
    audio.src = "Media/Sample.mp3";
    //audio.load(); needed if there are multiple sources
    audio.play();
}

document.getElementById("track2").addEventListener("click", nextFile, false);

// Add video controls
var video = document.getElementById("video");

function setupSeekVideo() {
    var seek = document.getElementById("videoSeek");
    seek.min = 0;
    seek.max = Math.round(video.duration);
    seek.value = 0;
    var duration = document.getElementById("durationVideo");
    duration.innerHTML = "0/" + Math.round(video.duration);
}

function togglePlayVideo() {
    if (video.paused || video.ended) {
        video.play();
    }
    else {
        video.pause();
    }
}

function updatePlayPauseVideo() {
    var play = document.getElementById("playVideo");
    if (video.paused || video.ended) {
        play.value = "Play";
    }
    else {
        play.value = "Pause";
    }
}

function endVideo() {
    document.getElementById("playVideo").value = "Play";
    document.getElementById("videoSeek").value = 0;
    document.getElementById("durationVideo").innerHTML = "0/" 
        + Math.round(video.duration);
}

// Wire-up the event handlers
video.addEventListener("durationchange", setupSeekVideo, false);
document.getElementById("playVideo").addEventListener("click", togglePlayVideo, false);
video.addEventListener("play", updatePlayPauseVideo, false);
video.addEventListener("pause", updatePlayPauseVideo, false);
video.addEventListener("ended", endVideo, false);

// Support progress and seek
function seekVideo() {
    var seek = document.getElementById("videoSeek");
    video.currentTime = seek.value;
}

function updateSeekVideo() {
    var seek = document.getElementById("videoSeek");
    seek.value = Math.round(video.currentTime);
    var duration = document.getElementById("durationVideo");
    duration.innerHTML = Math.round(video.currentTime) + "/" 
        + Math.round(video.duration);
}

document.getElementById("videoSeek").addEventListener("change", seekVideo, false);
video.addEventListener("timeupdate", updateSeekVideo, false);

// Support volume and mute
function toggleMuteVideo() {
    video.muted = !video.muted;
}

function updateMuteVideo() {
    var mute = document.getElementById("muteVideo");
    if (video.muted) {
        mute.value = "Unmute";
    }
    else {
        mute.value = "Mute";
    }
}

function setVolumeVideo() {
    var volume = document.getElementById("volumeVideo");
    video.volume = volume.value;
}

document.getElementById("muteVideo").addEventListener("click", toggleMuteVideo, false);
video.addEventListener("volumechange", updateMuteVideo, false);
document.getElementById("volumeVideo").addEventListener("change", setVolumeVideo, false);



