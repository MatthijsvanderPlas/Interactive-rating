document.querySelector('.submit-btn').addEventListener('click', (e)  => {
    e.preventDefault();
    let rating = document.querySelectorAll('.value');
    for (let el of rating) {
        if (el.checked) {
            const val = el.nextElementSibling.innerHTML;
            document.querySelector('.rating-label').innerHTML = val;

            document.querySelector('.card1').style.display = 'none';
            document.querySelector('.card2').style.display = 'flex';
        }
    };
})