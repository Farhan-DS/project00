function CityofCountry(city: string, country: string, language: string): string {
    return `${city}, ${country}, ${language}`;
}

// Calling the function with three city-country pairs
console.log(CityofCountry('Lahore', 'Pakistan', 'Urdu'));
console.log(CityofCountry('Paris', 'France', 'French')); 
console.log(CityofCountry('Tokyo', 'Japan', 'Janpanese'));