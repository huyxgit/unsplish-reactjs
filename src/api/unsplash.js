import axios from 'axios'

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID q4xZcxT6OUDCdO_dZAh-W0fZFevIq6pq5XL1X3uX6Fc'
    }
})