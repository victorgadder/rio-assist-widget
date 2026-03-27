import { describe, expect, it } from 'vitest';
import {
  clearCopiedMessageState,
  createCopiedMessageState,
  createMessageActionDetail,
  hideMessageForRefresh,
  toggleMessageReaction,
} from '../src/application/message-action-flow';

describe('message-action-flow', () => {
  it('builds message action detail payload', () => {
    expect(
      createMessageActionDetail(
        {
          id: 'msg-1',
          role: 'assistant',
          text: 'Resposta',
          html: '<p>Resposta</p>',
          timestamp: 1,
          responseTo: null,
        },
        'conv-1',
      ),
    ).toEqual({
      messageId: 'msg-1',
      role: 'assistant',
      text: 'Resposta',
      conversationId: 'conv-1',
      responseTo: null,
    });
  });

  it('creates and clears copied message state', () => {
    expect(createCopiedMessageState('msg-1')).toEqual({
      copiedMessageId: 'msg-1',
      timeoutMs: 1200,
    });

    expect(clearCopiedMessageState()).toEqual({
      copiedMessageId: null,
    });
  });

  it('toggles reactions and hides message for refresh', () => {
    expect(toggleMessageReaction({}, 'like', 'msg-1')).toEqual({
      'msg-1': 'like',
    });

    expect(toggleMessageReaction({ 'msg-1': 'like' }, 'like', 'msg-1')).toEqual({});

    expect(
      hideMessageForRefresh(
        [
          {
            id: 'msg-1',
            role: 'assistant',
            text: 'Resposta',
            html: '<p>Resposta</p>',
            timestamp: 1,
          },
        ],
        'msg-1',
      ),
    ).toEqual([
      {
        id: 'msg-1',
        role: 'assistant',
        text: 'Resposta',
        html: '<p>Resposta</p>',
        timestamp: 1,
        hidden: true,
      },
    ]);
  });
});
