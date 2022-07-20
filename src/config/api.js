export const makeAPIWithQueries = (base, queries) => {
  return `${base}?${queries}`;
};
