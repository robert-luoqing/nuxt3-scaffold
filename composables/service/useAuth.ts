export const useAuth = () => {
  const authStore = useAuthStore();
  const tokenCookie = useCookie('token');
  const getAuthInfo = () => {
    return authStore.getAuthInfo;
  };
  const setAuthInfo = (token: string, userId: string, userName: string, displayName: string) => {
    tokenCookie.value = token;
    authStore.setAuthInfo(token, userId, userName, displayName);
  };
  const getToken = () => {
    if (authStore.token) {
      return authStore.token;
    } else {
      return tokenCookie.value;
    }
  };

  return {
    getAuthInfo,
    setAuthInfo,
    getToken
  };
};
