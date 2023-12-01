import { useCustomFetch } from "../../../composables/useCustomFetch";

export default defineEventHandler( async (event) => {
  const params = getQuery(event);
  return await useCustomFetch({
    action: 'destination',
    params
  });
});
