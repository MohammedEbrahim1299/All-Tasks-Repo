const getCategoryNews = async (keyword) => {
    try {
      const response = await fetch(
        `GET https://newsapi.org/v2/everything?q=${keyword}&apiKey=b44943cd52fd4548b511305572881036`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return new Error(error);
    }
  };