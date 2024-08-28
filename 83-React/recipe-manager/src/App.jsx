function App() {
  fetch(
    "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&apiKey=d7636ad022464934935b2c6d69e299fa",
    {
      method: "GET", // Specify the method
      headers: {
        "Content-Type": "application/json",
        // Specify the content type
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return <>App</>;
}

export default App;
