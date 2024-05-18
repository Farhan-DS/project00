// Define TypeScript objects containing information about countries
const countries: { [key: string]: { capital: string, population: number, continent: string, literacy: number, } } = {
    "USA": { capital: "Washington, D.C.", population: 331000000, continent: "North America", literacy: 98 },
    "China": { capital: "Beijing", population: 1441000000, literacy: 98, continent: "Asia" },
    "Brazil": { capital: "Brasília", population: 213000000, literacy: 96, continent: "South America" },
    "Russia": { capital: "Moscow", population: 146700000, literacy: 90, continent: "Europe/Asia" },
    "India": { capital: "New Delhi", population: 1380000000, literacy: 80, continent: "Asia" },
    "Japan": { capital: "Tokyo", population: 126300000, literacy: 99, continent: "Asia" },
    "Germany": { capital: "Berlin", population: 83000000, literacy: 96,  continent: "Europe" },
    "France": { capital: "Paris", population: 67000000, literacy: 98,continent: "Europe" },
    "United Kingdom": { capital: "London", population: 67000000, literacy: 96, continent: "Europe" },
    "Pakistan": {capital: "Islamabad", population: 230000000, literacy: 70, continent: "Asia"},
    "Bangladesh": {capital: "Dhaka", population: 200000000, literacy: 70,continent: "Asia"},
    "Italy": { capital: "Rome", population: 60000000, literacy: 70, continent: "Europe" }
};

// Print information about each country
console.log("Information about countries:");
for (const country in countries) {
    if (countries.hasOwnProperty(country)) {
        console.log(`${country}:`);
        console.log(`  Capital: ${countries[country].capital}`);
        console.log(`  Population: ${countries[country].population}`);
        console.log(`  literacy: ${countries[country].literacy }`)
        console.log(`  Continent: ${countries[country].continent}`);
        console.log();
    }
}