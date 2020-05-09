export default class Movie {
  constructor(name, link, image, year, rate) {
    this.name = name;
    this.link = link;
    this.image = image;
    this.year = year;
    this.rate = rate;
  }

  getMovie() {
    return `<div class="swiper-slide">
              <a href="${this.link}" class="name">${this.name}</a>
              <img src="${this.image}" alt="Movie cover" class="image">
              <p class="year">${this.year}</p>
              <div class="rating">
                <i class="fa fa-star git-icon"></i>
                <p class="rate">${this.year}</p>
              </div>
            </div>`;
  }
}
