/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "809d380563a7ed76507a7b392ff722fb";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "오직 넷플릭스에서",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "신규 콘텐츠",
        items: await basicFetch(
          `/trending/all/week?language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Ranked",
        title: "TOP 10 콘텐츠",
        items: await basicFetch(
          `/movie/top_rated?language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "액션",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "코미디",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "공포",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "로맨스",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=ko-KR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "다큐멘터리",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=ko-KR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=ko-KR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=ko-KR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
