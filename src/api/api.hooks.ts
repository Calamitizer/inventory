interface ApiHooks<T> {
  onRequest?: () => void;
  onSuccess?: (data: T) => void;
  onFailure?: (error: Error) => void;
}

export default ApiHooks;
