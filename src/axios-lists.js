import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-planner.firebaseio.com/'
});

export default instance;