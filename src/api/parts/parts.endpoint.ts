import ApiEndpoint from '../api.endpoint';

class PartsEndpoint extends ApiEndpoint {
  private static readonly SINGULAR = 'part';

  constructor() {
    super(PartsEndpoint.SINGULAR);
  }
}

const partsEndpoint = new PartsEndpoint();

export default partsEndpoint;
