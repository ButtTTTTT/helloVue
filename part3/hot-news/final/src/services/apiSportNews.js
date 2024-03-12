import getNews from "./apiGetNews";

export const getSportNews = async () => {
  return await getNews("/sport-news");
};
