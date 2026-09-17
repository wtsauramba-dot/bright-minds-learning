/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CMS_TYPE?: string;
  readonly VITE_CMS_API_URL?: string;
  readonly VITE_CMS_API_TOKEN?: string;
  readonly VITE_SANITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
