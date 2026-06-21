import * as dotenv from 'dotenv'

dotenv.config();

export const config = {
    apiKey: process.env.API_KEY || '',
    baseUrl: process.env.BASE_URL || ''
};