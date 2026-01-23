# Changelog
  
## [0.1.60] - 2026-01-23
- Corrige o horario das respostas no historico, evitando mostrar o horario atual ao recarregar conversas.
- Exibe data relativa nas mensagens: "ontem" e dia da semana entre 2 e 5 dias, mantendo data completa depois.

## [0.1.59] - 2026-01-22
- Oculta temporariamente o botao de anexos no input do chat.

## [0.1.58] - 2026-01-21
- Adiciona anexos no input do chat com validacao de tamanho/formato, exibicao de cards e miniaturas.
- Inclui suporte a imagens (JPG/PNG) com miniaturas e botao de remocao dedicado.
- Ajusta layout do input e anexos conforme prototipo (quebra de linha, icones, espacamentos e bordas).
- Atualiza chat fullscreen para ocupar toda a largura util.

## [0.1.57] - 2026-01-19
- Ajusta espacos e altura fixa dos itens na lista de conversas do sidebar.
- Alinha itens da lista e scrollbar no mini painel para evitar cortes na rolagem.

## [0.1.56] - 2026-01-15
- Usa conversationTitle da resposta do websocket para exibir a nova conversa imediatamente na lista.

## [0.1.55] - 2026-01-13
- Corrige o timing de exibição do botão flutuante ao fechar o painel, evitando sobreposição de PNGs.
- Corrige bug visual do botão sobre o painel lateral.

## [0.1.54] - 2026-01-13
- Atualiza a cor do botão flutuante para #B23672 e ajusta o layout do fundo com boxBackground.

## [0.1.53] - 2026-01-12
- Ajusta tamanho do ícone de três pontos nas conversas para evitar distorção.
- Ajuste do funcionamento do slide vertical do botão flutuante.

## [0.1.52] - 2026-01-12
- Padroniza textos do widget para UptAIme Assist.

## [0.1.51] - 2026-01-12
- Atualiza todas as imagens para melhor resolução.

## [0.1.50] - 2026-01-12
- Ajuste nos ícones dos botões para melhorar a resolução.

## [0.1.49] - 2026-01-12
- Rebuild do bundle para incluir a label em PNG e o comportamento recolhido/expandido do botão flutuante.

## [0.1.48] - 2026-01-12
- Botão flutuante recolhe para mostrar apenas o ícone e expande no hover para revelar a label.

## [0.1.47] - 2026-01-12
- Atualiza lista de conversas ao detectar conversationId novo na resposta do assistente.

## [0.1.46] - 2026-01-12
- Troca a label do botão flutuante por imagem do protótipo para garantir fidelidade tipográfica.
- Ajustes nos ícones do botão flutuante e da tela de conversação.

## [0.1.45] - 2025-12-30
- Mantém opções do consultor reaparecendo após respostas do agente enquanto o usuário seguir no fluxo guiado; exibe novo bloco de perguntas e botão "Escolher outro assunto".

## [0.1.44] - 2025-12-30
- Release com merge da master e fluxo atualizado do botão do consultor (Uptime Agent + prompt após resposta).

## [0.1.42] - 2025-12-30
- Ajusta fluxo do Agente Consultor: exibe mensagem "Sou o Uptime Agent..." ao abrir, envia "Resumo da Frota" silenciosamente ao backend e mostra "Em qual assunto posso ajudar você hoje?" com os ramos somente após a resposta.
- Novos estados de prompt do consultor para controlar exibição das opções e evitar cliques indevidos durante a espera.

## [0.1.41] - 2025-12-30
- Padroniza "UptAIme Assist" com "RIO" em caixa alta nos textos e labels do widget.
- Atualiza o botão do Agente Consultor para "Consulte o Uptime Agent" e a frase de introdução do agente.

## [0.1.40] - 2025-12-30
- Remove fallback para mocks no Agente Consultor; agora usa exclusivamente dados da API `/branches`, garantindo que as perguntas de follow-up apareçam corretamente.

## [0.1.39] - 2025-12-30
- Corrige URL do Agente Consultor para usar domínio com certificado SSL (`consultant-api.latam-sandbox.rio.cloud`) ao invés do DNS do ALB.

## [0.1.38] - 2025-12-19
- Atualiza endpoint do Agente Consultor para HTTPS para evitar bloqueio de mixed content em páginas seguras.

