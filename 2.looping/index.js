const listBilangan = [1, 2, 3, 4, 5];
listBilangan.forEach((item) => console.log(item));

let iteration = 0;
let threshold = true;

while (threshold) {
  if (iteration === 5) {
    threshold = false;
  }
  console.log("iteration", iteration);
  iteration++;
}
