import axios from 'axios';
import ApiHooks from './api.hooks';

abstract class ApiClient<T> {
  constructor(private readonly hooks: ApiHooks<T>) {}

  protected baseGet = async (uri: string) => {
    this.onRequest();

    return axios
      .get<T>(uri)
      .then(({ data }) => data)
      .then(this.onSuccess)
      .catch(this.onFailure);
  };

  // Accommodation for possible API hooks
  private onRequest = () => {
    const { onRequest } = this.hooks;

    if (onRequest) {
      onRequest();
    }
  };

  private onSuccess = (data: T) => {
    const { onSuccess } = this.hooks;

    if (onSuccess) {
      onSuccess(data);
    }

    return data;
  }

  private onFailure = (error: Error) => {
    const { onFailure } = this.hooks;

    if (onFailure) {
      onFailure(error);
    }

    return null;
  };
}

export default ApiClient;
