export class API {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async get(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        return await response.json();
      } catch (error) {
        console.error('API Error:', error);
      }
    }
  
    async post(endpoint, data) {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        return await response.json();
      } catch (error) {
        console.error('API Error:', error);
      }
    }
  }