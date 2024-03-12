import getNews from "./apiGetNews";

export const getCarNews = async () => {
  return await getNews("/car-news");
};
