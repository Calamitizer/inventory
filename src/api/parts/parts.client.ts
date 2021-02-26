import ApiClient from '../api.client';
import { PartDto, processDto } from './part.dto';
import partsEndpoint from './parts.endpoint';

class PartsClient extends ApiClient<PartDto[]> {
  private static readonly ENDPOINT = partsEndpoint;

  constructor() {
    super({});
  }

  private get = async (uri: string) => {
    const results = await this.baseGet(uri);

    return results === null
      ? null
      : results.map(processDto);
  };

  getAll = async () => this.get(PartsClient.ENDPOINT.uri);
}

export default PartsClient;
