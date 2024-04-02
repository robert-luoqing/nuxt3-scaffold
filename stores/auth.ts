import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userId: '',
    token: '',
    userName: '',
    displayName: ''
    // Offer站没有role之分
    // role: ''
  }),
  getters: {
    getAuthInfo: (state) => state
  },
  actions: {
    setAuthInfo(token: string, userId: string, userName: string, displayName: string) {
      this.userId = userId;
      this.token = token;
      this.userName = userName;
      this.displayName = displayName;
    }
  }
});
