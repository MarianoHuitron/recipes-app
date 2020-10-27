
export const simpleFetch = async (endpoint) => {
    const url = `https://www.themealdb.com/api/json/v1/1${endpoint}`;

    try {
        const resp = await fetch(url);
        const body = await resp.json();
        return body;
    } catch (error) {
        return null;
    }
}