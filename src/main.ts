import './components/rio-assist';

export type RioAssistOptions = {
  target?: HTMLElement;
  title?: string;
  buttonLabel?: string;
  floatingButtonIconUrl?: string;
  floatingButtonLabelIconUrl?: string;
  floatingButtonBackgroundIconUrl?: string;
  placeholder?: string;
  suggestions?: string[];
  accentColor?: string;
  apiBaseUrl?: string;
  wsBaseUrl?: string;
  consultantApiBaseUrl?: string;
  rioToken?: string;
  floatingOffset?: number;
  consultantAgentButtonText?: string;
  showConsultantAgentButton?: boolean;
  consultantAgentInitialMessage?: string;
  autoStartConsultantFlow?: boolean;
};

const DEFAULT_OPTIONS: Required<Omit<RioAssistOptions, 'target'>> = {
  title: 'UptAIme Assist',
  buttonLabel: 'Uptaime Assist',
  floatingButtonIconUrl: '',
  floatingButtonLabelIconUrl: '',
  floatingButtonBackgroundIconUrl: '',
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
  accentColor: '#B23672',
  apiBaseUrl: '',
  wsBaseUrl: '',
  consultantApiBaseUrl: '',
  rioToken: '',
  floatingOffset: 32,
  consultantAgentButtonText: 'Consulte o UptAIme Agent',
  showConsultantAgentButton: true,
  consultantAgentInitialMessage:
    'Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.',
  autoStartConsultantFlow: false,
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

    const attributeName = `data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
    if (typeof value === 'boolean') {
      if (value) {
        widget?.setAttribute(attributeName, 'true');
      } else {
        widget?.removeAttribute(attributeName);
      }
      return;
    }

    widget?.setAttribute(
      attributeName,
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




