import 'whatwg-fetch'

function getNewUrl(url, obj) {
    let arr = [];
    Object.keys(obj).forEach(v => {
        arr.push(`${v}=${obj[v]}`)
    })
    if (url.search(/\?/) === -1) {
        url += '?' + arr.join('&')
    } else {
        url += '&' + arr.join('&')
    }
    return url;
}

 const HTTPUtil = params => {
    //  post 请求
    let url = params.url || '',
        // get 请求，默认
        type = params.type || 'GET',
        data = params.data || {},
        headers = params.headers || {},
        successCallback = params.success

     if (type == 'POST' || type == 'post') {
        return fetch(url, {
            method: 'POST',
            headers:headers,
            body: JSON.stringify(data)
        }).then(res => {
            return res.json()
        }).then(data => {
            successCallback(data)
        })
     }else if(type == "GET" || type == 'get'){
        // get 请求，默认
        let newUrl = getNewUrl(url, data)
       return fetch(newUrl).then(res => {
            return res.json()
        }).then(data => {
            successCallback(data)
        })
     }
 }
 window.$fetch = HTTPUtil

















// fetch('/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: 'Hubot',
//       login: 'hubot',
//     })
// })

// HTTPUtil.get = function(url, params, headers) {
//     if (params) {
//         let paramsArray = [];
//         //encodeURIComponent
//         Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
//         if (url.search(/\?/) === -1) {
//             url += '?' + paramsArray.join('&')
//         } else {
//             url += '&' + paramsArray.join('&')
//         }
//     }
//     return new Promise(function (resolve, reject) {
//       fetch(url, {
//             method: 'GET',
//             headers: headers,
//           })
//           .then((response) => {
//               if (response.ok) {
//                   return response.json();
//               } else {
//                   reject({status:response.status})
//               }
//           })
//           .then((response) => {
//               resolve(response);
//           })
//           .catch((err)=> {
//             reject({status:-1});
//           })
//     })
// }


// /**
//  * 基于 fetch 封装的 POST请求  FormData 表单数据
//  * @param url
//  * @param formData
//  * @param headers
//  * @returns {Promise}
//  */
// HTTPUtil.post = function(url, formData, headers) {
//     return new Promise(function (resolve, reject) {
//       fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body:formData,
//           })
//           .then((response) => {
//               if (response.ok) {
//                   return response.json();
//               } else {
//                   reject({status:response.status})
//               }
//           })
//           .then((response) => {
//               resolve(response);
//           })
//           .catch((err)=> {
//             reject({status:-1});
//           })
//     })
// }

// export default newFetch;

// import {baseUrl} from './env';

// export default async (type = 'GET', url = '', data = {}, method = 'fetch') => {
//   type = type.toUpperCase();
//   url = baseUrl + url;

//   if (type === 'GET') {
//     let dataStr = '';
//     Object.keys(data).forEach( key => {
//       dataStr += key + '=' + data[key] + '&';
//     });

//     if (dataStr !== '') {
//       dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
//       url = url + '?' + dataStr;
//     }
//   }

//   if (window.fetch && method === 'fetch') {
//     let requestConfig = {
//       credentials: 'include',
//       method: type,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       mode: 'cors',
//       cache: 'force-cache'
//     }
//     if (type === 'POST') {
//       Object.defineProperty(requestConfig, 'body', {
//         value: JSON.stringify(data)
//       })
//     }

//     try {
//       var response = await fetch(url, requestConfig);
//       var responseJson = await response.json();
//     } catch (error) {
//       throw new Error(error)
//     }
//     return responseJson
//   } else {
//     let requestObj;
//     if (window.XMLHttpRequest) {
//       requestObj = new XMLHttpRequest();
//     }
//     let sendData = '';
//     if (type === 'POST') {
//       sendData = JSON.stringify(data);
//     }
//     requestObj.open(type, url, true);
//     requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     requestObj.send(sendData);

//     requestObj.onreadystatechange = () => {
//       if (requestObj.readyState === 4) {
//         if (requestObj.status === 200) {
//           let obj = requestObj.reserved;
//           if (typeof obj !== 'object') {
//             obj = JSON.parse(obj);
//           }
//           return obj;
//         } else {
//           throw new Error(requestObj)
//         }
//       }
//     }
//   }
// }
