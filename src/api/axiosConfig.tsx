import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/1/424/ddd',
  /*
  headers: {
    'Content-type': 'application/json',
    withCredentials: true,
  },
  */
});

export default apiClient;

// 요청 인터셉터 추가하기
apiClient.interceptors.request.use(
  config =>
    // console.log(config);
    // 요청이 전달되기 전에 작업 수행
    config,
  error =>
    // 요청 오류가 있는 작업 수행
    Promise.reject(error),
);

// 응답 인터셉터 추가하기
apiClient.interceptors.response.use(
  response => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    console.log('=================================');
    console.log(response);
    return response;
  },
  error => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log('-------------------------------');
    console.log(error);
    if (error.response.status === 404) {
      alert(404);
      // useNavigate("/");
    }
    return Promise.reject(error);
  },
);
