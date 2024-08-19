
// Define the geoCountry variable
let geoCountry;

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to fetch country information based on IP
async function getGeoCountry() {
  try {
    // Make an HTTP GET request to the geoapi endpoint
    const response = await fetch("https://get.geojs.io/v1/ip/country.json");

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Set the geoCountry variable with the response
    geoCountry = data;

    // Set the cookie with the country value
    setCookie("countryCookie", geoCountry.country, 30); // Set cookie for 30 days

    // Log the country property to the console
    // console.log(`Country: ${geoCountry.country}`);

    // Update the elements based on the country
    updateElementsBasedOnCountry();
  } catch (error) {
    // Handle any errors that occur during the fetch
    // console.error("There was a problem with the fetch operation:", error);
  }
}

// Function to update elements based on the country cookie
function updateElementsBasedOnCountry() {
  const country = getCookie("countryCookie");
  const elements = document.querySelectorAll("[data-ind][data-usd]");

  if (elements.length > 0) {
    for (let element of elements) {
      if (country === "IN") {
        element.textContent = element.getAttribute("data-ind");
      } else {
        element.textContent = element.getAttribute("data-usd");
      }
    }
  }
}

// Check if the cookie is present
if (!getCookie("countryCookie")) {
  getGeoCountry();
} else {
  // Update the elements based on the country
  updateElementsBasedOnCountry();
}
