# RIO Insight Widget

Widget lateral do RIO Insight embalado como Web Component. Ao receber o token de login do RIO ele abre um websocket direto para `wss://ws.volkswagen.latam-sandbox.rio.cloud?token={TOKEN}` e envia o payload

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
    title: 'RIO Insight',
    buttonLabel: 'RIO Insight',
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
