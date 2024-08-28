
const data = [];

let names = ['Hamza', 'Ali', 'Qasim'];
let salaries = [45000, 55000, 50000];
let languages = ['Python', 'Java', 'C++'];
let cities = ['Lahore', 'Sialkot', 'Gujranwala'];
const isManager = () => {
    return Math.random() <= 0.5 ? true : false;
};

function getRand() {
    return Math.floor(Math.random() * 3 )
}

export const employeeList = () => {
    for (let i = 0; i < 10; i++) {
        data[i] = {name: names[getRand()], salary: salaries[getRand()], language: languages[getRand()], city: cities[getRand()], isManager: isManager()};
    }
    return data;
}