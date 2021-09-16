const dias1 = document.getElementById("dia");
const horas1 = document.getElementById("horas");
const mins1 = document.getElementById("mins");
const segs1 = document.getElementById("segs");

const anoNovo = "1 Jan 2022";

function contagem() {
    const anoNovoData = new Date(anoNovo);
    const dataAtual = new Date();

    const totalSegundos = (anoNovoData - dataAtual) / 1000

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const mins = Math.floor(totalSegundos / 60) % 60;
    const segs = Math.floor(totalSegundos) % 60;

    dias1.innerHTML = dias;
    horas1.innerHTML = horas;
    mins1.innerHTML = mins;
    segs1.innerHTML = segs;    
}

contagem()

setInterval(contagem, 1000)