## [0.1.37] - 2025-12-19
- Integra Agente Consultor com backend real via `/consultant/api/v1/branches`, carregando ramos/perguntas dinâmicos e ocultando mocks.
- Follow-ups agora enviam perguntas com `isConsultantAgent` e `consultantContext` (branch/question/level) no payload do WebSocket.
- Botões de follow-up são ocultados após clique para evitar múltiplas seleções; estado do consultor é resetado em nova conversa.

## [0.1.36] - 2025-12-19
- Adiciona modo Agente Consultor com botão "Fale com um consultor" no hero do chat, exibindo introdução e lista de assuntos pré-definidos (mockados e prontos para backend).
- Ao selecionar um assunto, registra a escolha como mensagem do usuário e mostra resposta guiada com texto "Certo! Reuni abaixo..." e botões de dúvidas específicas por tópico; follow-ups enviam a pergunta ao agente.
- Oculta as sugestões genéricas ao entrar no modo consultor, mantendo a possibilidade de perguntas livres pelo input normal.
- Ajusta layout dos botões consultor/follow-up para quebrar linha dentro do container, com padding 8px/16px e altura auto, preservando o visual do protótipo.

## [0.1.35] - 2025-12-11
- Exibe altura inicial do botão flutuante configurável via atributo `data-floating-offset`, permitindo posicioná-lo mais alto por projeto (padrão permanece 32px).

## [0.1.34] - 2025-12-11
- Botão flutuante agora é arrastável verticalmente (mouse/touch), mantendo bottom dinâmico e respeitando limites da viewport.
- Clique é suprimido quando houve arrasto para evitar abrir o painel por engano; cursor/gesto indicam estado de drag.
- Build atualizado para publicação no npm.

## [0.1.33] - 2025-12-09
- Reativa o Renomear no menu de conversa e envia payload renameConversation ao backend.
- Prioriza conversationId retornado pelo backend (e não accountId), reparando casos sem ":" para manter o ID completo.
- Remove geração local de conversationId; adota o ID do backend para mensagens e ações.
- Adiciona logs detalhados de erro e dos payloads de conversa para suporte/diagnóstico.

## [0.1.32] - 2025-12-02
- Toggle "Respostas rápidas" passa a iniciar ativado por padrão.

## [0.1.31] - 2025-12-02
- Novo modal de confirmação ao iniciar nova conversa ("Deseja mesmo iniciar uma nova conversa?..."), com opções de continuar a conversa atual ou iniciar nova.

## [0.1.30] - 2025-12-02
- Reposiciona o toggle no fullscreen para abaixo do header, ao lado esquerdo do botão de reduzir, sem fundo/borda.
- Remove fundo/borda do toggle, deixando-o transparente.

## [0.1.29] - 2025-12-02
- Move o toggle de respostas curtas para o header (mini e fullscreen) com label "Respostas rápidas".
- Botão de nova conversa (ícone "+") sempre visível com conversa ativa: no header do mini e no topo direito do fullscreen, iniciando nova conversa.
- Remove toggle do hero/footer para liberar espaço.

## [0.1.28] - 2025-12-02
- Mantém prefixo "Quero uma resposta curta sobre:" apenas no payload enviado ao backend, sem exibir a frase na conversa do usuário.

## [0.1.27] - 2025-12-02
- Adiciona toggle "Ativar respostas curtas" (hero sem conversa e footer com conversa) que prefixa mensagens com "Quero uma resposta curta sobre:" ao enviar.
- Ajusta padding responsivo do chat em fullscreen para evitar corte/colagem na barra de rolagem.

## [0.1.25] - 2025-12-02
- Trata payloads com action error sem criar mensagem no chat e exibe modal explicando o erro ao renomear/excluir conversa.
- Modal permite cancelar ou tentar novamente a ação, restaurando a conversa quando necessário.
- Oculta opção de Renomear no menu de conversa enquanto o backend não suporta.

## [0.1.24] - 2025-12-01
- Adiciona novo aviso de demora aos 120s em startLoadingGuard para respostas longas.
- Padroniza o termo RIO em caixa alta nas mensagens de carregamento.

## [0.1.23] - 2025-11-28
- Sugestões de perguntas agora fazem wrap (flex-wrap) para quebrar linha quando não houver espaço.

## [0.1.22] - 2025-11-28
- Anima reticências do indicador de resposta e mantém texto dinâmico conforme tempo de espera (20s: "continua respondendo"; 60s: aviso de demora maior), mantendo input desabilitado até resposta/erro.

## [0.1.21] - 2025-11-28
- Mantém isLoading ativo até receber resposta real do agente (remove timeout de 15s); o estado de "UptAIme Assist está respondendo..." permanece e a caixa fica desabilitada até chegar a resposta ou erro.

