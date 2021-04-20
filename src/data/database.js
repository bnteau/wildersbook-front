import axios from "axios";

export function getWilders() {
    return axios.get("http://localhost:5000/", {
        headers: { 'Access-Control-Allow-Origin': '*' }
    });
}

export function createWilder(wilder) {
    return axios.post("http://localhost:5000/create", {
        headers: { 'Access-Control-Allow-Origin': '*' },
        wilder
    })
}