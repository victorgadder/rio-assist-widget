# Changelog

## [0.1.14] - 2025-11-28
- Torna configuraveis os tres botoes da header em fullscreen, permitindo customizar icones e acoes via headerActions (mantem icones atuais como padrao).
- Dispara evento rioassist:header-action ao clicar em cada botao para integracao com o projeto hospedeiro.
- Adiciona evento rioassist:home no botao Home do trilho lateral e suporta data-home-url opcional para navegar automaticamente.
## [0.1.13] - 2025-11-28
- Adiciona botao de envio com icone arrowButton (40x40) dentro do campo de mensagem, permitindo clique para enviar.

## [0.1.12] - 2025-11-28
- Adiciona botao de retorno para o painel compacto na tela fullscreen, alinhado aos icones do cabecalho (usa resizeScreen.png e chama exitFullscreen(true)).
- Estiliza o novo atalho com 28x28px e posicionamento absoluto para acompanhar o ultimo botao da header, conforme mock solicitado.

## [0.1.11] - 2025-11-27
- Integra conversa real via websocket (getHistory) para listar e carregar mensagens, com logs e loading.
- Normaliza histórico intercalando usuário (message) e assistente (response), filtrando pares sem resposta.
- Atualiza conversas automaticamente após nova conversa (incluindo fullscreen) e exibe título ativo na aba.
- Gera conversationId com sufixo aleatório para evitar colisão após reinício e envia nos payloads.
- Ajustes de UI: hover/tooltip em conversas, loading no painel, alinhamento dos menus e correção do tab no fullscreen.
- Build atualizado para publicação no npm.

## [0.1.10] - 2025-11-27
- Ajusta healthcheck para responder corretamente no painel e no bundle.
- Conecta o histórico de “Minhas Conversas” a dados reais vindos do backend, exibindo informações atualizadas na interface.

## [0.1.9] - 2025-11-26
- Adiciona renderização Markdown com markdown-it + task lists e sanitização via DOMPurify para evitar XSS.
- Atualiza templates/estilos para exibir HTML seguro no chat (listas, code block, blockquote, links com target seguro).
- Inclui configuração de env no playground (VITE_RIO_TOKEN/VITE_RIO_API_BASE_URL) para testes locais sem depender de projeto hospedeiro.

## [0.1.8] - 2025-11-26
- Corrige sobreposição e alinhamento da barra de rolagem na coluna de conversas em tela cheia, mantendo drag e hover funcionais.
- Esconde a barra nativa no sidebar para evitar barras duplas e aproxima o track customizado dos botões de três pontos.
- Ajusta o botão “Iniciar nova conversa” na coluna para o layout compacto solicitado (altura menor, bordas suaves e ícone reduzido).

## [0.1.7] - 2025-11-26
- Ajusta auto-scroll da conversa e fixação do footer na tela cheia.
- Centraliza conteúdo principal na tela fullscreen e exibe atalho para nova conversa ao iniciar interação.
- Reduz e compacta o balão de mensagens do usuário, aproximando texto e horário.

## [0.1.6] - 2025-11-25
- Atualiza o ícone de fechamento do mini painel.
- Prepara pacote para publicação.

## [0.1.4] - 2025-11-25
- Incrementa versão para distribuir últimos ajustes do widget.
- Recompila bundle e prepara pacote para publicação.

## [0.1.2] - 2025-11-25
- Atualiza o modelo padrão do agente WebSocket para `eu.amazon.nova-pro-v1:0`.
- Documentação e bundle compilado sincronizados com o novo modelo.










