import { APIRequestContext } from "@playwright/test";
import { config } from "../config/env";

export class UserAPI{
    constructor(
        private request: APIRequestContext,
        private apiKey: string
    ){}

    private getHeaders(){
        return{
            'x-api-key': this.apiKey
        }
    }

    async createUser(name: string, job: string){
        return await this.request.post(
            `${config.baseUrl}/api/users`,
            {
                headers:this.getHeaders(),
                data:{
                    name,
                    job
                }
            }
        );
    }

    async updateUser(name: string, job: string, userID: string){
        return await this.request.put(
            `${config.baseUrl}/api/users/${userID}`,
            {
                headers:this.getHeaders(),
                data:{
                    name,
                    job
                }
            }

        );
    }

    async deleteUser(userID: string){
        return await this.request.delete(
            `${config.baseUrl}/api/users/${userID}`,
            {
                headers:this.getHeaders(),
            }

        );

    }
}