export {};

const TOKEN = {
  SECRET: 'e5tb02d2BPQovwM1XugSuy2m6Uqpfn5XAlUdPdH7h2Iwth8HKZMRSiLjZakO5H4',
  LIFE: '5h',
  ALGORITHM: 'HS256',
};

const CRYPTO = {
  SALT: 'salt',
  ITERATIONS: 100000,
  KEYLEN: 64,
  DIGEST: 'sha512',
};

module.exports = {
  TOKEN,
  CRYPTO,
};
