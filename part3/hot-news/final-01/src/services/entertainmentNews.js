export const getEntertainmentNews = async () => {
    try {
      const response = await fetch(
        "/entertainment-news"
      );
      const data = await response.json();
      return data;
    } catch (err) {
        throw new Error(err.message);
    }
  };
  