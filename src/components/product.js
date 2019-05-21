function formatPrice(price) {
    if (price.currency == "PLN") {
        return price.amount.replace(".", ",") + " zl";
    } else if (price.currency == "USD") {
        return "$ " + price.amount.replace(".", ",");
    } else if (price.currency == "EUR") {
        return "€ " + price.amount.replace(".", ",");
    } else {
        return "Wrong format."
    }
    //12 zl
    //$12
    //eur 12
}

function renderProduct(product) {
    return `
	<div class ="product">
        <img class ="product__image" src="${product.image.url}"></img>
        <div class ="product_info">
			<h2 class="title__name">
				${product.name}
			</h2>
			<div>${formatPrice(product.price)}</div>
			<div>${product.description.text}</div>
	    </div>
    </div>
	`;
}
console.log("kot")