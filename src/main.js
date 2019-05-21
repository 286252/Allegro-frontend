const listingElement = document.querySelector('#listing');
const response = getProductList();

response.products
	.map(renderProduct)
	.forEach((productHtml) => {
		listingElement.innerHTML += productHtml;
	});

