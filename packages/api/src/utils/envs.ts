export const getEnv = (envName: string): string => {
  const env = process.env[envName];
  if (typeof env === 'undefined') {
    throw new Error(`define: ${envName}`);
  }
  return env;
};
