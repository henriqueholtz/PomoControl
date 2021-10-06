/* eslint-disable */
// import { PomoControlSettings }
const urlBase = 'https://localhost:5001/api/';
const urlsAllowAnonymous = ['health', 'signin', 'signup'];

export class Request {
    /**
    * @param {string} url
    * @param {object} data
    * @param {object} headers
    */
    static Get(url, data, headers = {}) {
        if(urlsAllowAnonymous.includes(url)) {
            return _makeRequest(urlBase.concat(url), {method: 'GET', headers, "Access-Control-Allow-Origin": "*", "Accept": "text/plain"}, false);
        } else {
            urlBase.concat(urlBase, Request.BuildQueryString(data));
            console.error('Warning! This request has not been implemented.');
        }
    }


    /**
     * @param {string} data
     * @param {string} char
     */
    static BuildQueryString(data, char = '?') {
        if (data && Object.keys(data).length > 0) {
            let params = [];
            for (var key in data) {
                const value = data[key];
                if (!isNull(value)) {
                    if(Array.isArray(value)) {
                        params = [...params, ...value.map(x => `${key}=${x}`)];
                    } else {
                        params.push(`${key}=${value}`);
                    }
                }
            }

            return char + params.join('&');
        }
        return '';
    }
}

let _makeRequest = (url, config, parseJson = true) => {
    return new Promise((resolve, reject) => {
        let resp;
        fetch(url, config)
            .then(response => {
                console.log('1° then', response)
                if (response.status === 204) {
                    resolve();
                }

                if(response.status === 500) {
                    reject({ response, error: 'Error status 500'});
                }
                resp = response;
                return response.text();
            })
            .then(text => {
                console.log('2° then', text)
                if(parseJson){
                    if (resp.status && resp.status >= 200 && resp.status < 300) {
                        resolve(JSON.parse(text), resp.status);
                    }
                    reject({resp, error: text ? JSON.parse(text) : ''})
                } else {
                    resolve(text); 
                }
            })
            .catch(ex => {
                console.log('catch', ex)
                reject(ex)
            });
    })
};

let isNull = obj => obj === null || obj === undefined;