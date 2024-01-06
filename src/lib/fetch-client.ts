import { getSession } from "next-auth/react";

const fetchClient = async (url: string, options: any) => {
  const session = (await getSession()) as any;

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session.jwt}` }),
    },
  });
};

export default fetchClient;
