export default function orderArrayBy(arr, prop, ascending = true) {
    if (!Array.isArray(arr)) return [];
  
    return [...arr].sort((a, b) => {
      if (a[prop] < b[prop]) return ascending ? -1 : 1;
      if (a[prop] > b[prop]) return ascending ? 1 : -1;
      return 0;
    });
  }