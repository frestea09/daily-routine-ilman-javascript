let iteration = 0;
let threshold = true;

while (threshold) {
  if (iteration > 5) {
    threshold = false;
  }
  console.log("iteration", iteration);
  iteration++;
}
