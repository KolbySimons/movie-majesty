import { movies } from "./movies-data.js";

export const generateMoviesHTML = () => {
  let movieHTML = "";

  for (const movie of movies) {
    movieHTML += `
           <article class="movie">
               <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
               <div class="movie__details">
                   <h2 class="movie__title">${movie.title}</h2>
                   <p class="movie__description">${movie.description}</p>
               </div>
           </article>
       `;
  }

  return movieHTML;
};
