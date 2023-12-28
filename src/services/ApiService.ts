class Api {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async fetchInfo(query: string) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

const createApi = (apiUrl: string) => {
  return new Api(apiUrl);
};
export default createApi;
