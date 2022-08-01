const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe('Initialization and method', () => {
        it('should create an object with Name, ID, Email and school when providing valid data', () => {
            const intern = new Intern("Freddie", 1, "123@123.com", "University of Melbourne")

            expect(intern.name).toEqual("Freddie");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("123@123.com");
            expect(intern.school).toEqual("University of Melbourne");
        });

        it('should provide the name, id, email and office number when using methods', () => {
            const intern = new Intern("Freddie", 1, "123@123.com", "University of Melbourne")

            expect(intern.getName()).toEqual("Freddie");
            expect(intern.getId()).toEqual(1);
            expect(intern.getEmail()).toEqual("123@123.com");
            expect(intern.getRole()).toEqual("Intern");
            expect(intern.getSchool()).toEqual("University of Melbourne");

        });
    });
})