document.queryselectorAll()('a[href^="#"]').forEach(anchor=> {
                          anchor.addEventListener('click',fuction(e){
                           e.preventDefault();
                          document.querySElector(this.getAttribute
                          ('href')).scrollintoview({
                          behaviour :'smooth'
            }};
        }};
     }};
  window.addEventListene('scroll',() =>{
        const navbar = document.querySelector('.navbar');
        window.scrollY> 50 ?
        navbar.style.backgroundcolor='rgba(10,10,10,0.98)':
         navbar.style.backgroundcolor='rgba(10,10,10,0.95)';
 });