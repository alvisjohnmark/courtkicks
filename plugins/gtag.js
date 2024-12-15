export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      nuxtApp.$router.afterEach((to) => {
        if (typeof window.gtag === 'function') {
          window.gtag('config', 'G-ZMYVSE7HZZ', {
            page_path: to.fullPath,
          });
        } else {
          console.warn("Google Analytics is not loaded yet.");
        }
      });
    }
  });
  