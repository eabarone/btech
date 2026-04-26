/* BTech — Configuration */

const CONFIG = {
  /*
   * YouTube Data API v3 Key
   * SEGURIDAD: Esta key está restringida por HTTP referrer en Google Cloud Console.
   * Solo funciona desde los dominios autorizados:
   *   - https://eabarone.github.io/*
   *   - http://localhost:3000/*
   * Y solo tiene permiso para YouTube Data API v3.
   * Si la key es comprometida, regenerarla en: https://console.cloud.google.com/apis/credentials
   */
  youtubeApiKey: 'AIzaSyDuPBjCPyUpdj3LdvEHEviT4dFCz0KiDiM',
};

export function getConfig() {
  return CONFIG;
}
