// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      googleTagManagerId: process.env.GTM_ID || "GTM-TDLTV342",
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image"],
  image: {
    domains: ["drive.google.com"],
  },
  plugins: ["~/plugins/firebase.js", "~/plugins/gtag.js"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap",
        },
      ],
      script: [
        {
          children: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${
              process.env.GTM_ID || "GTM-TDLTV342"
            }');`,
          type: "text/javascript",
        },

        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-ZMYVSE7HZZ",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMYVSE7HZZ');
          `,
        },
      ],
      noscript: [
        {
          children: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${
              process.env.GTM_ID || "GTM-TDLTV342"
            }" 
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        },
      ],
    },
  },
});
