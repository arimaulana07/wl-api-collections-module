import { useCustomFetch } from "../../../composables/useCustomFetch";
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler( async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'crossOriginResourcePolicy': '*',
    'X-XSS-Protection': 1
  }
  setHeaders(event, headers)
  const params = getQuery(event);
  return await useCustomFetch({
    action: 'destination',
    ctx: event,
    params
  });
});
