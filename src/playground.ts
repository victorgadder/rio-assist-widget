import './main';

const boot = () => {
  window.RioAssist?.init({
    title: 'Rio Insight',
    buttonLabel: 'Rio Insight',
    accentColor: '#c02267',
    rioToken: 'SEU_TOKEN_RIO_AQUI',
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



