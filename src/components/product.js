function renderProduct(product){
	return `
	<div class="product">
			<h1>${product.name}</h2>
			<div>${product.price.amoun}}</div>
			<div>${product.description.currency}</div>
	</div>
	`;
}
