const product=[
    {
        id:1,img:"e-commerce images/mens img1.png",name:"Nike Air max",price:"200.31",brand1:"Nike Air max",brand:"nike",discount:"220.51",category:"men"
    },
        {
        id:2,img:"e-commerce images/mens img2.png",name:"Nike Court vision low",price:"70.64",brand1:"Nike Court vision low",brand:"nike",discount:"73.02",category:"men"
    },
        {
        id:3,img:"e-commerce images/mens img3.png",name:"Nike Jordan 2",price:"278.01",brand1:"Nike Jordan 2",brand:"nike",discount:"288.31",category:"men"
    },
     
        {
        id:4,img:"e-commerce images/corcs 1.jfif",name:"Womens Crocs Clogs – Lightweight",price:"77.83",brand1:"Womens Crocs Clogs",brand:"crocs",discount:"80.07",category:"women"
    },
    
    {
        id:5,img:"e-commerce images/crocs 2.jfif",name:"Crocs 206069 Men's LiteRide Modform Slip-On",price:"50.07",brand1:"Crocs 206069 Men's LiteRide",brand:"crocs",discount:"54.51",category:"men"
    },
        {
        id:6,img:"e-commerce images/crocs 3.jfif",name:"Bone Casual Clogs",price:"89.02",brand1:"Bone Casual Clogs",brand:"crocs",discount:"92.08",category:"men"
    },
        {
        id:7,img:"e-commerce images/puma shoe1.avif",name:"Puma for men sneakers tennis shoes",price:"178.03",brand1:"Puma for men",brand:"puma",discount:"181.00",category:"men"
    },
            {
        id:8,img:"e-commerce images/puma shoe2.jfif",name:"Puma x-ray 2 sqaure pack sneakers ",price:"40.05",brand1:"Puma x-ray 2",brand:"puma",discount:"49.93",category:"men"
    },
            {
        id:9,img:"e-commerce images/pums shoe3.jfif",name:"Puma X-Cell Uprise Mens Running Shoes Australia",price:"57.02",brand1:"Puma X-Cell Uprise",brand:"puma",discount:"61.99",category:"men"
    },
            {
        id:10,img:"e-commerce images/sketch shoe1.jfif",name:"MAX CUSHIONING GLIDE-STEP - A",price:"92.32",brand1:"MAX CUSHIONING GLIDE-STEP - A",brand:"sketchers",discount:"98.20",category:"men"
    },
    {
        id:11,img:"e-commerce images/sketch shoe2.jfif",name:"Skechers Men's GO WALK FIRST CLASS Charcoal Walking Shoes",price:"62..31",brand1:"Skechers Men's GO WALK",brand:"sketchers",discount:"67.51",category:"men"
    },
    {
        id:12,img:"e-commerce images/sketch shoe3.jfif",name:"Skechers Women's Arch Fit Marlie-Weekend Chat Ankle Boot",price:"144.65",brand1:"sketchers Boot",brand:"sketchers",discount:"149.99",category:"men"
    },
    {
                id:13,img:"e-commerce images/ladies/heel1.webp",name:"Van Heusen Women's Pumps Heels",price:"28.90",brand1:"Van Heusen heels",brand:"Van Heusen",discount:"32.10",category:"women"

    },
        {
                id:14,img:"e-commerce images/ladies/heel2.webp",name:"Embellished Cone Heeled Sandals",price:"32.01",brand1:"Van Heusen cone heels",brand:"Van Heusen",discount:"39.71",category:"women"

    },
      {
                id:15,img:"e-commerce images/ladies/ladiesimg4.jpg",name:"The stiletto heel ",price:"39.39",brand1:"The stiletto heel heels ",brand:"The heels",discount:"43.83",category:"women"

    },
    {
                id:16,img:"e-commerce images/ladies/chappal1.webp",name:"Punjabi Jutti for Women - Handcraft Amazing Leather Juttis",price:"29.39",brand1:"Phb Punjabi Jutti",brand:"phb",discount:"31.89",category:"women"

    },
{
                id:17,img:"e-commerce images/ladies/chappal2.webp",name:"Phb LADIES CHAPPAL - COMFORTINA 77",price:"29.39",brand1:"Phb COMFORTINA ",brand:"phb",discount:"33.33",category:"women"

    },{
                id:18,img:"e-commerce images/ladies/chappal3.webp",name:"Extra Super Soft Ortho Chappal with Memory Foam",price:"29.39",brand1:" Footwear with Memory Foam",brand:"ortho",discount:"33.01",category:"women"

    },
]



