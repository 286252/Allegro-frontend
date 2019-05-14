const response = getProductList();

const productsHtml = response.product.map((product) =>{
	return rednerProduct(product);
});

console.log(productsHtml)