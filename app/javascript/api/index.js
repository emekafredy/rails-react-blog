export const resolveBaseUrl = () => {
  const localUrl = 'http://localhost:3000/api/v1';
  const env = process.env.NODE_ENV;
  const baseUrl = ['test', 'development'].includes(env)
    ? localUrl
    : process.env.REACT_APP_API_URL;

  return baseUrl;
};
