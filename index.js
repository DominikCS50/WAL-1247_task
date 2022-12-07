// run `node index.js` in the terminal
import Queue from './Queue.js';
import * as localForage from 'localforage';

console.log(`Hello Node.js v${process.versions.node}!`);

//const fifo = new Queue("SomeFifoName") //Gdzie SomeFifoName jest nazwą wykorzystywaną do zapisywania potrzebnych danych w localForage
//fifo.push_head(element) //Metoda wstawia element (np string, lub coś innego) do kolejki (od strony Head)- modyfikuje zawartość localForage i wychodzi
//fifo.pop_tail() //Metoda pobiera element z kolejki (od strony Tail) i usuwa go z kolejki
//fifo.tail() //metoda zwraca/podgląda (ale nie usuwa) element z kolejki (od strony tail)
//fifo.head() //metoda zwraca/podgląda (ale nie usuwa) element z kolejki (od strony head)

const dane = new Queue();

dane.push_head();

