import { defineStore } from "#imports";

export const useStoreModule = defineStore('store', {
  state: () => {
    return {
      url: 'www.google.com'
    }
  }
});