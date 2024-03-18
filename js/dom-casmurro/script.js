// --------- * FORWARD BUTTON * ---------

let forward_button = document.querySelector(".bi-skip-forward-fill");

forward_button.addEventListener('click', () => {
    let capitulo = document.getElementById("capitulo");
    let capitulo_content = capitulo.innerHTML;
    let capitulo_splitted = capitulo_content.split(" ");
    let capitulo_number = parseInt(capitulo_splitted[1]);

    if(capitulo_number == 10) {
        capitulo_number = 1;
    }
    else {
        capitulo_number += 1;
    }

    capitulo.innerHTML = "Capitulo " + capitulo_number.toString(); // title changed

    let src_url = "./books/dom-casmurro/";
    let audio_element = document.getElementById("audio-capitulo");
    audio_element.src = src_url + capitulo_number.toString() + ".mp3";
})

// --------- * BACKWARDS BUTTON * ---------

let backwards_button = document.querySelector(".bi-skip-backward-fill");

backwards_button.addEventListener('click', () => {
    let capitulo = document.getElementById("capitulo");
    let capitulo_content = capitulo.innerHTML;
    let capitulo_splitted = capitulo_content.split(" ");
    let capitulo_number = parseInt(capitulo_splitted[1]);

    if(capitulo_number == 1) {
        capitulo_number = 10;
    }
    else {
        capitulo_number -= 1;
    }

    capitulo.innerHTML = "Capitulo " + capitulo_number.toString(); // title changed

    let src_url = "./books/dom-casmurro/";
    let audio_element = document.getElementById("audio-capitulo");
    audio_element.src = src_url + capitulo_number.toString() + ".mp3";
})

// --------- * PLAY BUTTON * ---------

let play_button = document.getElementById("play-pause");
let audio_element = document.getElementById("audio-capitulo");

play_button.addEventListener('click', () => {
    if(audio_element.paused) {
        play_button.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
        audio_element.play();
    }
    else {
        play_button.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");

        audio_element.pause();
    }
})