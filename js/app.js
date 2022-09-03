const categoryLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategorys(data.data.news_category);
}

const displayCategorys = categorys => {
    const categorysContainer = document.getElementById('catagorys-container');
    categorys.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <div  class="col ms-5">
        <a onclick = "loadCategoryDetails('${category.category_id}')">
        ${category.category_name}
        </a>
       
       
        </div>


        `;
        categorysContainer.appendChild(categoryDiv)
    })
}


const loadCategoryDetails = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetails(data.data[0])

}

const displayCategoryDetails = (category) => {
    console.log(category)
}

categoryLoad()