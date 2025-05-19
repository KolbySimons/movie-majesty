import { generateMoviesHTML } from "./movie-converter.js";
import { renderMoviesToDOM } from "./movie-render.js";

const movieHTML = generateMoviesHTML();
renderMoviesToDOM(movieHTML);
