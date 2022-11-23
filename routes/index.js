var express = require('express');
var router = express.Router();

const user = "admin"
const pass = "pass"
var login = false


/* GET home page. */

router.post('/submit', function(req, res, next){
  console.log(req.body.user)
  if(req.body.user == user && req.body.pass == pass)
  {
    console.log("Login confirmed")
    login = true
    res.render('login-s')
  }
  else
  {
   console.log("Login failed")
   res.render('login-f')
   login = false
  }
console.log(req.body.email)

})

// sign out button
router.post('/signout', function(req, res, next){
  console.log("calling from backbutton")
  
    login = false
  
  
  
  res.render('login');

})





router.get('/login', function(req, res, next) {



 if(login==false)
  {
    res.render('login');
}
});




router.get('/', function(req, res, next) {


  let products = [
    {
      type:"Mobile",
      image:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/120309-phones-news-buyer-s-guide-best-smartphones-image66-camkvh2lyz.jpg",
      link:"http://localhost:3000/mob"
    },
    {
      type:"laptop",
      image:"https://www25.zippyshare.com/scaled/Odw7UIyZ/file.html",
      link:"http://localhost:3000/lap"
    },
    {
      type:"accessories",
      image:"https://www90.zippyshare.com/scaled/t7aEASfs/file.html",
      link:"http://localhost:3000/accessories"
    }

  ]

  if(login==true)
  {
    res.render('index', {products});
  }
  else
  {
    res.render('login');

  }
 
  
});

router.get('/mob', function(req, res, next) {

  let mobile = [
    {
      name: "Iphone",
      brand: "Apple",
      price: "956 $",
      image: "https://m.media-amazon.com/images/I/61IJBsHm97L._SL1500_.jpg"    
    },
    {
      name: "Galaxy",
      brand: "Samsung",
      price: "750 $",
      image: "https://m.media-amazon.com/images/I/91dnhRu+32L._SL1500_.jpg"
    },
    {
      name: "Redmi",
      brand: "Xiaomi",
      price: "580 $",
      image: "https://i01.appmifile.com/webfile/globalimg/in/cms/3EC458F8-DBC7-156A-635D-6B13FE1A78E0.jpg"
    },
    {
      name: "Narzo 20 pro",
      brand: "Realme",
      price: "550 $",
      image: "https://www.phonemera.com/image/cache/catalog/Narzo/Narzo%2020%20Pro%20/Black/narzo%2020%20Pro%20Black_3-1500x1500.JPG"
    }
  ]
  

  if(login==true)
  {
    res.render('index', {mobile});
  }
  else
  {
    res.render('login');

  }
});


router.get('/lap', function(req, res, next) {

  let lap = [
    {
      name: "Alienware",
      brand: "Dell",
      price: "1499 $",
      image: "https://m.media-amazon.com/images/I/61J++6x4ezL._SY450_.jpg"    
    },
    {
      name: "Predator",
      brand: "Acer",
      price: "999 $",
      image: "https://m.media-amazon.com/images/I/81RiVerHLdL._SY450_.jpg"    
    },
    {
      name: "TUF A15",
      brand: "Asus",
      price: "699 $",
      image: "https://m.media-amazon.com/images/I/714wwp3NVvL._SY450_.jpg"    
    },
    {
      name: "Leopard",
      brand: "MSI",
      price: "1199 $",
      image: "https://m.media-amazon.com/images/I/71uFzUMvbOL._SY450_.jpg"    
    }
   
  ]
 

  if(login==true)
  {
    res.render('index', {lap});
  }
  else
  {
    res.render('login');

  }

});



router.get('/accessories', function(req, res, next) {

  let accessories = [
    {
      name: "iWatch",
      brand: "Apple",
      price: "499 $",
      image: "https://m.media-amazon.com/images/I/51hhHE9UbTL._SY450_.jpg"    
    },
    {
      name: "Galaxy earBUds",
      brand: "Samsung",
      price: "299 $",
      image: "https://m.media-amazon.com/images/I/314gylSKWPL._AC_SS450_.jpg"
    },
    {
      name: "Charger",
      brand: "Apple",
      price: "180 $",
      image: "https://m.media-amazon.com/images/I/31mAPMJnKnL._AC_SS450_.jpg"
    },
    {
      name: "External Hard Disk",
      brand: "Sandisk",
      price: "220 $",
      image: "https://m.media-amazon.com/images/I/71cxm1e19BL._SY450_.jpg"
    },
    
  ]

  
  

  if(login==true)
  {
    res.render('index', {accessories});
  }
  else
  {
    res.render('login');

  }
});








module.exports = router;
