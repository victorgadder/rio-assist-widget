import type { ConsultantOptionsGateway } from '../application/ports/consultant-options-gateway';
import { loadConsultantAgentOptions } from '../consultant-agent/consultant-agent';

export class HttpConsultantOptionsGateway implements ConsultantOptionsGateway {
  loadOptions(apiBaseUrl?: string) {
    return loadConsultantAgentOptions(apiBaseUrl);
  }
}
