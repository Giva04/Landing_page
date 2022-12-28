const dia = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const chegada = "15 Jan 2023"

function countDown(){
    const dataChega = new Date(chegada)
    const hoje = new Date()
    
    const segTotal = ( dataChega - hoje)/1000;

    const finalDias = Math.floor(segTotal /60 / 60 / 24);
    const finalHoras = Math.floor(segTotal /60 /60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60 ;

    dia.innerHTML = finalDias +("D")
    hora.innerHTML = formatoTempo(finalHoras)+ ("H")
    minuto.innerHTML = formatoTempo(finalMinutos)+("M")
    segundo.innerHTML = formatoTempo(finalSegundos)+("S")
}
function formatoTempo(tempo){
    return tempo < 10? `0${tempo}`: tempo;
}
countDown();
setInterval (countDown,1000)