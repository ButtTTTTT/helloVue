export const getHotNews = async () => {
  try {
    const response = await fetch(
      "/hot-news"
    );
    const data = await response.json();
    return data;
  } catch (err) {
      throw new Error(err.message);
  }
};