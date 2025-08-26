function indexOfIgnoreCase(str, subStr) {
  // Edge case: if subStr is empty, return 0
  if (subStr.length === 0) return 0;

  // Convert both strings to lowercase for case-insensitive comparison
  let lowerStr = str.toLowerCase();
  let lowerSub = subStr.toLowerCase();

  // Use indexOf to find first occurrence
  return lowerStr.indexOf(lowerSub);
}

