# Changelog

## [0.1.9] - 2025-11-26
- Adiciona renderizacao Markdown com markdown-it + task lists e sanitizacao via DOMPurify para evitar XSS.
- Atualiza templates/estilos para exibir HTML seguro no chat (listas, code block, blockquote, links com target seguro).
- Inclui configuracao de env no playground (VITE_RIO_TOKEN/VITE_RIO_API_BASE_URL) para testes locais sem depender de projeto hospedeiro.

## [0.1.8] - 2025-11-26
- Corrige sobreposição e alinhamento da barra de rolagem na coluna de conversas em tela cheia, mantendo drag e hover funcionais.
- Esconde a barra nativa no sidebar para evitar barras duplas e aproxima o track customizado dos botões de três pontos.
- Ajusta o botão “Iniciar nova conversa” na coluna para o layout compacto solicitado (altura menor, bordas suaves e ícone reduzido).

## [0.1.7] - 2025-11-26
- Ajusta auto-scroll da conversa e fixacao do footer na tela cheia.
- Centraliza conteudo principal na tela fullscreen e exibe atalho para nova conversa ao iniciar interacao.
- Reduz e compacta o balao de mensagens do usuario, aproximando texto e horario.

## [0.1.6] - 2025-11-25
- Atualiza o icone de fechamento do mini painel.
- Prepara pacote para publicacao.

## [0.1.4] - 2025-11-25
- Incrementa versao para distribuir ultimos ajustes do widget.
- Recompila bundle e prepara pacote para publicacao.

## [0.1.2] - 2025-11-25
- Atualiza o modelo padrao do agente WebSocket para `eu.amazon.nova-pro-v1:0`.
- Documentacao e bundle compilado sincronizados com o novo modelo.
