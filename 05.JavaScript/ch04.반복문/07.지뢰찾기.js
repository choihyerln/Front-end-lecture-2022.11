// 지뢰 찾기
let N = 8;      // row, col 이 8
let mines = [];

// Step 1. 초기 지뢰밭 만들어 출력하기
// random 값 > 0.7 - 지뢰 (*), 나머지 값 - 평지 (.)
for (let i=0; i<N; i++) {
    let row = '';
    for (let k=0; k<N; k++) {
        if (Math.random() > 0.7)
            row += '*';
        else
            row += '.';
    }
    mines.push(row);
}

// for (let i=0; i<N; i++) {
//     for (let k=0; k<mines[i].length; k++) {
//         process.stdout.write(' ');
//         process.stdout.write(mines[i][k]);
//     }
//     console.log();
// }
printArray(mines);

function printArray(array) {
    for (let i=0; i < array.length; i++) {
        for (let k=0; k<array[i].length; k++) {
            process.stdout.write(' ');
            process.stdout.write(array[i][k]);
        }
        console.log();
    }
}

// Step 2. Step 1에서 구한 mines에 padding을 더해서 padMines를 만들고 출력하기
let padMines = [];
let padLine = '';
for (let i=0; i<N+2; i++)
    padLine += '.';

padMines.push(padLine);
for (let i=0; i<N; i++) {
    let row = '.' + mines[i] + '.';
    padMines.push(row);
}
padMines.push(padLine);
//printArray(padMines);
console.log();

// Step 3. Final mines를 구한다.
let finalMines = [];
for (let i = 1; i < N+2-1; i++) {           // array에 대한 loop
    let row = '';
    for (let k=1; k < N+1; k++) {
        if (padMines[i][k] == '*')
            row += '*';
        else {
            const count = 
                (padMines[i-1][k-1]=='*') + (padMines[i-1][k]=='*') + (padMines[i-1][k+1]=='*') + 
                (padMines[i][k-1]=='*') +                             (padMines[i][k+1]=='*') + 
                (padMines[i+1][k-1]=='*') + (padMines[i+1][k]=='*') + (padMines[i+1][k+1]=='*')
            row += count;
        }
    }
    finalMines.push(row);
}
printArray(finalMines);


// AnyPang
let anyPang = [];
for (i = 0; i < N; i++) {
    let row = '';
    for (k = 0; k < N; k++) {
        row += Math.ceil(Math.random() * 6);
    }
    anyPang.push(row);
}
console.log('\n');
printArray(anyPang);