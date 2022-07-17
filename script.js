const first = document.getElementById('first');
const second = document.getElementById('second');
const features = document.querySelector('.features');
const company = document.querySelector('.company');


first.addEventListener('mouseenter', function(){ 
    features.classList.add('active');
});
second.addEventListener('mouseenter', function(){ 
    company.classList.add('active');
});

features.addEventListener('mouseleave', function(){
    features.classList.remove('active');
});
company.addEventListener('mouseleave', function(){
    company.classList.remove('active');
})
