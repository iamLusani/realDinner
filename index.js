
function addCart(event){
    const button = event.currentTarget;
    
    if(button.innerHTML.includes('bi-bag-plus')){
        button.innerHTML = '<i class="bi bi-check-circle"></i>';
        alert("Added to cart");
    }else{
        button.innerHTML = '<i class="bi bi-bag-plus"></i>';
        alert("Item Removed");
    }
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', addCart);
});

document.querySelector('#viewMenuBtn').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#orderNowBtn').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

