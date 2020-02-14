import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _draw() {
  let gifs = store.State.gifs;
  // @ts-ignore
  let template = gifs.Template
  document.getElementById("gif-display").innerHTML = template
}

function _drawMyGifs() {
  let gifs = store.State.myGifs
  let template = ""
  gifs.forEach(g => {
    template += g.libraryTemplate
  })
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _draw);
    store.subscribe("myGifs", _drawMyGifs)

    GifsService.getRandomGif()
  }

  addGif() {
    GifsService.addGif()
  }


}
