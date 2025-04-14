export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR =
  "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTg5OGZlMGQ4NTQyMGQyNzEyMzk5OWMwYjhlMGU0NSIsIm5iZiI6MTczMjUyOTQyOC42Njg3NzgyLCJzdWIiOiI2NzQyZjhmZWQ4ZGI3ZGQxYmE0NTViYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.soPK_EYVXK0-Pp1csIdG112P44zxhyDLx7YdFQRKSg8",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifire: "en", name: "English" },
  { identifire: "hindi", name: "Hindi" },
  { identifire: "spanish", name: "Spanish" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

