# RIO Assist Widget

Widget lateral do RIO Assist embalado como Web Component. Pode ser usado em qualquer projeto apenas carregando o script compilado ou instalando o pacote via npm.

## Scripts

- `npm run dev` – inicia Vite para desenvolvimento.
- `npm run build` – gera `dist/rio-assist.js` pronto para publicar em um CDN ou no registro npm.
- `npm run preview` – serve o bundle de produção localmente.

## Uso rápido no navegador

```html
<script src="https://cdn.exemplo.com/rio-assist.js"></script>
<script>
  window.RioAssist.init({
    apiBaseUrl: 'https://assist.seudominio.com',
    title: 'RIO Assist',
    buttonLabel: 'RIO Assist',
    suggestions: [
      'Veículos com problemas',
      'Valor das peças',
      'Planos de manutenção'
    ],
  });
</script>
```

O método `init` adiciona o elemento `<rio-assist-widget>` ao final do `body`. Todos os parâmetros são opcionais.

## Integração com apps (React/Angular/Vanilla)

1. Instale:

```bash
npm install rio-assist-widget
```

2. Importe o bundle em qualquer ponto de bootstrap (ex.: `main.tsx`):

```ts
import 'rio-assist-widget/dist/rio-assist.js';

window.RioAssist?.init({
  apiBaseUrl: 'https://assist.seudominio.com',
  accentColor: '#008B9A',
});
```

3. Se preferir instanciar manualmente, basta colocar `<rio-assist-widget></rio-assist-widget>` no HTML e definir os atributos `data-*` (`data-title`, `data-button-label` etc.).

## Eventos disponibilizados

- `rioassist:open` / `rioassist:close` – disparados ao abrir/fechar o painel.
- `rioassist:send` – disparado quando o usuário envia uma mensagem. O `detail` contém `{ message, apiBaseUrl }`.

Esses eventos permitem que o app hospedeiro envie a mensagem para o serviço de IA centralizado.
