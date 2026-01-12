import './components/rio-assist';

export type RioAssistOptions = {
  target?: HTMLElement;
  title?: string;
  buttonLabel?: string;
  placeholder?: string;
  suggestions?: string[];
  accentColor?: string;
  apiBaseUrl?: string;
  rioToken?: string;
  floatingOffset?: number;
};

const DEFAULT_OPTIONS: Required<Omit<RioAssistOptions, 'target'>> = {
  title: 'RIO Insight',
  buttonLabel: 'Uptaime Assist',
  placeholder: 'Pergunte alguma coisa',
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
  accentColor: '#008B9A',
  apiBaseUrl: '',
  rioToken: '',
  floatingOffset: 32,
};

const widgetTagName = 'rio-assist-widget';

function ensureElement(options: RioAssistOptions = {}) {
  const {
    target = document.body,
    ...rest
  } = options;

  let widget = document.querySelector(widgetTagName) as HTMLElement | null;

  if (!widget) {
    widget = document.createElement(widgetTagName);
    target.appendChild(widget);
  }

  const topMargin = 96;
  const buttonHeight = 64;
  const viewport =
    typeof window !== 'undefined'
      ? window.innerHeight || document.documentElement.clientHeight || 0
      : 0;
  const computedFloatingOffset =
    rest.floatingOffset ??
    (viewport ? Math.max(12, viewport - topMargin - buttonHeight) : DEFAULT_OPTIONS.floatingOffset);

  const mergedOptions = { ...DEFAULT_OPTIONS, ...rest, floatingOffset: computedFloatingOffset };

  Object.entries(mergedOptions).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }

    widget?.setAttribute(
      `data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`,
      Array.isArray(value) ? value.join('|') : String(value),
    );
  });
}

declare global {
  interface Window {
    RioAssist?: {
      init: (options?: RioAssistOptions) => void;
    };
  }
}

if (typeof window !== 'undefined') {
  window.RioAssist = window.RioAssist ?? {
    init: ensureElement,
  };
  window.dispatchEvent(new Event('rio-assist-ready'));
}



