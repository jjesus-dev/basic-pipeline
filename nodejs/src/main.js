async function main() {
  // Función básica para realizar el llamado a una API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // Imprime en consola el resultado
  console.log(data);
}

main().catch(console.error);