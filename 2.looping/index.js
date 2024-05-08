const listBilangan = [1, 2, 3, 4, 5];

listBilangan.forEach((item) => console.log(item));

const theResult = listBilangan.map((item) => item ** 2);

console.log(theResult);

let threshold = true;
for (let iteration = 0; iteration < listBilangan.length; iteration++) {
  console.log(listBilangan[iteration]);
}

let iteration = 0;
while (threshold) {
  if (listBilangan.length < iteration) {
    threshold = false;
  }
  console.log(iteration);
  iteration++;
}
