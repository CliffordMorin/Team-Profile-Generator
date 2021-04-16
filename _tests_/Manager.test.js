const Manager = require('../lib/Manager')

describe("Manager class", () => {
    describe("getOfficeNumber method", () => {
        it("would return user's office number", () => {
            const manager = new Manager("charles", "26", "charles@aol.com", "27");
            expect(manager.getOfficeNumber()).toBe("27");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const manager = new Manager("charles", "26", "charles@aol.com", "Rutgers University");
            expect(manager.getRole()).toBe("Manager");
        })
    });
})