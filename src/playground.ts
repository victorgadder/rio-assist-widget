import './main';

const rioToken = import.meta.env.VITE_RIO_TOKEN || 'SEU_TOKEN_RIO_AQUI';
const apiBaseUrl = import.meta.env.VITE_RIO_API_BASE_URL || '';

const boot = () => {
  window.RioAssist?.init({
    title: 'RIO Insight',
    buttonLabel: 'Uptaime Assist',
    accentColor: '#c02267',
    rioToken,
    apiBaseUrl,
    suggestions: [
      'Resumo da Frota',
      'Frota Disponível',
      'Chamados Abertos',
      'Parados + Causas',
      'Aguardando Peças',
      'Principais Gargalos',
      'Tempo por Concessionária',
      'Tempo de Ciclo',
      'Preventiva x Corretiva',
    ],
  });
};

if (window.RioAssist) {
  boot();
} else {
  window.addEventListener('rio-assist-ready', boot, { once: true });
}
