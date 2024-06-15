import { ClientConfig, createClient } from 'next-sanity';

export const clientConfig: ClientConfig = {
  projectId: '9bfhlmgb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-06-03',
};

export const client = createClient(clientConfig);
