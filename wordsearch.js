const wordSearch = function (letters, word) {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposedLetters = transpose(letters);
  const newJoin = transposedLetters.map((ls) => ls.join(""));
  for (const r of newJoin) {
    if (r.includes(word)) return true;
  }
  return false;
};

const transpose = function (letters) {
  let newArray = [];
  for (let i = 0; i < letters.length; i++) {
    newArray.push([]);
  }
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      newArray[j].push(letters[i][j]);
    }
  }
  return newArray;
};

module.exports = wordSearch;

// const transpose = letters[0].map((_, colIndex) =>
//       letters.map((row) => row[colIndex])
//     );
