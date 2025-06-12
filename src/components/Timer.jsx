import { useEffect, useState } from "react";

export default function Timer() {
  const startDate = new Date("2023-12-16T23:00:00");
  const [time, setTime] = useState(getTimeDiff());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeDiff()), 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeDiff() {
    const now = new Date();
    const diff = now - startDate;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  return (
    <div className="card text-center mt-6 text-xl text-gray-700">
      Já se passaram {time.days} dias, {time.hours} horas, {time.minutes} minutos e {time.seconds} segundos desde que decidi que seria você!
    </div>
  );
}

// 2023-12-16T23:00:00 é a data de início do timer, que você pode ajustar conforme necessário. O timer calcula a diferença entre a data atual e essa data, atualizando a cada segundo. A mensagem exibe o tempo decorrido em dias, horas, minutos e segundos.