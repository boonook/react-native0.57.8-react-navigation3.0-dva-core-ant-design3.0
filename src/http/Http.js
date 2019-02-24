import { Alert } from 'react-native';
const CTX = '192.168.60.150:8888';

export function httpMusicGet(uri) {
    let init = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    return new Promise(function (resolve, reject) {
        fetch(uri, init).then(response => {
            debugger
            let data = response.json();
            console.log(data);
        })
    });
}
/***
 * @param uri
 * @returns {Promise}
 */
export function httpGet(uri,params) {
    uri = CTX + uri;
    let init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:params
    };
    return new Promise(function (resolve, reject) {
        fetch(uri, init)
            .then(response => response.json())
            .then(data => {
                if (data.status === 0) {
                    resolve(data);
                } else {
                    processError(data);
                }
            }).catch(function (ex) {
            reject(ex);
            Alert.alert('错误提示', '网络链接出错');
        });
    });
}

/***
 * @param uri
 * @param params
 * @returns {Promise}
 */
export function httpPost(uri, params) {
    uri = CTX + uri;
    let init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };
    return new Promise(function (resolve, reject) {
        fetch(uri, init)
            .then(response => response.json())
            .then(data => {
                if (data.status === 0) {
                    resolve(data);
                } else {
                    processError(data);
                }
            }).catch(function (ex) {
            reject(ex);
            Alert.alert('错误提示', '网络链接出错');
        });
    });
}

/**
 *
 * @param uri
 * @param params
 * @returns {Promise}
 */
export function httpUpload(uri, params) {
    uri = CTX + uri;
    let init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: params
    };
    return new Promise(function (resolve, reject) {
        fetch(uri, init)
            .then(response => response.json())
            .then(data => {
                if (data.status === 0) {
                    resolve(data);
                } else {
                    processError(data);
                }
            }).catch(function (ex) {
            reject(ex);
            Alert.alert('错误提示', '网络链接出错');
        });
    });
}