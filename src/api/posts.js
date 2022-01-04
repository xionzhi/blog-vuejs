import axios from 'axios';

let PostApi = {}

// 文章列表
PostApi.list = (params) => {
    return axios.get('/v1/api/post/list', {params});
}

// 查询文章
PostApi.get = (params) => {
    return axios.get('/v1/api/post/detail', {params});
}

// 新增文章
PostApi.post = (params) => {
    return axios.post('/v1/api/post/detail', params);
}

// 修改文章内容
PostApi.put = (params) => {
    return axios.put('/v1/api/post/detail', params);
}

// 修改文章状态
PostApi.patch = (params) => {
    return axios.patch('/v1/api/post/detail', params);
}

// 删除文章状态
PostApi.delete = (params) => {
    return axios.delete('/v1/api/post/detail', params);
}

export default PostApi
