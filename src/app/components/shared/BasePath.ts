//To be used in home page.tsx as a variable to fetch data

const BASE_PATH_FORAPI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://e-com-web-pi.vercel.app/";

export default BASE_PATH_FORAPI;
