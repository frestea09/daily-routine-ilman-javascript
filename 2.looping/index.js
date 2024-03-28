let listbilangan = [1, 2, 3, 4, 5];

listbilangan.forEach((item) => console.log(item));

let listBilanganChange = listbilangan.map((item) => item * 2);

console.log("listBilanganChange", listBilanganChange);

for (let iteration = 0; iteration < 5; iteration++) {
  console.log("iteration", iteration);
}

let thershold = true;
let iterationthree = 0;
while (thershold) {
  if (iterationthree > 5) {
    thershold = false;
  }
  console.log("iteration", iterationthree);
  iterationthree++;
}
