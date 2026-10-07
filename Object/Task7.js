const company = {
    name: "ABC",
    employee: {
        name: "Kundan",
        address: {
            city: "Jaipur",
            country: {
                name: "India"
            }
        }
    }
};


console.log(company.employee.address.city);
console.log(company.employee.address.country.name);