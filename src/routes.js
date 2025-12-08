export const toMovies = () => "/movies";
export const toPeople = () => "/people";

export const toMovie = () => "/movie";
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`;
