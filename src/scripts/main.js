AOS.init();

const dataEvento = new Date("sep 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function () {
  const agora = new Date();
  const timeStampTempoAtual = agora.getTime();
  const timer = document.getElementById("contador");

  const distanciaAteEvento = timeStampEvento - timeStampTempoAtual;

  const diasMs = 1000 * 60 * 60 * 24;
  const horasMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteEvento / diasMs);
  const horasAteEvento = Math.floor((distanciaAteEvento % diasMs) / horasMs);
  const minAteEvento = Math.floor((distanciaAteEvento % horasMs) / minMs);
  const segAteEvento = Math.floor((distanciaAteEvento % minMs) / 1000);

  timer.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`;

  if (distanciaAteEvento < 0) {
    timer.innerHTML = `O Evento Já Acabou!`;

    clearInterval(contaTempo);
  }
}, 1000);
