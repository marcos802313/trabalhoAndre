function verificaPalindromo(str) {
  const stringTratada = str.toLowerCase().replace(/\s/g, "");

  return stringTratada === stringTratada.split("").reverse().join("");
}

module.exports = verificaPalindromo;
