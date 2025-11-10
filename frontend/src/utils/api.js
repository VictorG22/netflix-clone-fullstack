const TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;



export const tmdbOptions = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
};
