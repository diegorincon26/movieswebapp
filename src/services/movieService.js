import http from "./httpService";

const apiEndpoint = "/movie";

export function getMovies(page, pageSize) {
  return http.get(`${apiEndpoint}/page/${page}/pageSize/${pageSize}`);
}

export function getMovie(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

export function searchMovies(page, pageSize, keyword) {
  return http.get(
    `${apiEndpoint}/page/${page}/pageSize/${pageSize}/keyword/${keyword}`
  );
}

export default {
  getMovies,
  getMovie,
  searchMovies,
};
