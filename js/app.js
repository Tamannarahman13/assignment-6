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
        <p>
        ${category.category_name}
        </p>
        </div>


        `;
        categorysContainer.appendChild(categoryDiv)
    })
}


const loadCategoryDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.news_category[0])
}

categoryLoad()