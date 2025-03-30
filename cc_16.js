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