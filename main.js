function validateINN() {
    const inn = document.querySelector('input[name="inn"]').value;
    const innRegExp = /^\d{10}$|^\d{12}$/;

    if (innRegExp.test(inn)) {
        console.log('ИНН введен верно!');
    } else {
        console.log('Неверный формат ИНН!');
    }
}


const blockInner = document.querySelector('.block_inner')
let position = 0
let move = () =>{
    if(position < 450){
        position++
        blockInner.style.left = `${position}px`
        setTimeout(move, 1)
    }}

move()