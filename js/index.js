document.addEventListener("click", function (e){
// console.log(e.target)
if(e.target.classList.contains("facilities-item")){
    const src = e.target.getAttribute("src");
    // console.log(src);
    document.querySelector(".modal-img").src = src ;
    const  myModal = new bootstrap.Modal(document.getElementById('facilities-modal'))
    myModal.show();
}
})

// number count
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML=`${'0'}`
   

    const updateCounter =() =>{

const target = +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target/180;

if(c < target){
    counter.innerHTML = `${Math.ceil(c + increment )}`;
   setTimeout(updateCounter,1);
}

else{
    counter.innerHTML = target;
} 
}
    updateCounter()
})



// scroll effect
const boxes = document.querySelectorAll('.section');

window.addEventListener('scroll',() => {

    const innerHightOfWindow = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < innerHightOfWindow){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
});
// 

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()





  