let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (cat) => {
    cats.push(`${cat}`);
}
let destructivelyPrependCat = (cat) => {
    cats.unshift(`${cat}`)
}
let destructivelyRemoveLastCat = (cat) => {
    cats.pop(`${cat}`)
}
let destructivelyRemoveFirstCat = (cat) => {
    cats.shift(`${cat}`)
}
function appendCat(cat){
    let newCats = [...cats, cat];
    return newCats;
}
let prependCat = (cat) => {
    let newOnes = [cat, ...cats];
    return newOnes;
}
let removeLastCat = () => {
    let removeLast = cats.slice(0, -1);
    return removeLast
}
let removeFirstCat = () => {
    let removeFirst = cats.slice(1);
    return removeFirst
}