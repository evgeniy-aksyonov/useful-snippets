function binaryGap(number) {
  // Convert number to binary string
  const binary = number.toString(2);

  let maxGap = 0;
  let currentGap = 0;
  let isCounting = false;

  // Loop through binary string
  for (let i = 0; i < binary.length; i++) {
    // If we encounter a 1, check if we've been counting a gap(isCounting is true)
    if (binary[i] === '1') {
      if (isCounting) {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      } else {
        isCounting = true;
      }
    } else if (isCounting) {
      currentGap++;
    }
  }

  return maxGap;
}

const number = 1041;
const gap = binaryGap(number);
console.log(gap); // Output: 5
