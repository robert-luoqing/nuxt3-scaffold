import { useAuth } from '@/composables/service/useAuth';
export default defineNuxtRouteMiddleware(() => {
  const { getToken } = useAuth();
  if (!getToken()) {
    return navigateTo('/login');
  }
});
