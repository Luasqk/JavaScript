console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const resultado = []
    .concat([1, 2], [3, 4], 5, [[6, 7]]).flat();


console.log(resultado);          // [1, 2, 3, 4, 5, 6, 7]
