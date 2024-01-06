import { useState } from "react";

interface UseFetchResult<T> {
  loading?: boolean;
  data?: T | undefined;
  error?: Error | undefined;
}

type UseFetchFunction<T> = (
  adapter: (params: any) => Promise<{
    data: T | undefined;
    error: T | undefined;
    loading: boolean;
  }>,
  params?: any
) => void;

const useFetch = <T>(): [UseFetchFunction<T>, UseFetchResult<T>] => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetch: UseFetchFunction<T> = (adapter, params) => {
    setLoading(true);
    adapter(params)
      .then(({ data, error, loading }: any) => {
        setData(data);
        setLoading(loading);
        if (error) {
          setError(error);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  };
  const result = {
    loading,
    data,
    error,
  };

  return [fetch, result];
};

export default useFetch;
