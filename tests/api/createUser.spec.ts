import { expect } from "@playwright/test"
import { test } from "../../fixtures/apiFixture"

test('Create User', async({ userApi })=>{
    const response = await userApi.createUser(
        "Manohar Nayanipeta",
        "SDET"
    )

    const responseBody = await response.json();
    const userID = responseBody.id;
    console.log("Newly created ID: ", userID)
    console.log(response.status());
    console.log(await response.json());
    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe("Manohar Nayanipeta");
    expect(responseBody.job).toBe("SDET");
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.createdAt).toBeTruthy();

    const updateResponse = await userApi.updateUser(
        "Manohar Nayanipeta",
        "Senior SDET Level 2",
        userID
    )

    const updateBody = await updateResponse.json();
    console.log(updateBody);
    expect(updateResponse.status()).toBe(200);
    expect(updateBody.job).toBe("Senior SDET Level 2");

    const deleteResponse = await userApi.deleteUser(userID)
    expect(deleteResponse.status()).toBe(204)

});