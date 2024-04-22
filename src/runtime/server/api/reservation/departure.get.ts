import { useCustomFetch } from "../../../composables/useCustomFetch";
import { defineEventHandler } from "h3";

export default defineEventHandler( async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'crossOriginResourcePolicy': '*',
    'X-XSS-Protection': 1
  }
  setHeaders(event, headers)
  return await useCustomFetch({ action: 'departure', ctx: event });
});
