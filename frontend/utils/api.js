import handler from '../pages/api/clients/random';

class Api {
    constructor(options = {}) {
        this._baseURL = options.baseURL || "";
        this._headers = options.headers || {};
    }

   

    async get(req) {        
        const res = await fetch('http://localhost:3000/api'+req)
        const data = await res.json()        
        return { res,data }
    }
      
    post(endpoint, body, options = {}) {
        return this._fetchJSON(
            endpoint,
            {
                ...options, 
                body: JSON.stringify(body), 
                method: 'POST' 
            }
        )
    }
      
    delete(endpoint, options = {}) {
        return this._fetchJSON(
            endpoint, 
            {
                parseResponse: false,
                ...options, 
                method: 'DELETE' 
            }
        )
    }
}

export const apiInstance = new Api({
    baseURL: 'http://localhost:3000/api',
});