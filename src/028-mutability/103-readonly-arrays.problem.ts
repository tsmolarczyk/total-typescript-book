// two solution can be done here

//1
function printNames(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error
  names.push("John");

  // @ts-expect-error
  names[0] = "Billy";
}

//2
function printNames2(names2: ReadonlyArray<string>) {
  for (const name of names2) {
    console.log(name);
  }

  // @ts-expect-error
  names2.push("John");

  // @ts-expect-error
  names2[0] = "Billy";
}

const array2 = [1,2,3] as const; 




printNames(['Tom', 'hello'])
