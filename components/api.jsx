// api.js
import axios from 'axios';

export const apiService = {
    placeOrder: async (orderData) => {
        try {
            const response = await axios.post('/api/place-order', orderData);
            return response.data; // Assuming the server returns the response in this format
        } catch (error) {
            console.error('Error placing order:', error);
            throw new Error('Failed to place order');
        }
    },
    // Additional API methods can be added here
};
