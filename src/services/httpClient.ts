const httpClient = async (endpoint: string, authorization: string, method: string) => {
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authorization}`
        },
        method: `${method}`
    })
    return response.json()
}

export default httpClient;