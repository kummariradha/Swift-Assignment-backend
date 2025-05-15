const cache = new Map<string, { data: any; expiry: number }>();

export const setCache = (key: string, data: any, ttl: number = 300000) => {
  const expiry = Date.now() + ttl; // default TTL: 5 minutes
  cache.set(key, { data, expiry });
};

export const getCache = (key: string) => {
  const cached = cache.get(key);
  if (!cached) return null;

  if (Date.now() > cached.expiry) {
    cache.delete(key);
    return null;
  }

  return cached.data;
};
