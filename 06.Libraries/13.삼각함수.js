let Xs = [], sin = [], cos = [];
for (let i=0; i<630; i++) {
    Xs.push(i * 0.01);
    sin.push(Math.sin(i * 0.01));
    cos.push(Math.cos(i * 0.01));
}
console.log(Xs[0], sin[0], cos[0]);