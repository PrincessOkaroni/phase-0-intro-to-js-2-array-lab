const cats = ["Milo", "Otis", "Garfield"];
// 1. Destructively appends a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructively prepends a cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructively removes the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructively removes the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Non-destructively appends a cat (returns a new array)
function appendCat(name) {
  return [...cats, name];
}

// 6. Non-destructively prepends a cat
function prependCat(name) {
  return [name, ...cats];
}

// 7. Non-destructively removes the last cat
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Non-destructively removes the first cat
function removeFirstCat() {
  return cats.slice(1);
}
