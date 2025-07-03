function isValidCode(code) {
  if (code.length !== 7) return false;

  for (let i = 0; i < 3; i++) {
    const ch = code[i];
    if (!(ch.toLowerCase() >= 'a' && ch.toLowerCase() <= 'z')) {
      return false;
    }
  }

  for (let i = 3; i < 7; i++) {
    const ch = code[i];
    if (!(ch >= '0' && ch <= '9')) {
      return false;
    }
  }

  return true;
}

function normalizeCode(code) {
  const letters = code.slice(0, 3).toUpperCase();
  const digits = code.slice(3);
  return letters + digits;
}

function processData(data) {
  const normalizedValidCodes = [];
  let validCount = 0;
  let invalidCount = 0;

  for (const code of data) {
    if (isValidCode(code)) {
      validCount++;
      normalizedValidCodes.push(normalizeCode(code));
    } else {
      invalidCount++;
    }
  }

  normalizedValidCodes.sort();

  return {
    totalCodes: data.length,
    validCodes: validCount,
    invalidCodes: invalidCount,
    normalizedValidCodes: normalizedValidCodes
  };
}

module.exports = { processData };
