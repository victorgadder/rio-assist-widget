import './main';

const rioToken = import.meta.env.VITE_RIO_TOKEN || 'SEU_TOKEN_RIO_AQUI';
const apiBaseUrl = import.meta.env.VITE_RIO_API_BASE_URL || '';

const boot = () => {
  window.RioAssist?.init({
    title: 'Rio Insight',
    buttonLabel: 'Rio Insight',
    accentColor: '#c02267',
    rioToken,
    apiBaseUrl,
    suggestions: [
      'Veículos com problemas',
      'Valor das peças',
      'Planos de manutenção',
    ],
  });
};

if (window.RioAssist) {
  boot();
} else {
  window.addEventListener('rio-assist-ready', boot, { once: true });
}
