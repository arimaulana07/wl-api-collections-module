import type { ApiCallPayload } from "../interface";
import { endpoint } from "../apiCollections";
import { useRuntimeConfig } from '#imports';

const runtimeConfig = useRuntimeConfig();
const { baseApiUrl, trailingApiUrl } = runtimeConfig;

export const useCustomFetch = async ({ action, data = null , params = null }: ApiCallPayload, token = null, loop = 0) => {
  const { url, method } = endpoint[action];
  
  const urlToFetch = `${baseApiUrl}/${trailingApiUrl}${url}`;

  const response = await $fetch(urlToFetch, { 
    method,
    body: data,
    params,
    headers: {
      Authorization: `Bearer ${token}` ,
    },
  });
  return response;
}