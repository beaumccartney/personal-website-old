// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { env } from "~/env";

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  enabled: env.NODE_ENV !== "development",
  dsn: "https://b0c7b61e723b47554523f30cd97ec5fa@o4507386763018240.ingest.us.sentry.io/4507388068364288",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
