const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe('Initialization and method', () => {
        it('should create an object with Name, ID and Email when providing valid data', () => {
            const employee = new Employee("Freddie", 1, "123@123.com")

            expect(employee.name).toEqual("Freddie");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("123@123.com");
        });

        it('should provide the name, id and email when using methods', () => {
            const employee = new Employee("Freddie", 1, "123@123.com")

            expect(employee.getName()).toEqual("Freddie");
            expect(employee.getId()).toEqual(1);
            expect(employee.getEmail()).toEqual("123@123.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
})