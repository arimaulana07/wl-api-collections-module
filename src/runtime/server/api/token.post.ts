import { useCustomFetch } from "../../composables/useCustomFetch";
import { defineEventHandler } from "h3";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler( async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { grantType, clientId, clientSecret } = runtimeConfig;
  return await useCustomFetch({
    action: 'requestToken',
    data: { 
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: grantType
    } 
  });
});
