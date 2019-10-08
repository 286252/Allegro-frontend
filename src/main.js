const listingElement = document.querySelector('#listing');
const response = getProductList();

getProductList(
        .then(response => {
                response.products
                    .map(product => renderProduct(product))
                    .forEach((html => productListingElement.innerHTML += html;
                    })


                // response.products
                // 	.map(renderProduct)
                // 	.forEach((productHtml) => {
                // 		listingElement.innerHTML += productHtml;
                // 	});