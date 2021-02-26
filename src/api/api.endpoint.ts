class ApiEndpoint {
  private static readonly BASE_URI = 'http://localhost:8000';
  readonly singular: string;
  readonly plural: string;
  readonly uri: string;

  constructor(singular: string, plural?: string) {
    this.singular = singular;
    this.plural = plural || `${singular}s`;
    this.uri = `${ApiEndpoint.BASE_URI}/${this.plural}`;
  }
}

export default ApiEndpoint;
