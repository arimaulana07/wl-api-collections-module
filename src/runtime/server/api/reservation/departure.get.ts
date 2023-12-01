import { useCustomFetch } from "../../../composables/useCustomFetch";

export default defineEventHandler( async (event) => {
  return await useCustomFetch({ action: 'departure' });
});
