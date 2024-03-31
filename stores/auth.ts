import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userId: 'xxxx'
  }),
  getters: {
    getUser: (state) => state.userId
  },
  actions: {
    increment() {
      this.userId = 'xxxxfdsfd';
    }
  }
});
