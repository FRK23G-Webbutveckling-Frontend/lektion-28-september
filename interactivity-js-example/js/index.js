console.log('Hello World!');
console.log(document);

document.querySelector('button').addEventListener('click', () => {
    console.log('Du klickade på en knapp');
    document.querySelector('h1').classList.toggle('blue');
});