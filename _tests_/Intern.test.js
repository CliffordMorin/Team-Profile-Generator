const Intern = require('../lib/Intern')

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("would return user's school name", () => {
            const intern = new Intern("charles", "26", "charles@aol.com", "Rutgers University");
            expect(intern.getSchool()).toBe("Rutgers University");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const intern = new Intern("charles", "26", "charles@aol.com", "Rutgers University");
            expect(intern.getRole()).toBe("Intern");
        })
    });
})