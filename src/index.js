function isOpeningBracket(bracket, config) {
  for (let i = 0; i < config.length; i++) {
    if (bracket === config[i][0]) {
      return true;
    }
  }

  return false;
}

function match(openingBracket, closingBracket, config) {
  for (let i = 0; i < config.length; i++) {
    if (config[i][0] === openingBracket) {
      if (config[i][1] === closingBracket) {
        return true;
      } else {
        return false;
      }
    }
  }

  return false;
}

'('

module.exports = function check(str, config) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    // ')'
    let currentBracket = str[i];

    if (isOpeningBracket(currentBracket, config)) {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0) {
        return false;
      }

      // stack === ['(']

      let lastBracket = stack.pop();
      // currentBracket === ']'
      // lastBracket === '('
      let isMatching = match(lastBracket, currentBracket, config);

      if (!isMatching) {
        return false;
      }
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}