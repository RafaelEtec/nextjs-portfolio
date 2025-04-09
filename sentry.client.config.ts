import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8e36a809220c20eab210b07ad6c68c2f@o4509108549255168.ingest.us.sentry.io/4509108551024640",
  
  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 1.0,
  
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
});