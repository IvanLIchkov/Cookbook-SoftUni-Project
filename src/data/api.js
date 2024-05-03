const host = 'http://localhost:3030';

async function request(method, url, data){
    try{
        const accessToken = sessionStorage.accessToken;

        const options = {
            method,
            headers: {}
        };

        if (accessToken !== undefined){
            options.headers['X-Authorization'] = accessToken;
        }
        if (data !== undefined){
            if (data.rePass !== undefined){
                if (data.email === '' || data.password === '' || data.rePass === ''){
                    throw Error('All fields are required!');
                }else if (data.password !== data.rePass){
                    throw Error('Password and repeat must match!')
                }
            }
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }
        const response = await fetch(host + url, options);

        let result;

        if (response.status !== 204){
            result = await response.json();
        }
        if (response.ok === false){
            if (response.status === 403){
                sessionStorage.removeItem('accessToken');
            }

            const error = result;
            throw error;
        }
    return result;
    }catch (e){
        alert(e.message)
        throw e;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
