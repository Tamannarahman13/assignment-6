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
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetails(data.data)
    // console.log(data.data[0])

}

const displayCategoryDetails = (categorysDetails) => {

    const catagoryDetails = document.getElementById('category-details-container');
    catagoryDetails.innerText = ''
    categorysDetails.forEach(categoryDetails => {

        const categoryDetailDiv = document.createElement('div');
        categoryDetailDiv.classList.add('card')

        categoryDetailDiv.innerHTML = `
        
  <img src=${categoryDetails.thumbnail_url} class="card-img-top h-50 w-full" alt="...">
  <div class="card-body">
  <h5 class="card-title">${categoryDetails.title}</h5>
    <p class="card-text">${categoryDetails.details.slice(0, 100) + '...'}</p>
    <div class = "d-flex">
    <div class = "d-flex">
    <img src=${categoryDetails.author.img} class="h-50 w-25 rounded-circle"  alt="...">
    
    <p class = mt->${categoryDetails.author.name ? categoryDetails.author.name : 'not found'}</p>
    </div>
    <p class = "me-5">${categoryDetails.rating.number}</p>
    <div>
    <button  onclick = "loadNewsDetails('${categoryDetails._id}')" class = "border-0" data-bs-toggle="modal" data-bs-target="#newsDetailModal">more..</button>
    </div>
    </div>
    
</div>
        
        
        `;

        catagoryDetails.appendChild(categoryDetailDiv)
    })

    // stop loader
    toggleSpinner(false)

    // console.log(category)
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}


const loadNewsDetails = async (_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetails(data.data)
    displayNewsDetail(data.data[0])

}





const displayNewsDetail = (news) => {
    console.log(news)


    const newsDetail = document.getElementById('news-detail');
    newsDetail.innerHTML = `
    <img  src = "${news.image_url}" class = "w-100 h-100" alt = "...">
    <div>
    <img  src = "${news.author.img}" class = "w-25 h-25 rounded-circle " alt = "...">
    <p class= "d-inline-flex">${news.author.name ? news.author.name : 'not found'}</p>
    <p>${news.author.published_date}</p>
    <div>
    <p class = "mt-5 fs-2">${news.title}</p>
    <p class = "mt-2">${news.details.slice(0, 600)}</p>

    
    `

}

categoryLoad()