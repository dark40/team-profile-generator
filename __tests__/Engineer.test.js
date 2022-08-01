const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe('Initialization and method', () => {
        it('should create an object with Name, ID, Email and github when providing valid data', () => {
            const engineer = new Engineer("Freddie", 1, "123@123.com", "dark40")

            expect(engineer.name).toEqual("Freddie");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("123@123.com");
            expect(engineer.github).toEqual("dark40");
        });

        it('should provide the name, id, email and office number when using methods', () => {
            const engineer = new Engineer("Freddie", 1, "123@123.com", "dark40")

            expect(engineer.getName()).toEqual("Freddie");
            expect(engineer.getId()).toEqual(1);
            expect(engineer.getEmail()).toEqual("123@123.com");
            expect(engineer.getRole()).toEqual("Engineer");
            expect(engineer.getGithub()).toEqual("dark40");

        });
    });
})