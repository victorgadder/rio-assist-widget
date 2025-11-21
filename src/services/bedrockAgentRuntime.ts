import {
  BedrockAgentCoreClient,
  InvokeAgentRuntimeCommand,
  type InvokeAgentRuntimeCommandInput,
} from '@aws-sdk/client-bedrock-agentcore';
import type { StreamingBlobPayloadOutputTypes } from '@smithy/types';

const REGION = import.meta.env.VITE_AWS_REGION;
const AGENT_RUNTIME_ARN = import.meta.env.VITE_BEDROCK_AGENT_RUNTIME_ARN;
const AGENT_QUALIFIER = import.meta.env.VITE_BEDROCK_AGENT_QUALIFIER;
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRET_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;
const SESSION_TOKEN = import.meta.env.VITE_AWS_SESSION_TOKEN;

let client: BedrockAgentCoreClient | null = null;

const ensureClient = () => {
  if (!REGION) {
    throw new Error('Configure VITE_AWS_REGION para usar o agente.');
  }

  if (!client) {
    client = new BedrockAgentCoreClient({
      region: REGION,
      credentials: ACCESS_KEY && SECRET_KEY
        ? {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_KEY,
            sessionToken: SESSION_TOKEN,
          }
        : undefined,
    });
  }

  return client;
};

const textEncoder = new TextEncoder();

const streamToString = async (body?: StreamingBlobPayloadOutputTypes) => {
  if (!body) {
    return '';
  }

  if (typeof (body as any).transformToString === 'function') {
    return (body as any).transformToString();
  }

  if (body instanceof Blob) {
    return body.text();
  }

  if (body instanceof ReadableStream) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        result += decoder.decode(value, { stream: true });
      }
    }

    result += decoder.decode();
    return result;
  }

  if (body instanceof Uint8Array) {
    return new TextDecoder().decode(body);
  }

  if (typeof body === 'string') {
    return body;
  }

  return '';
};

export const invokeAgentRuntime = async (
  message: string,
  runtimeSessionId?: string,
) => {
  if (!AGENT_RUNTIME_ARN) {
    throw new Error('Configure VITE_BEDROCK_AGENT_RUNTIME_ARN antes de usar o agente.');
  }

  const clientInstance = ensureClient();

  const input: InvokeAgentRuntimeCommandInput = {
    agentRuntimeArn: AGENT_RUNTIME_ARN,
    payload: textEncoder.encode(message),
    contentType: 'text/plain; charset=utf-8',
    accept: 'text/plain',
  };

  if (runtimeSessionId) {
    input.runtimeSessionId = runtimeSessionId;
  }

  if (AGENT_QUALIFIER) {
    input.qualifier = AGENT_QUALIFIER;
  }

  const command = new InvokeAgentRuntimeCommand(input);
  const response = await clientInstance.send(command);
  const text = (await streamToString(response.response)).trim();

  return {
    text,
    sessionId: response.runtimeSessionId ?? runtimeSessionId,
  };
};
