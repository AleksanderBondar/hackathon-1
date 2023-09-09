export const getEnv = (envName) => {
    const env = process.env[envName];
    if (typeof env === 'undefined') {
        throw new Error(`define: ${envName}`);
    }
    return env;
};
