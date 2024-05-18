// Define a Shirt interface
interface Shirt {
    size: string;
    message: string;
  }
  
  // Define the makeShirt function
  function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): Shirt {
    return { size, message };
  }
  
  // Making a large shirt with the default message
  const LargeShirt: Shirt = makeShirt();
  console.log("Large Shirt:", LargeShirt);
  
  // Making a medium shirt with the default message
  const MediumShirt: Shirt = makeShirt('medium');
  console.log("Medium Shirt:", MediumShirt);
  
  // Making a shirt of any size with a different message
  const CustomShirt: Shirt = makeShirt('small', 'JavaScript is awesome!');
  console.log("Custom Shirt:", CustomShirt);