## [0.1.20] - 2025-11-28
- Ignora mensagens de websocket com action processing/conversationRenamed/conversationDeleted na transcrição do chat.
- Trata eventos de rename/delete vindos do backend aplicando título ou remoção local (sincroniza lista e conversa ativa).
- Extrai e reaproveita campos conversationId/newTitle do payload e limpa mensagens de erro ao sucesso.

## [0.1.19] - 2025-11-28
- Integra renomear/excluir conversa ao backend via websocket (payloads renameConversation/deleteConversation).
- Renomear agora abre diálogo com input; confirma, envia ao backend e aplica localmente.
- Excluir segue com diálogo de confirmação; ao confirmar, envia delete e, se bem-sucedido, remove localmente.
- Eventos rioassist:conversation-rename/rioassist:conversation-delete continuam disparados e podem ser cancelados.

## [0.1.18] - 2025-11-28
- Adiciona diálogo de confirmação antes de excluir conversa (Cancelar/Excluir) a partir do menu de três pontos.
- Continua emitindo rioassist:conversation-delete; ao confirmar, remove localmente via applyConversationDeletion.

## [0.1.17] - 2025-11-28
- Exibe mensagem de erro na lista de conversas quando a carga do histórico falhar (requestConversationHistory).

## [0.1.16] - 2025-11-28
- Aciona eventos reais nos botões de menu de conversa (três pontos): rioassist:conversation-rename e rioassist:conversation-delete com detalhes da conversa.
- Adiciona helpers applyConversationRename e applyConversationDeletion para atualizar o estado local após sucesso no backend (renomear título e remover conversa/estado ativo).

## [0.1.15] - 2025-11-28
- Carrega a lista de conversas ao entrar na tela fullscreen para evitar sidebar vazia na primeira abertura.

## [0.1.14] - 2025-11-28
- Torna configuráveis os três botões da header em fullscreen, permitindo customizar ícones e ações via headerActions (mantém ícones atuais como padrão).
- Dispara evento rioassist:header-action ao clicar em cada botão para integração com o projeto hospedeiro.
- Adiciona evento rioassist:home no botão Home do trilho lateral e suporta data-home-url opcional para navegar automaticamente.

## [0.1.13] - 2025-11-28
- Adiciona botão de envio com ícone arrowButton (40x40) dentro do campo de mensagem, permitindo clique para enviar.

## [0.1.12] - 2025-11-28
- Adiciona botão de retorno para o painel compacto na tela fullscreen, alinhado aos ícones do cabeçalho (usa resizeScreen.png e chama exitFullscreen(true)).
- Estiliza o novo atalho com 28x28px e posicionamento absoluto para acompanhar o último botão da header, conforme mock solicitado.

## [0.1.11] - 2025-11-27
- Integra conversa real via websocket (getHistory) para listar e carregar mensagens, com logs e loading.
- Normaliza histórico intercalando usuário (message) e assistente (response), filtrando pares sem resposta.
- Atualiza conversas automaticamente após nova conversa (incluindo fullscreen) e exibe título ativo na aba.
- Gera conversationId com sufixo aleatório para evitar colisão após reinício e envia nos payloads.
- Ajustes de UI: hover/tooltip em conversas, loading no painel, alinhamento dos menus e correção do tab no fullscreen.
- Build atualizado para publicação no npm.

## [0.1.10] - 2025-11-27
- Ajusta healthcheck para responder corretamente no painel e no bundle.
- Conecta o histórico de "Minhas Conversas" a dados reais vindos do backend, exibindo informações atualizadas na interface.

## [0.1.9] - 2025-11-26
- Adiciona renderização Markdown com markdown-it + task lists e sanitização via DOMPurify para evitar XSS.
- Atualiza templates/estilos para exibir HTML seguro no chat (listas, code block, blockquote, links com target seguro).
- Inclui configuração de env no playground (VITE_RIO_TOKEN/VITE_RIO_API_BASE_URL) para testes locais sem depender de projeto hospedeiro.

## [0.1.8] - 2025-11-26
- Corrige sobreposição e alinhamento da barra de rolagem na coluna de conversas em tela cheia, mantendo drag e hover funcionais.
- Esconde a barra nativa no sidebar para evitar barras duplas e aproxima o track customizado dos botões de três pontos.
- Ajusta o botão "Iniciar nova conversa" na coluna para o layout compacto solicitado (altura menor, bordas suaves e ícone reduzido).

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

