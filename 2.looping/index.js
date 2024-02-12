let listBilangna = [1, 2, 3, 4, 5];
let threshold = true;
let iteration = 0;

while (threshold) {
  if (iteration > listBilangna.length) {
    threshold = false;
  }
  console.log(listBilangna[iteration]);
  iteration++;
}
