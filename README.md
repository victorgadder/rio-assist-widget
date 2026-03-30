# UptAIme Assist Widget

Web Component do UptAIme Assist preparado para embutir um chat lateral em aplicações web. O widget usa `Lit`, conversa com o backend principal via WebSocket e suporta fluxo guiado do consultor, histórico de conversas, anexos e gravação de voz.

## Instalação

```bash
npm install rio-assist-widget
```

## Uso rápido

### Inicialização por script

```ts
import 'rio-assist-widget/dist/rio-assist.js';

window.RioAssist?.init({
  rioToken: '<TOKEN_RIO>',
  title: 'UptAIme Assist',
  suggestions: [
    'Resumo da Frota',
    'Frota Disponível',
    'Chamados Abertos',
    'Parados + Causas',
    'Aguardando Peças',
  ],
});
```

O método `init` injeta o elemento `<rio-assist-widget>` no final do `body`. Todos os parâmetros são opcionais, mas `rioToken` é necessário para abrir a sessão WebSocket do assistente.

### Instanciação manual

```html
<rio-assist-widget
  data-title="Meu Assistente"
  data-rio-token="<TOKEN_RIO>"
  data-ws-base-url="wss://ws.projeto-a.exemplo.com"
  data-consultant-api-base-url="https://consultor.projeto-a.exemplo.com/consultant/api/v1"
></rio-assist-widget>
```

## Principais parâmetros

- `rioToken`: token de autenticação do RIO.
- `title`: título exibido no widget.
- `buttonLabel`: label do botão principal.
- `accentColor`: cor de destaque do widget.
- `suggestions`: sugestões iniciais de perguntas.
- `wsBaseUrl`: URL base do WebSocket.
- `consultantApiBaseUrl`: URL base da API do consultor.
- `floatingButtonIconUrl`: ícone principal do botão flutuante.
- `floatingButtonLabelIconUrl`: imagem/label do botão flutuante.
- `floatingButtonBackgroundIconUrl`: imagem de fundo do botão flutuante.
- `consultantAgentButtonText`: texto do botão do consultor.
- `showConsultantAgentButton`: exibe ou oculta o botão do consultor.
- `consultantAgentInitialMessage`: mensagem inicial do fluxo do consultor.
- `autoStartConsultantFlow`: inicia automaticamente o fluxo do consultor ao abrir o widget.

## Eventos emitidos

O widget continua emitindo eventos `rioassist:*` para integração com a aplicação hospedeira:

- `rioassist:open`
- `rioassist:close`
- `rioassist:send`
- `rioassist:new-conversation`
- `rioassist:home`
- `rioassist:header-action`
- `rioassist:conversation-rename`
- `rioassist:conversation-delete`
- `rioassist:message-copy`
- `rioassist:message-update`
- `rioassist:message-like`
- `rioassist:message-unlike`
- `rioassist:message-share`
- `rioassist:message-more`

## Scripts

- `npm run dev`: inicia o ambiente local com Vite.
- `npm run build`: gera os bundles em `dist/`.
- `npm run preview`: sobe uma prévia local do build.
- `npm run typecheck`: valida o TypeScript sem emitir artefatos.
- `npm test`: executa a suíte automatizada com Vitest.

## Arquitetura resumida

A base foi reorganizada para reduzir o acoplamento do componente principal:

- `src/domain/`: tipos centrais do negócio.
- `src/application/`: fluxos, casos de uso e contratos.
- `src/services/`: adapters e integrações técnicas.
- `src/components/rio-assist/`: composição do widget e controllers de apresentação.
- `src/shared/`: utilitários reaproveitáveis.

O detalhe arquitetural atualizado está em [DOCUMENTACAO_TECNICA.md](./DOCUMENTACAO_TECNICA.md).

## Fluxos suportados

- envio e recebimento de mensagens via WebSocket
- histórico de conversas
- rename e delete de conversa
- fluxo guiado do consultor
- anexos locais
- gravação de voz com `MediaRecorder`

## Publicação

Antes de publicar no npm, rode:

```bash
npm run typecheck
npm test
npm run build
npm pack --dry-run
```

## Observações

- O token é passado ao backend principal via query string do WebSocket.
- O widget não persiste histórico localmente; o carregamento vem do backend.
- O HTML renderizado no chat passa por sanitização antes de ir para o DOM.
