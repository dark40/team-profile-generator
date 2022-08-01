const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe('Initialization and method', () => {
        it('should create an object with Name, ID, Email and Office Number when providing valid data', () => {
            const manager = new Manager("Freddie", 1, "123@123.com", "0401123456")

            expect(manager.name).toEqual("Freddie");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("123@123.com");
            expect(manager.officeNumber).toEqual("0401123456");
        });

        it('should provide the name, id, email and office number when using methods', () => {
            const manager = new Manager("Freddie", 1, "123@123.com", "0401123456")

            expect(manager.getName()).toEqual("Freddie");
            expect(manager.getId()).toEqual(1);
            expect(manager.getEmail()).toEqual("123@123.com");
            expect(manager.getRole()).toEqual("Manager");
            expect(manager.getOfficeNumber()).toEqual("0401123456");

        });
    });
})