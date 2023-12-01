import axios from "axios";
import type { ApiCallPayload } from "../interface";
import { endpoint } from "../apiCollections";

const runtimeConfig = useRuntimeConfig();
const { baseApiUrl, trailingApiUrl } = runtimeConfig;
export const useCustomFetch = async ({ action, data = null, params = null }: ApiCallPayload, token = null, loop = 0) => {
  const { url, method } = endpoint[action];
  const urlToFetch = `${baseApiUrl}/${trailingApiUrl}${url}`;
  console.log('utlToFetch', urlToFetch);
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