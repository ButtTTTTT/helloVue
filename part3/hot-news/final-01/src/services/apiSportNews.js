export const getSportNews = async () => {
    try {
      const response = await fetch(
        "/sport-news"
      );
      const data = await response.json();
      return data;
    } catch (err) {
        throw new Error(err.message);
    }
  };
export const getCarNews = async () => {
    try {
      const response = await fetch(
        "/car-news"
      );
      const data = await response.json();
      return data;
    } catch (err) {
        throw new Error(err.message);
    }
  };
  