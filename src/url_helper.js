import Axios from 'axios';

const baseUrl = 'http://13.127.52.182/Build-and-beautify';

export const signin = (data) => Axios({  method: 'post',url: `${baseUrl}/signin`, data});

export const signup = (data) => Axios({  method: 'post',url: `${baseUrl}/signup`, data});

export const createClient = (data) => Axios({  method: 'post',url: `${baseUrl}/create-client`, data});

export const updateClient = (data) => Axios({  method: 'post',url: `${baseUrl}/update-client`, data});

export const getClient = () => Axios({  method: 'get',url: `${baseUrl}/get-client`});

export const deleteClient = (data) =>Axios({method: 'delete',url: `${baseUrl}/delete-client`,params: data})