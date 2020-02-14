export default class Gif {
  constructor(data) {
    this.title = data.title
    this.url = data.images.original.url
  }

  get Template() {
    return `
    <div class="col-12">
    <h3 class="pb-3">${this.title}</h3>
    <img src="${this.url}" alt="">
</div>   
    `
  }

  get libraryTemplate() {
    return `
    
    
    
    `
  }
}