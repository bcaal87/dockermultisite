// contador.js
import moment from 'moment-timezone';

export function obtenerTiempoRestante(fechaObjetivo) {
  // Obtener la hora actual en Guatemala
  const guatemalaHora = moment.tz('America/Guatemala');

  // Convertir la fecha objetivo en un objeto moment con zona horaria de Guatemala
  const fechaObjetivoMoment = moment.tz(fechaObjetivo, 'America/Guatemala');

  // Calcular la diferencia en segundos
  const diferencia = fechaObjetivoMoment.diff(guatemalaHora, 'seconds');

  // Si la fecha ya pasó, no hacemos más cálculos
  if (diferencia <= 0) {
    return {
      horasRestantes: 0,
      minutosRestantes: 0,
      segundosRestantes: 0,
      tiempoRestante: 0,
    };
  }

  // Calcular los días, horas, minutos y segundos restantes
  const diasRestantes = Math.floor(diferencia / 86400); // 86400 segundos en un día
  const horasRestantes = Math.floor((diferencia % 86400) / 3600);
  const minutosRestantes = Math.floor((diferencia % 3600) / 60);
  const segundosRestantes = diferencia % 60;

  return {
    diasRestantes,
    horasRestantes,
    minutosRestantes,
    segundosRestantes,
    tiempoRestante: diferencia,
  };
}