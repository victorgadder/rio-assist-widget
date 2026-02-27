# UptAIme Assist Widget

Widget lateral do UptAIme Assist embalado como Web Component. Ao receber o token de login do RIO ele abre um websocket direto para `wss://ws.volkswagen.latam-sandbox.rio.cloud?token={TOKEN}` e envia o payload

```json
{
  "action": "sendMessage",
  "message": "<mensagem do usuario>"
}
```

## Scripts
- `npm run dev` - inicia Vite para desenvolvimento.
- `npm run build` - gera `dist/rio-assist.js` pronto para CDN ou npm.
- `npm run preview` - serve o bundle de producao localmente.

## Uso rapido no navegador
```html
<script src="https://cdn.exemplo.com/rio-assist.js"></script>
<script>
  window.RioAssist.init({
    rioToken: '<TOKEN_RIO>',
    title: 'UptAIme Assist',
    buttonLabel: 'UptAIme Assist',
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
</script>
```

O metodo `init` adiciona o elemento `<rio-assist-widget>` ao final do `body`. Todos os parametros sao opcionais, mas `rioToken` precisa ser preenchido para conectar ao websocket.

## Parametrizacoes por projeto
Se nenhum parametro abaixo for informado, o widget mantem o comportamento e os visuais atuais como padrao.

- `floatingButtonIconUrl`: icone principal do botao flutuante.
- `floatingButtonLabelIconUrl`: imagem/label do botao flutuante.
- `floatingButtonBackgroundIconUrl`: imagem de fundo do botao flutuante.
- `title`: titulo exibido no mini painel e no modo tela cheia.
- `consultantAgentButtonText`: texto do botao "Consulte o UptAIme Agent".
- `showConsultantAgentButton`: controla se o botao "Consulte o UptAIme Agent" sera exibido (`true` ou `false`).
- `consultantAgentInitialMessage`: primeira mensagem enviada ao iniciar o fluxo do agente.
- `autoStartConsultantFlow`: quando `true`, ao abrir pelo botao flutuante o mini painel ja inicia o fluxo do agente consultor. Nesse modo, o botao de `+` reinicia esse mesmo fluxo, sem abrir a confirmacao de "nova conversa".

Exemplo:

```html
<script>
  window.RioAssist.init({
    rioToken: '<TOKEN_RIO>',
    title: 'Meu Assistente',
    floatingButtonIconUrl: 'https://cdn.exemplo.com/icones/projeto-a/icon.png',
    floatingButtonLabelIconUrl: 'https://cdn.exemplo.com/icones/projeto-a/label.png',
    floatingButtonBackgroundIconUrl: 'https://cdn.exemplo.com/icones/projeto-a/bg.png',
    consultantAgentButtonText: 'Falar com especialista',
    showConsultantAgentButton: true,
    consultantAgentInitialMessage:
      'Sou o agente especialista deste projeto. Vou iniciar com um resumo da sua operacao.',
    autoStartConsultantFlow: true,
  });
</script>
```

Tambem e possivel configurar via atributos `data-*` no elemento:

```html
<rio-assist-widget
  data-title="Meu Assistente"
  data-consultant-agent-button-text="Falar com especialista"
  data-show-consultant-agent-button="true"
  data-consultant-agent-initial-message="Sou o agente especialista deste projeto. Vou iniciar com um resumo da sua operacao."
  data-floating-button-icon-url="https://cdn.exemplo.com/icones/projeto-a/icon.png"
  data-floating-button-label-icon-url="https://cdn.exemplo.com/icones/projeto-a/label.png"
  data-floating-button-background-icon-url="https://cdn.exemplo.com/icones/projeto-a/bg.png"
  data-auto-start-consultant-flow="true"
></rio-assist-widget>
```

## Integracao com apps (React/Angular/Vanilla)
1. Instale:
   ```bash
   npm install rio-assist-widget
   ```
2. Importe o bundle no bootstrap (ex.: `main.tsx`):
   ```ts
   import 'rio-assist-widget/dist/rio-assist.js';

   window.RioAssist?.init({
     rioToken: '<TOKEN_RIO>',
     accentColor: '#008B9A',
   });
   ```
3. Se preferir instanciar manualmente, coloque `<rio-assist-widget></rio-assist-widget>` no HTML e defina os atributos `data-*` (`data-title`, `data-button-label`, `data-rio-token` etc.).

## Eventos disponibilizados
- `rioassist:open` / `rioassist:close` - disparados ao abrir/fechar o painel.
- `rioassist:send` - disparado quando o usuario envia uma mensagem. O `detail` contem `{ message, apiBaseUrl, token }`.

Escute esses eventos caso queira registrar logs ou interceptar mensagens antes/depois de irem para o websocket.

## Horario das mensagens
O historico exibe o horario real das mensagens recebidas do backend. Para datas anteriores, usamos um formato relativo:
- Hoje: apenas a hora.
- Ontem: "ontem" + hora.
- Entre 2 e 5 dias: dia da semana + hora.
- Mais antigo: data completa + hora.

