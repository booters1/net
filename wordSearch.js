//in collaboration with Peter Dinh, Holina Millington
//Ryan huynh

//used transpose method from last weeks paired assignment

const transpose = function (matrix) {

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new empty transposed matrix
  const transposedMatrix = [];

  for (let i = 0; i < numCols; i++) {
    transposedMatrix[i] = []; // Initialize each row
    for (let j = 0; j < numRows; j++) {
      transposedMatrix[i][j] = matrix[j][i]; // Swap rows with columns
    };
  };

  return transposedMatrix;
};

const wordSearch = (letters, word) => { 
    // if  searched for word is empty
    if (word.length < 1 || typeof word !== 'string') {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        }
    }
    
    let newArray = transpose(letters);
    const verticalJoin = newArray.map(ls => ls.join(''))
    for (const l of verticalJoin) {
        if (l.includes(word)) {
          return true;
        };
      }
      return false;   
}


/* 
The map() method of Array instances creates a new array 
populated with the results of calling a provided 
function on every element in the calling array.
*/

module.exports = wordSearch
