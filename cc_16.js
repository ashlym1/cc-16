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
    products.forEach(function(product ){
        console.log ("Product name:", product.name);
    });
    })

 // 2nd - converting the response into 
    .catch (function(error) {  // logs any  error messsags& will display in case somethings is wrong 
    console.log("Fetch eror",error );
    });
}

// Task 3: Fetch Products with async/await 
// this is the same as before but now it's usifn async
async function fetchProductAsync() {
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
    // this finds  the product container from the html 
    const container = document.getElementById("product-container");
  
    // Clearing  anything already inside: in case this gets called again
    container.innerHTML = "";
  
    // looping  through the first 5 products
    for (let i = 0; i < 5; i++) {
      const product = products[i];
  
      // create a div, which should  hold the product information
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-item"); // ** note to self: comeback to syle this  
  
      // created a  product name
      const name = document.createElement("h2");
      name.textContent = product.name;
  
      // create the  price of the product 
      const price = document.createElement("p");
      price.textContent = "$" + product.price;
  
      // create product image; this will pull from the data that was in the API 
      const image = document.createElement("img");
      image.src = product.image;
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
   // this will log the error in case anything goes wrong  while fetching 
   function hangleError(error) {
    console.log("Warning: An Error had occured:", error.message);
    
   }

