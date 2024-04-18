import httpClient from "../services/httpClient"

const GetDrDoomData = async (path: string, method: string) => {
    const credentials = `${process.env.USERNAME}:${process.env.PASSWORD}`;
    const encodedCredentials = btoa(credentials);
    const endpoint = `${process.env.DR_DOOM_ENDPOINT}/${path}/?format=json`
    const response = await httpClient(endpoint, encodedCredentials, method)
    return response
}

export default GetDrDoomData