const searchEl=document.getElementById("search");
const nikeEl=document.getElementById("nikebrand");
const sketchEl=document.getElementById("sketchbrand");
const pumaEl=document.getElementById("pumabrand");
const crocEl=document.getElementById("crocsbrand");
const vanheusanEl=document.getElementById("vanheusan");
const theheelsEl=document.getElementById("theheels");
const orthoEl=document.getElementById("ortho");
const phbEl=document.getElementById("pbh");

const price1El=document.getElementById("price1");
const price2El=document.getElementById("price2");
const price3El=document.getElementById("price3");
const price4El=document.getElementById("price4");

const women=document.getElementById("women");
const men=document.getElementById("men");


const containerEl=document.getElementById("product-container");


function showProduct(items){
    containerEl.innerHTML="";
    items.forEach(item=>{
        containerEl.innerHTML+=
        `
                   <div class="card">
<img class="shoe-image" src="${item.img}" alt="${item.name}">
<p class="shoe-name">${item.name}</p>
<p class="shoe-price">$ ${item.price}  <span>$ ${item.discount}</span> </p>
<a href="Cart.html"><button id="cart-btn">Add to Cart</button></a>
</div>        
`;
    });
    

}

showProduct(product);


searchEl.addEventListener('input',(e)=>{
        const searchtext=e.target.value.toLowerCase();

    const filtered=product.filter(p=>p.brand1.toLowerCase().includes(searchtext));
    showProduct(filtered);
})


nikeEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="nike");
   showProduct(filtered);
});


sketchEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="sketchers");
   showProduct(filtered);
});

pumaEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="puma");
   showProduct(filtered);
});

crocEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="crocs");
   showProduct(filtered);
});


vanheusanEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="van heusen");
   showProduct(filtered);
});
orthoEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="ortho");
   showProduct(filtered);
});
phbEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="phb");
   showProduct(filtered);
});
theheelsEl.addEventListener("click",()=>{
   const filtered=product.filter(p=>p.brand.toLowerCase()==="the heels");
   showProduct(filtered);
});
women.addEventListener('click',()=>{
    const filtered=product.filter(p=>p.category==="women");
    showProduct(filtered);
});
men.addEventListener('click',()=>{
    const filtered=product.filter(p=>p.category==="men");
    showProduct(filtered);
});



price1El.addEventListener('click', () => {
    const filtered = product.filter(p => {
        const priceNum = parseFloat(p.price.replace('$', ''));
        return priceNum >= 0 && priceNum <= 99;
    });
    showProduct(filtered);
});
price2El.addEventListener('click', () => {
    const filtered = product.filter(p => {
        const priceNum = parseFloat(p.price.replace('$', ''));
        return priceNum >= 100 && priceNum <= 149;
    });
    showProduct(filtered);
});

price3El.addEventListener('click', () => {
    const filtered = product.filter(p => {
        const priceNum = parseFloat(p.price.replace('$', ''));
        return priceNum >= 150 && priceNum <= 199;
    });
    showProduct(filtered);
});

price4El.addEventListener('click', () => {
    const filtered = product.filter(p => {
        const priceNum = parseFloat(p.price.replace('$', ''));
        return priceNum >= 200;
    });
    showProduct(filtered);
});


