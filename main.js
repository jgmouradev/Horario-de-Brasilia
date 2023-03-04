
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataHoje = document.getElementById('dataAgora');

const dataDeHoje = setInterval(function data(){
    let now = new Date();
    let dia = now.getDate();
    let mes = now.getMonth() +1;
    let ano = now.getFullYear();
    let dataCompleta = `${dia} / ${mes} / ${ano}`;
    dataHoje.textContent = dataCompleta;
})

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if(hora < 10) hr = '0' + hora;
    if(minuto < 10) minuto = '0' + minuto;
    if(segundo < 10) segundo = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
    
})
