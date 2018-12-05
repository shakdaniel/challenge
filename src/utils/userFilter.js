const userFilter = (arr, key, val) => {
  return arr.filter(item => item[key] === val);
};
export default userFilter;
