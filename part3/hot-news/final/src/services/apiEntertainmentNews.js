import getNews from "./apiGetNews";

export const getEntertainmentNews = async () => {
  return await getNews("/entertainment-news");
};
