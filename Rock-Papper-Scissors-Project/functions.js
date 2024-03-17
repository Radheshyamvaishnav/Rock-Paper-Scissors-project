"use strict"


const stone = 'stone'
const paper = 'paper'
const scissor = 'scissor'
const frame1 = document.getElementById('frame1')
const frame2 = document.getElementById('frame2')
const frame3 = document.getElementById('frame3')
const score_board = document.getElementById('score-board')
const frame2_user_frame = document.getElementById("user-frame")
const frame2_pc_frame = document.getElementById("pc-frame")
const play_again_btn = document.getElementById('play-again-button')
const win_play_again_btn = document.getElementById('win-play-again-btn')
const status_msg = document.getElementById('status-message')
const against_pc_msg = document.getElementById('against-pc-msg')
const user_score_text = document.getElementById('user-score')
const pc_score_text = document.getElementById('pc-score')
const next_btn = document.getElementById('next-button')
const guidelines_box = document.getElementById('guidelines-box')
const frame1_stone_frame = document.getElementById("stone-frame")
const frame1_scissor_frame = document.getElementById("scissor-frame")
const frame1_papper_frame = document.getElementById("papper-frame")


function display_guidelines() {
    // console.log('Display GuideLines')
    guidelines_box.style.visibility = "visible"
}


function close_guidelines() {
    // console.log('Close Guidelines')
    guidelines_box.style.visibility = "hidden"
}

function go_to_winning_page() {
    frame1.style.visibility = 'hidden'
    frame2.style.visibility = 'hidden'
    score_board.style.visibility = 'hidden'
    next_btn.style.visibility = 'hidden'
    frame3.style.visibility = 'visible'


}


function display_stone(id_name) {
    let frame_syntx = `      
    <div id='stone-div' class="stone-block">  
        <img class="bg-image" src="images/stone-blue.png" alt="" /> 
        <img class="main-image" src="images/stone.png" alt="" />    
    </div>`
    document.getElementById(id_name).innerHTML = frame_syntx
}

function display_scissor(id_name) {
    let frame_syntx = `      
    <div id='scissor-div' class="scissor-block">
        <img class="bg-image" src="images/scissor-pink.png" alt="" />
        <img class="main-image" src="images/scissor.png" alt="" />
    </div>`
    document.getElementById(id_name).innerHTML = frame_syntx
}


function display_papper(id_name) {
    let frame_syntx = `      
    <div id="papper-div" class="papper-block">
        <img class="bg-image" src="images/paper-orange.png" alt="" />
        <img class="main-image" src="images/paper.png" alt="" />
    </div>`
    document.getElementById(id_name).innerHTML = frame_syntx
}

function play_again_btn_func() {
    frame3.style.visibility = 'hidden'
    frame2.style.visibility = 'hidden'
    frame1.style.visibility = 'visible'
    score_board.style.visibility = 'visible'
    next_btn.style.visibility = 'hidden'
}


function get_pc_input() {
    let outputs = [stone, paper, scissor]
    let random_num = Math.floor(Math.random() * 3)
    let pc_picked = outputs[random_num]
    return pc_picked
}

function setup_frame2(user_picked, pc_picked) {
    let setup_details = {
        stone: display_stone,
        paper: display_papper,
        scissor: display_scissor
    }
    setup_details[user_picked]('user-frame')
    setup_details[pc_picked]('pc-frame')
}

function main(user_picked) {

    let pc_picked = get_pc_input()
    // console.log(user_picked, pc_picked)
    frame1.style.visibility = 'hidden'
    frame2.style.visibility = 'visible'
    setup_frame2(user_picked, pc_picked)
    if (user_picked === pc_picked) {
        status_msg.innerText = 'TIE UP'
        against_pc_msg.innerText = ''
        play_again_btn.innerText = 'REPLAY'
        next_btn.style.visibility = 'hiddden'
        frame2_user_frame.firstElementChild.firstElementChild.classList.remove('green_effect')
        frame2_pc_frame.firstElementChild.firstElementChild.classList.remove('green_effect')


    }
    else if ((user_picked == stone && pc_picked == scissor)
        || (user_picked == paper && pc_picked == stone)
        || (user_picked == scissor && pc_picked == paper)) {
        status_msg.innerText = 'YOU WON'
        against_pc_msg.innerText = 'AGAINST PC'
        play_again_btn.innerText = 'PLAY AGAIN'
        let user_score = Number(user_score_text.textContent)
        user_score++
        user_score_text.innerText = user_score++
        next_btn.style.visibility = 'visible'
        frame2_user_frame.firstElementChild.firstElementChild.classList.add('green_effect')
        frame2_pc_frame.firstElementChild.firstElementChild.classList.remove('green_effect')

    }
    else {
        status_msg.innerText = 'YOU LOST'
        against_pc_msg.innerText = 'AGAINST PC'
        play_again_btn.innerText = 'PLAY AGAIN'
        let pc_score = Number(pc_score_text.textContent)
        pc_score++
        pc_score_text.innerText = pc_score
        next_btn.style.visibility = 'hidden'
        frame2_user_frame.firstElementChild.firstElementChild.classList.remove('green_effect')
        frame2_pc_frame.firstElementChild.firstElementChild.classList.add('green_effect')

    }

}


// By Default Display Frame1
frame1.style.visibility = 'visible'
frame2.style.visibility = 'hidden'
frame3.style.visibility = 'hidden'
next_btn.style.visibility = 'hidden'

// main(stone)
display_stone("stone-frame")
display_papper("papper-frame")
display_scissor("scissor-frame")


// ADD event listeners to block  for users to select
frame1_stone_frame.addEventListener('click', () => { main(stone) })
frame1_papper_frame.addEventListener('click', () => { main(paper) })
frame1_scissor_frame.addEventListener('click', () => { main(scissor) })


document.getElementById('rules-button').addEventListener('click', display_guidelines)
document.getElementById('close-block').addEventListener('click', close_guidelines)
play_again_btn.addEventListener('click', play_again_btn_func)
win_play_again_btn.addEventListener('click', play_again_btn_func)
next_btn.addEventListener('click', go_to_winning_page)