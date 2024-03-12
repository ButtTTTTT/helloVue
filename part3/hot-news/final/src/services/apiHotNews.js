import getNews from "./apiGetNews";

export const getHotNews = async () => {
  return await getNews("/hot-news");
};
