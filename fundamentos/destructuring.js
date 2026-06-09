function random([min = 0, max = 1000] = []) {
    if(min > max) [min, max] = [max, min];
    const valor =  Math.random() * (max - min) + min;
    return Math.floor(valor); 
}

const [a, b, c] = [random(), random(), random()];

console.log(a, b, c);