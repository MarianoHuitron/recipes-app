import { simpleFetch } from '../../helper/fetch';

describe('Testing fetch helper', () => {
    test('should return array', async () => {
        const endpoint = '/categories.php';
        const resp = await simpleFetch(endpoint);
        expect( resp.categories ).toEqual(expect.any(Array));
    });  

    test('should show log error', async () => {
        const endpoint = '/categordsies.php';
        const resp = await simpleFetch(endpoint);
        expect( resp ).toBe(null);
    })
    
});