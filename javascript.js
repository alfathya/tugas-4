'use strict';

function clear(id) {
    document.getElementById(id).value = '';
}

function login(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'kelompok-4' && password === 'kelompok-4') {
        alert('Login berhasil');
    } else {
        alert('Login gagal');
    }
    clear('username');
    clear('password');
}

function signup(e) {
    e.preventDefault();
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;
    const email = document.getElementById('email').value;
    alert('Berhasil');
    clear('username-signup');
    clear('password-signup');
    clear('email');
} 

let sepatuF = document.getElementById("sepatuF");
let sepatuB = document.getElementById("sepatuB");
let raket = document.getElementById("raket");

function milihsepatuF(){
    alert("Anda memilih sepatu futsal, ada diskon spesial hari ini!")
}

sepatuF.addEventListener("click", milihsepatuF)


function milihsepatuB(){
    alert("Stock terbatas, awas kehabisan!")
}
sepatuB.addEventListener("click", milihsepatuB)

function milihRaket(){
    alert("Diskon 10% untuk Raket Badminton, segera beli!")
}

raket.addEventListener("click", milihRaket)