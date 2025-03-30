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


