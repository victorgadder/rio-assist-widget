# Documentação Técnica - Rio Assist Widget

Data de referência: 2026-03-30

## Visão geral
O projeto entrega um widget de chat como Web Component (`rio-assist-widget`) baseado em `LitElement`.

A arquitetura atual foi reorganizada para reduzir o acoplamento do componente principal e aproximar o projeto de uma estrutura inspirada em Clean Architecture:

- `domain/`: tipos centrais do negócio.
- `application/`: casos de uso, transformações, regras puras e portas.
- `services/`: integrações e adaptadores técnicos.
- `components/rio-assist/`: camada de apresentação e controllers de feature.
- `shared/`: utilitários compartilhados sem dependência de UI.

O componente [rio-assist.ts](src/components/rio-assist/rio-assist.ts) deixou de ser o único lugar onde a regra vive. Ele ainda coordena estado reativo do Lit e binding com templates, mas os fluxos relevantes foram extraídos para módulos dedicados.

## Stack
- `TypeScript`
- `Vite`
- `Lit`
- `markdown-it`
- `markdown-it-task-lists`
- `DOMPurify`
- Web APIs: `WebSocket`, `MediaRecorder`, `SpeechRecognition`, `Clipboard`

## Estrutura atual

### Domain
- `src/domain/chat.ts`
- `src/domain/conversation.ts`
- `src/domain/consultant.ts`
- `src/domain/attachment.ts`

Responsabilidade:
- definir os modelos centrais do chat, conversa, consultor e anexos

### Application
- `src/application/chat-flow.ts`
- `src/application/send-message-flow.ts`
- `src/application/incoming-message-flow.ts`
- `src/application/history-flow.ts`
- `src/application/consultant-flow.ts`
- `src/application/conversation-state-flow.ts`
- `src/application/conversation-backend-flow.ts`
- `src/application/conversation-ui-flow.ts`
- `src/application/conversation-scrollbar-flow.ts`
- `src/application/panel-flow.ts`
- `src/application/floating-button-flow.ts`
- `src/application/message-action-flow.ts`
- `src/application/media-ui-flow.ts`
- `src/application/file-selection-flow.ts`
- `src/application/outgoing-message-ui-flow.ts`
- `src/application/attachment-flow.ts`
- `src/application/ports/realtime-chat-gateway.ts`
- `src/application/ports/consultant-options-gateway.ts`

Responsabilidade:
- encapsular regras e transformações sem dependência de DOM
- preparar payloads
- calcular próximos estados
- centralizar heurísticas de histórico, conversa, envio e consultor
- definir contratos para infraestrutura

### Services
- `src/services/rioWebsocket.ts`
- `src/services/rioSession.ts`
- `src/services/consultantOptionsGateway.ts`
- `src/services/voiceCapture.ts`
- `src/services/loadingGuard.ts`
- `src/services/markdownRenderer.ts`
- `src/services/rioMessageParser.ts`

Responsabilidade:
- encapsular infraestrutura e APIs do navegador
- gerenciar websocket
- gerenciar captura de voz
- renderizar markdown
- adaptar chamadas REST do consultor aos contratos de aplicação

### Presentation
- `src/components/rio-assist/rio-assist.ts`
- `src/components/rio-assist/conversation-controller.ts`
- `src/components/rio-assist/consultant-controller.ts`
- `src/components/rio-assist/media-controller.ts`
- `src/components/rio-assist/rio-assist.template.ts`
- `src/components/rio-assist/rio-assist.styles.ts`
- `src/components/mini-panel/*`
- `src/components/fullscreen/*`
- `src/components/conversations-panel/*`
- `src/components/floating-button/*`

Responsabilidade:
- manter estado reativo do widget
- conectar templates aos fluxos
- delegar regras para `application/` e `services/`

### Shared
- `src/shared/history-utils.ts`

Responsabilidade:
- utilitários compartilhados sem dependência de componente

## Componentes principais

### RioAssistWidget
Papel atual:
- camada de composição do widget
- estado reativo do Lit
- integração entre controllers, casos de uso e templates

O componente ainda concentra parte da orquestração, mas bem menos do que antes da refatoração.

### Controllers de feature

#### Conversation Controller
Arquivo: `src/components/rio-assist/conversation-controller.ts`

Responsável por:
- seleção de conversa
- menu de conversa
- rename/delete
- retry e rollback de erro
- aplicação de efeitos de retorno para ações de conversa

#### Consultant Controller
Arquivo: `src/components/rio-assist/consultant-controller.ts`

Responsável por:
- abrir o fluxo do consultor
- selecionar assunto
- reabrir prompt
- enviar follow-up do consultor

#### Media Controller
Arquivo: `src/components/rio-assist/media-controller.ts`

Responsável por:
- gravação de voz
- confirmação/cancelamento
- remoção de áudio
- seleção de arquivos
- limpeza de anexos

## Fluxos principais

### Envio de mensagem
Arquivos envolvidos:
- `src/application/send-message-flow.ts`
- `src/application/chat-flow.ts`
- `src/application/outgoing-message-ui-flow.ts`
- `src/services/rioSession.ts`

Resumo:
1. o componente chama `processMessage`
2. `prepareSendMessage` monta payload, efeito de UI e payload websocket
3. o componente dispara `rioassist:send`
4. `RioSessionController` garante sessão websocket
5. a mensagem é enviada
6. anexos locais são limpos se o envio for bem-sucedido
7. em caso de erro, o estado de loading é restaurado via fluxo de erro

