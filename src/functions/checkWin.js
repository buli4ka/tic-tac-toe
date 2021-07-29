/*
00 01 02
10 11 12
20 21 22
*/
export function checkWin(id, field, symbol, fieldSize) {
    let fieldIndex = id.split(' ');

    field[fieldIndex[0]][fieldIndex[1]] = symbol;

    let isDiag, isDiagReverse, isColumn = false;

    let diag = new Array(fieldSize).fill(' ');
    let diagReverse = new Array(fieldSize).fill(' ');
    let columnCheck = new Array(fieldSize).fill(' ');

    for (let col = 0; col < fieldSize; col++) {
        let isRow = field[col].every(element => element === symbol);
        diag[col] = field[col][col];
        diagReverse[col] = field[fieldSize - col - 1][col];
        for (let i = 0; i < columnCheck.length; i++) {
            columnCheck[i] = field[i][col];
            if (i === fieldSize - 1) {
                isColumn = columnCheck.every(element => element === symbol);
            }
        }

        if (col === fieldSize - 1) {
            isDiag = diag.every(element => element === symbol);
            isDiagReverse = diagReverse.every(element => element === symbol);

        }
        if (isRow || isDiag || isDiagReverse || isColumn) {
            return true;
        }
        
    }
}