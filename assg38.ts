function DescribeCity(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
DescribeCity('Karachi', 'Pakistan');
DescribeCity('New York', 'USA');
DescribeCity('London', 'England');
DescribeCity('Frankfurt', 'Germany');
DescribeCity('Tokyo'); // Will use the default country
