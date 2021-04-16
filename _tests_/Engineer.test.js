const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("would return the user github username", () => {
            const engineer = new Engineer("charles", "26", "charles@aol.com", "github");
            expect(engineer.getGithub()).toBe("github");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const engineer = new Engineer("charles", "26", "charles@aol.com", "github");
            expect(engineer.getRole()).toBe("Engineer");
        })
    });
})