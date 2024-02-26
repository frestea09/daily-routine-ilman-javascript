let isThreshold = true;
let iteration = 0;

while (isThreshold) {
  if (iteration > 5) {
    isThreshold = false;
  }
  console.log(iteration);
  iteration++;
}
