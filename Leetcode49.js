var groupAnagrams = function(strs) {
  let res = {};
  for (let str of strs) {
      let tmp = str.split('').sort().join('');
      if (res[tmp] == null)
          res[tmp] = [str]
      else
          res[tmp].push(str)
  }
  return Object.values(res)
};
