import { useCustomFetch } from "../../composables/useCustomFetch";

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
