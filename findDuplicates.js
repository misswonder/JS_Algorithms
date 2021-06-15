function findDuplicates(names, prices, quantities) {
    const items = new Set();
    let duplicates = 0;
    for (let i = 0; i < names.length; i++) {
      const combination = `${names[i]},${prices[i]},${quantities[i]}`;
      if (items.has(combination) {
        duplicates += 1;
      } else {
        items.add(combination);
      }
    }
   return duplicates;
}