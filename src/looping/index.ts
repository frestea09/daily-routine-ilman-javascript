const listBilangan = [1, 2, 3, 4, 5];

listBilangan.forEach((item) => console.log(item));

const kuadratDua = listBilangan.map((item) => item * 2);
console.log(kuadratDua);

let iteration = 0;
let therhold = true;
while (therhold) {
  if (iteration == 5) {
    therhold = false;
  }
  console.log(iteration);
  iteration++;
}
