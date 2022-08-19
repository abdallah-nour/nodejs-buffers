// process.stdin.on('data', (data) => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });

process.stdin.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // const readBuffer = process.stdin.read();
  // console.log('HOWWW: ', readBuffer.toString());
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});
