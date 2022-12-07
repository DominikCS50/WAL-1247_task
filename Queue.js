export default class Queue {
  //const fifo = new Queue("SomeFifoName") //Gdzie SomeFifoName jest nazwą wykorzystywaną do zapisywania potrzebnych danych w localForage
  //fifo.push_head(element) //Metoda wstawia element (np string, lub coś innego) do kolejki (od strony Head)- modyfikuje zawartość localForage i wychodzi
  //fifo.pop_tail() //Metoda pobiera element z kolejki (od strony Tail) i usuwa go z kolejki
  //fifo.tail() //metoda zwraca/podgląda (ale nie usuwa) element z kolejki (od strony tail)
  //fifo.head() //metoda zwraca/podgląda (ale nie usuwa) element z kolejki (od strony head)

  constructor(next, prev, value) {
    this.elementy = [];
  }

  push_head(element) {
    this.elementy.unshift(element);
    var u = './Bob';

    async function getDataFromApi(element) {
      const data = await fetch(u);
      return data;
    }
    
    getDataFromApi().then((resp) => {
      console.log(resp);
        resp.json().then((response) => {
          saveDataToDb(response)
      })
    }).catch((err) => console.log(err));
    
    function saveDataToDb(data) {
      localForage.setItem(data);
      console.log(data)
    }
    // dodać localforage
  }

  pop_tail() {
    return this.elementy.shift();
  }

  head() {
    // if (this.elementy.length === 0) return this.elementy[0];
    return this.elementy[0];
  }

  tail() {
    return this.elementy[this.elementy.length - 1];
  }
}
