import { test, expect } from "@playwright/test"

test('Get User details', async({ request })=>{

    const response = await request.get(
    'https://reqres.in/api/users/2',{
        headers: {
            'x-api-key': 'free_user_3FP2m7H9aRzWPwLJ4vCGItOxDLz'
        }
    }
);
    console.log("Status", response.status());

    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
    expect(responseBody.data.first_name).toBe("Janet");
    expect(responseBody.data.last_name).toBe("Weaver");

});