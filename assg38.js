function DescribeCity(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
DescribeCity('Karachi', 'Pakistan');
DescribeCity('New York', 'USA');
DescribeCity('London', 'England');
DescribeCity('Frankfurt', 'Germany');
DescribeCity('Tokyo'); // Will use the default country
