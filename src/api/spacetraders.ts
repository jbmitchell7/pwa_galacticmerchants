import axios from "axios";

const API_URL = 'https://api.spacetraders.io';

const spacetradersFetch = async (url: string, method = 'GET', payload = {}) => {

    const token = localStorage.getItem('TOKEN');

    let headers = {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
    }

    try {

        const options = {
            headers,
            method,
            url: API_URL + url,
            data: payload,
        }

        const response = await axios(options);

        return response.data

    } catch (err) {
        throw new Error("Error retrieving data")
    }
}

export const fetchPost = async (url: string, payload: any) => spacetradersFetch(url, 'POST', payload);
export const fetchGet = async (url: string, payload: any) => spacetradersFetch(url, 'GET', payload);
export const fetchPut = async (url: string, payload: any) => spacetradersFetch(url, 'PUT', payload);
export const fetchDelete = async (url: string, payload: any) => spacetradersFetch(url, 'DELETE', payload);