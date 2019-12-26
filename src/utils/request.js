const request = (url, config) => {
    return fetch(url, config).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        // 服务器异常
        throw Error('')
      }
    }).then((resJson) => {
      return resJson
    }).catch((error) => {
      console.log('errorMessage')
    })
  }
 

const get = (url) => {
    return request(url, { method: 'GET' })
  }

const del = (url) => {
  return request(url, { method: 'delete' })
}
    
  
const post = (url, config) => {
    return request(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(config)
    })
  }

  const patch = (url, config) => {
    return request(url, {
      method: 'patch',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(config)
    })
  }
  const put = (url, config) => {
    return request(url, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(config)
    })
  }

  export default {
    request,
    get,
    post,
    del,
    put,// 将修改的数据全部替换
    patch// 只会修改数据的某一部分
  };