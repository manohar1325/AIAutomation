import * as dotenv from 'dotenv';

dotenv.config();

console.log("===== ENV DEBUG =====");
console.log("BASE_URL =", process.env.BASE_URL);
console.log("API_KEY EXISTS =", !!process.env.API_KEY);
console.log("=====================");

export const config = {
    apiKey: process.env.API_KEY || '',
    baseUrl: process.env.BASE_URL || ''
};