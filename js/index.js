const apiBase = "https://falchhanssen.net/student/ProjectExam1/blog";
const wooBase = "/wp-json/wp/v2/";
const postsBase = "/posts";
const pagesBase = "/wp-json/wp/v2/posts";

const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + wooBase + postsBase;
const fullProductURLExample = "https://falchhanssen.net/student/ProjectExam1/blog/wp-json/wp/v2/posts";


async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
    return products;
}

function createProductHTML(product) {
    const container = document.querySelector(".readmore-text");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    container.append(productContainer);

}

function createProductsHTML(products) {
    for (let i = 0; i < 1; i++) {
        const product = products[6];
        createProductHTML(product);
    }
}

async function productPage() {
    const products = await getProducts();
    createProductsHTML(products);
}

productPage();