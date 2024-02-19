export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "1dbd517445msh27ccaa4410832d6p13adaajsnc3f1f9d4d221",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();
}
