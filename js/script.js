let buttons = document.querySelectorAll("main ul li button")
let playButton = document.querySelector("#play-icon")
let player = document.querySelector("#audio-player-container audio")

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", buttonHandler)
}

function buttonHandler(e) {
	let target = e.currentTarget
	let audioFileName = target.dataset.sound
	player.src = "audio/" + audioFileName + ".mp3"
	player.currentTime = 0
	player.play()
}