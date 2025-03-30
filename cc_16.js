// Task 1: setting up the project structure : created folder,and files :) 

// Task 2 : fetch products with .then()
// **trial** trying to fetch the product data from the link 
function fetchProductsThen() {
    // storing the  API,  URL ciontains the data ) 
    const url = "https://www.course-api.com/javascript-store-products";
    //* step 1: fetching tHE data from the API 
    fetch(url) 
    .then(function(response) {
    return response.json() ; // json( turns the response into data that can be used )
    }) 
    .then (function(products) {
        // looping the products and logging the names
        products.forEach(function(product) {
        console.log ("Product name:", product.fields.name);
    });
    })

 // 2nd - converting the response into 
    .catch (function(error) {  // logs any  error messsags& will display in case somethings is wrong 
    console.log("Fetch eror",error );
    });
}

// Task 3: Fetch Products with async/await 
// this is the same as before but now it's usifn async
async function fetchProductsAsync() {
// APU url for the products 
 const url = "https://www.course-api.com/javascript-store-products";

 try{
    // pausing; this will waiting for the fetch to finish 
    const response = await fetch (url);
    //The reasponse will turn into product data 
    const products = await response.json();

    // calling the functions to display the products on the page 
    displayProducts(products)
 } catch (error) {
    //  this serves incase of an error; it should call the error handler 
    handleError(error);

 }
 }

// Task 4: Display products in the page (only show first 5)
    function displayProducts(products) {
    const container = document.getElementById("product-container"); // this finds  the product container from the html 
    container.innerHTML = "";
    // looping  through the first 5 products
    for (let i = 0; i < 5; i++) { 
      const item = products[i]; // pulling the 1st item 
      const product =item.fields;// should be pulling the  data from  .fields 
      const productDiv = document.createElement("div"); // create a div, which should  hold the product information 
      productDiv.classList.add("product-item"); // ** note to self: comeback to syle this  
      // created a  product name
      const name = document.createElement("h2");
      name.textContent = product.name;
  
      // create the  price of the product 
      const price = document.createElement("p");
      price.textContent = "$" + (product.price / 100).toFixed(2); // converts from it displaying  cents to dollars and  shows 2 decimal places
  
      // create product image; this will pull from the data that was in the API 
      const image = document.createElement("img");
      image.src = product.image[0].url; //grabs the image from the array 
      image.alt = product.name;
      image.width = 200;
  
      // add everything to the productDiv
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      productDiv.appendChild(image);
  
      // last step;  added  the productDiv to the container
      container.appendChild(productDiv);
    }
  }
  
  // task 5 : Reusable Error Handler 
   // this will log the error in case anything goes wrong in  fetch 
   function handleError(error) {
    console.log("Warning: An Error had occured:", error.message);

   }

// Task 6 : Calling My Fetch functions 
fetchProductsThen();// logs the name in the console 
fetchProductsAsync();// diplays products on the page 
// this  will  test both versions  to ensure they work 


