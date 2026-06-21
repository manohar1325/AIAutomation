import { test as base } from "@playwright/test"
import { UserAPI } from "../api/userApi"
import { config } from "../config/env"

type ApiFixtures = {
    userApi: UserAPI;
};

export const test = base.extend<ApiFixtures>({
    userApi:async ({ request }, use) => {
        const userApi = new UserAPI(request, config.apiKey);
        await use(userApi)
    }

})
