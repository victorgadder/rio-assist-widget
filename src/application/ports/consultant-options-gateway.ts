import type { ConsultantAgentOption } from '../../domain/consultant';

export interface ConsultantOptionsGateway {
  loadOptions(apiBaseUrl?: string): Promise<ConsultantAgentOption[]>;
}
