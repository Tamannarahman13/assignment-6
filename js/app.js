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
    displayCategoryDetails(data.data)
    console.log(data.data)

}

const displayCategoryDetails = (categorysDetails) => {
    const catagoryDetails = document.getElementById('category-details-container');
    catagoryDetails.innerText = ''
    categorysDetails.forEach(categoryDetails => {
        const categoryDetailDiv = document.createElement('div');
        categoryDetailDiv.classList.add('card')
        categoryDetailDiv.innerHTML = `
        
  <img src=${categoryDetails.image_url} class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${categoryDetails.title}</h5>
    <p class="card-text">${categoryDetails.details.slice(0, 100)}</p>
    <div class = "d-flex">
    <div class = "d-flex">
    <img src=${categoryDetails.author.img} class="h-25 w-25 rounded-circle"  alt="...">
    
    <p class = mt->${categoryDetails.author.name}</p>
    </div>
    <p class = "me-5">${categoryDetails.rating.number}</p>
    <div>
    <button>more</button>
    </div>
    </div>
    
</div>
        
        
        `;

        catagoryDetails.appendChild(categoryDetailDiv)
    })

    // console.log(category)
}

categoryLoad()