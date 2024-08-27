const sayHelloWorld = () => {
  console.log("hello world");
};

sayHelloWorld();

const getAddtion = ({
  bilanganPertama,
  bilanganKedua,
}: {
  bilanganPertama: number;
  bilanganKedua: number;
}) => bilanganPertama + bilanganKedua;

console.log(getAddtion({ bilanganKedua: 2, bilanganPertama: 1 }));

const sayName = (inputName: string) => console.log(`hello world ${inputName}`);

const manusia = ({ name, sayName }: { name: string; sayName: any }) => {
  sayName(name);
};

manusia({ name: "ilman", sayName: sayName });

const fungsiRest = (...inputArgs: any) =>
  inputArgs.forEach((item: number) => console.log(item));

fungsiRest(2, 3, 4, 5, 6);
