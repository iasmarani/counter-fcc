let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.classList.contains('increase')){
             count++;
             }
        if(btn.classList.contains('decrease')){
        count--;
             }
        if(btn.classList.contains('reset')){
           count =0;
             } 
             if(count > 1) value.style.color = 'green'
             if(count < 0) value.style.color = 'red ';
             if(count === 0) value.style.color = 'black ';
             value.textContent = count;
    })
    
})