### Recebimento de mensagem
Arquivos envolvidos:
- `src/application/incoming-message-flow.ts`
- `src/application/history-flow.ts`
- `src/application/consultant-flow.ts`
- `src/components/rio-assist/conversation-controller.ts`

Resumo:
1. websocket entrega payload para o componente
2. payload de histórico vai para `history-flow`
3. payload de ação de conversa vai para `conversation-controller`
4. payload de resposta do assistente passa por `incoming-message-flow`
5. o resultado sincroniza conversa ativa, histórico e efeitos do consultor

### Histórico
Arquivos envolvidos:
- `src/application/history-flow.ts`
- `src/shared/history-utils.ts`

Resumo:
- detecta formatos diferentes de payload
- extrai entries
- normaliza conversas
- normaliza mensagens

### Consultor
Arquivos envolvidos:
- `src/application/consultant-flow.ts`
- `src/components/rio-assist/consultant-controller.ts`
- `src/services/consultantOptionsGateway.ts`
- `src/consultant-agent/consultant-agent.ts`

Resumo:
- carrega opções por REST
- inicia fluxo com mensagem automática
- injeta prompt de assuntos
- envia perguntas com `consultantContext`

### Voz e anexos
Arquivos envolvidos:
- `src/components/rio-assist/media-controller.ts`
- `src/application/media-ui-flow.ts`
- `src/application/attachment-flow.ts`
- `src/application/file-selection-flow.ts`
- `src/services/voiceCapture.ts`

Resumo:
- coordena gravação de voz
- monta anexo de áudio
- gerencia diálogos de remoção
- valida e prepara anexos locais

## Integrações

### WebSocket
Arquivos:
- `src/application/ports/realtime-chat-gateway.ts`
- `src/services/rioWebsocket.ts`
- `src/services/rioSession.ts`

Ações suportadas:
- `sendMessage`
- `getHistory`
- `renameConversation`
- `deleteConversation`
- `ping`

Situação atual:
- a aplicação já depende de contrato explícito para a sessão em tempo real
- `RioWebsocketClient` é o adapter concreto desse contrato

### REST do consultor
Arquivos:
- `src/application/ports/consultant-options-gateway.ts`
- `src/services/consultantOptionsGateway.ts`
- `src/consultant-agent/consultant-agent.ts`

Uso atual:
- carregar branches/assuntos do consultor

Situação atual:
- o widget já consome um gateway, não mais a função REST concreta diretamente

## Eventos do widget
O widget segue emitindo eventos `rioassist:*` para integração com o host:

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

## Estado arquitetural atual

### O que já foi resolvido
- extração de modelos de domínio
- extração dos fluxos principais de aplicação
- isolamento de websocket em `rioSession`
- introdução de portas para sessão em tempo real e carregamento de opções do consultor
- isolamento de loading guard, markdown e voice capture
- divisão da apresentação em controllers por feature
- cobertura automatizada expandida para os fluxos extraídos

### O que ainda não está ideal
- `rio-assist.ts` ainda é relativamente grande e continua sendo o ponto de composição de várias features
- os controllers de apresentação ainda ficam no mesmo diretório do componente principal
- ainda existe acoplamento residual entre alguns fluxos de aplicação e módulos concretos do consultor

## Avaliação de aderência

### Clean Code
Status atual: bom

Indicadores:
- responsabilidades mais delimitadas
- nomes mais coerentes por feature
- maior testabilidade sem DOM
- redução forte do componente principal

### Clean Architecture
Status atual: bem atendido, ainda não ideal

Indicadores:
- existe separação entre domínio, aplicação, serviços e apresentação
- boa parte da regra saiu da UI
- já existem portas explícitas para integrações centrais
- ainda há espaço para reduzir acoplamentos residuais e simplificar a composição final

## Recomendação objetiva
Neste ponto, o melhor custo-benefício é estabilizar a base antes de continuar fragmentando o `rio-assist.ts`.

Motivo:
- o maior gap estrutural restante era a ausência de portas explícitas para infraestrutura mais crítica
- esse gap já foi reduzido com os contratos de realtime e consultor
- continuar quebrando o componente sem demanda funcional clara tende a gerar microfragmentação e custo de navegação

Conclusão:
- compensa estabilizar como está
- novas extrações devem acontecer quando surgirem mudanças reais de feature ou dor concreta de manutenção

## Próximos passos recomendados
1. Consolidar os contratos de infraestrutura já introduzidos e usar o mesmo padrão em futuras integrações.
2. Avaliar com calma se `components/rio-assist/` deve evoluir para uma pasta `presentation/`.
3. Manter a redução de `rio-assist.ts` apenas quando houver ganho claro de legibilidade ou isolamento funcional.
4. Atualizar README se for desejado expor a nova arquitetura para outros times.

## Suíte de testes
A base atualmente possui cobertura automatizada para os fluxos extraídos em `tests/`, incluindo:

- chat
- envio
- recebimento
- histórico
- consultor
- conversas
- painel
- botão flutuante
- ações de mensagem
- anexos
- voz
- websocket/session

Esse conjunto sustenta a manutenção da arquitetura resultante com risco menor de regressão.
