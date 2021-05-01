export default class RestoService {
    __BASE_URL = 'http://localhost:3000/';
    getMenuItems = async () => {
        const response = await fetch(`${this.__BASE_URL}menu`);

        if(!response.ok) {
            throw new Error('Server Error!');
        }

        const result = await response.json();
        
        return result;
    }
}