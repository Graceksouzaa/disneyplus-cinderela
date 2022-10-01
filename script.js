const controls = document.querySelectorAll('.control')

let itemAtual = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener('click', () => {
        const paraEsquerda = 
        control.classList.contains("botao-esquerda");

        if(paraEsquerda){
            itemAtual -= 6;
        } else{
            itemAtual += 6;
        }

        items.forEach((item) =>
        item.classList.remove("item-atual"))

        items[itemAtual].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    })
})