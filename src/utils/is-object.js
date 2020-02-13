export default value => {
  if (value === null) return false;
  return ['object', 'function'].includes(typeof value);
};
