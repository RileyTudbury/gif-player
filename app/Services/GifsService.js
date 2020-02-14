import store from "../store.js";
import Gif from "../Models/Gif.js"

// @ts-ignore
let _sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Riley/gifs",
  timeout: 3000
})

// @ts-ignore
let _giphyApi = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs/random?api_key=v7fQNYEgQoSc1Gi8jaTuFbgYRBjvOZt0"

})



class GifsService {


  getRandomGif() {
    _giphyApi
      .get("")
      .then(res => {

        let results = new Gif(res.data.data)
        store.commit("gifs", results)
        console.log("Should be Title and Url: ", store.State.gifs)
      })
  }

  addGif() {
    _sandboxApi
      .post("", store.State.gifs)
      .then(res => {
        let gif = new Gif(res.data.data)
        let myGifs = [...store.State.myGifs, gif]
        store.commit("myGifs", myGifs)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

}

const service = new GifsService();
export default service;
