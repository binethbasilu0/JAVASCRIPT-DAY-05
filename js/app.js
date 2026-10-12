

//----------------- Product List -----------------




fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
   console.log(data);

   let productContainer = document.getElementById("productContainer")

   let productBody = "";

   data.forEach(element => {
    productBody += `
     <div class="col">
                        <div class="card shadow-sm"> 
                         <img src="${element.image}" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group"> <button type="button"
                                            class="btn btn-sm  bg-success">Buy $${element.price}</button> </div> <small
                                        class="text-body-secondary">⭐${element.rating.rate}/${element.rating.count}</small>
                                </div>
                            </div>
                        </div>
                    </div>`
   });

   productContainer.innerHTML = productBody;
   
});




