
function circlesArea(radiuses) {
    return Math.round(
        radiuses.filter((radius) => radius >= 0)
        .map((radius) => Math.PI * radius**2)
        .filter((area) => area < 100)
        .reduce((x, y) => x + y)
    );
}


const radiuses = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -100, 500];
const sum = circlesArea(radiuses);
console.log(sum); // 170


