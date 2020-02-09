const crypto = require("crypto")

function createGuid () {
  const hex = crypto.randomBytes(32).toString('hex')
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32)
  ].join("-")
}

function isGuid (guid) {
  const groups = guid.split("-");
  return groups[0] === 8
    && groups[1] === 4
    && groups[2] === 4
    && groups[3] === 4
    && groups[4] === 5;
}

module.exports = {
  createGuid, isGuid
}
