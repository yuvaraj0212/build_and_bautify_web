import Axios from "axios";

const baseUrl = "http://13.235.75.217:8080/bab";
// const baseUrl = "http://localhost:8080";

export const signin = (data) =>
  Axios({ method: "post", url: `${baseUrl}/signin`, data: data });

export const signup = (data) =>
  Axios({ method: "post", url: `${baseUrl}/signup`, data: data });

export const createClient = (data) =>
  Axios({ method: "post", url: `${baseUrl}/create-client`, data: data });

export const createClientEnquiry = (data) =>
  Axios({
    method: "post",
    url: `${baseUrl}/create-client-enquiry`,
    data: data,
  });

export const createClientService = (data) =>
  Axios({
    method: "post",
    url: `${baseUrl}/create-client-service`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateClientService = (data) =>
  Axios({
    method: "post",
    url: `${baseUrl}/update-client-service`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateClient = (data) =>
  Axios({ method: "post", url: `${baseUrl}/update-client`, data });

export const getClient = () =>
  Axios({ method: "get", url: `${baseUrl}/get-client` });

export const deleteClient = (data) =>
  Axios({ method: "delete", url: `${baseUrl}/delete-client`, params: data });

export const getEnquiry = () =>
  Axios({ method: "get", url: `${baseUrl}/get-client-enquiry` });

export const getService = () =>
  Axios({ method: "get", url: `${baseUrl}/get-client-service` });

export const getNotifyction = () =>
  Axios({ method: "get", url: `${baseUrl}/notify` });

export const getDelNotifyction = () =>
  Axios({ method: "get", url: `${baseUrl}/delnotify` });

export const getServiceNotifyction = () =>
  Axios({ method: "get", url: `${baseUrl}/getServicenotify` });

export const getDelServiceNotifyction = () =>
  Axios({ method: "get", url: `${baseUrl}/delSerivcenotify` });
