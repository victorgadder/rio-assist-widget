# Changelog

## [0.1.18] - 2025-11-28
- Adiciona dialogo de confirmacao antes de excluir conversa (Cancelar/Excluir) a partir do menu de tres pontos.
- Continua emitindo 
rioassist:conversation-delete; ao confirmar, remove localmente via applyConversationDeletion.

## [0.1.17] - 2025-11-28
- Exibe mensagem de erro na lista de conversas quando a carga do historico falhar (requestConversationHistory).

## [0.1.16] - 2025-11-28
- Aciona eventos reais nos botoes de menu de conversa (tres pontos): rioassist:conversation-rename e rioassist:conversation-delete com detalhes da conversa.
- Adiciona helpers applyConversationRename e applyConversationDeletion para atualizar o estado local apos sucesso no backend (renomear titulo e remover conversa/estado ativo).

## [0.1.15] - 2025-11-28
- Carrega a lista de conversas ao entrar na tela fullscreen para evitar sidebar vazia na primeira abertura.

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
- Normaliza hist�rico intercalando usu�rio (message) e assistente (response), filtrando pares sem resposta.
- Atualiza conversas automaticamente ap�s nova conversa (incluindo fullscreen) e exibe t�tulo ativo na aba.
- Gera conversationId com sufixo aleat�rio para evitar colis�o ap�s rein�cio e envia nos payloads.
- Ajustes de UI: hover/tooltip em conversas, loading no painel, alinhamento dos menus e corre��o do tab no fullscreen.
- Build atualizado para publica��o no npm.

## [0.1.10] - 2025-11-27
- Ajusta healthcheck para responder corretamente no painel e no bundle.
- Conecta o hist�rico de �Minhas Conversas� a dados reais vindos do backend, exibindo informa��es atualizadas na interface.

## [0.1.9] - 2025-11-26
- Adiciona renderiza��o Markdown com markdown-it + task lists e sanitiza��o via DOMPurify para evitar XSS.
- Atualiza templates/estilos para exibir HTML seguro no chat (listas, code block, blockquote, links com target seguro).
- Inclui configura��o de env no playground (VITE_RIO_TOKEN/VITE_RIO_API_BASE_URL) para testes locais sem depender de projeto hospedeiro.

## [0.1.8] - 2025-11-26
- Corrige sobreposi��o e alinhamento da barra de rolagem na coluna de conversas em tela cheia, mantendo drag e hover funcionais.
- Esconde a barra nativa no sidebar para evitar barras duplas e aproxima o track customizado dos bot�es de tr�s pontos.
- Ajusta o bot�o �Iniciar nova conversa� na coluna para o layout compacto solicitado (altura menor, bordas suaves e �cone reduzido).

## [0.1.7] - 2025-11-26
- Ajusta auto-scroll da conversa e fixa��o do footer na tela cheia.
- Centraliza conte�do principal na tela fullscreen e exibe atalho para nova conversa ao iniciar intera��o.
- Reduz e compacta o bal�o de mensagens do usu�rio, aproximando texto e hor�rio.

## [0.1.6] - 2025-11-25
- Atualiza o �cone de fechamento do mini painel.
- Prepara pacote para publica��o.

## [0.1.4] - 2025-11-25
- Incrementa vers�o para distribuir �ltimos ajustes do widget.
- Recompila bundle e prepara pacote para publica��o.

## [0.1.2] - 2025-11-25
- Atualiza o modelo padr�o do agente WebSocket para `eu.amazon.nova-pro-v1:0`.
- Documenta��o e bundle compilado sincronizados com o novo modelo.















