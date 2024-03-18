changeColor = () => {
    let colors = document.getElementsByName("opcao-cor");
    let color;

    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            let imgColor = colors[i].nextElementSibling.querySelector('img');
            color = imgColor.src.match(/\/([^/]+)\.jpeg$/)[1];
            break;
        }
    }

    let product_title = document.getElementById("titulo-produto");
    let color_title = document.getElementById("nome-cor-selecionada");

    product_title.innerHTML = "Pulseira loop esportiva " + color + " para caixa de 45 mm";
    color_title.innerHTML = "Cor - " + color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();

    let bigImg = document.getElementById("imagem-visualizacao");
    bigImg.src = "./imagens/opcoes-cores/imagens-" + color + bigImg.src.substring(bigImg.src.lastIndexOf('/'));

    let smallImgs = document.getElementsByName("opcao-imagem");

    for (let i = 0; i < smallImgs.length; i++) {
        let img = smallImgs[i].nextElementSibling.querySelector('img');
        img.src = "./imagens/opcoes-cores/imagens-" + color + img.src.substring(img.src.lastIndexOf('/'));
    }
}

changeImg = () => {
    let imgs = document.getElementsByName("opcao-imagem");
    let num;

    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].checked) {
            num = imgs[i].id.match(/\d+/)[0];
            break;
        }
    }

    let bigImg = document.getElementById("imagem-visualizacao");

    bigImg.src = "." + bigImg.src.match(/\/imagens.*?imagem-/)[0] + num + ".jpeg"
    console.log(bigImg.src);
}

changeSize = () => {

    let sizes = document.getElementsByName("opcao-tamanho");
    let bigImg = document.getElementById("imagem-visualizacao");
    let product_title = document.getElementById("titulo-produto");
    let size;

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            size = sizes[i];
            break;
        }
    }

    if (size.id.startsWith("0")) {
        bigImg.style.scale = 0.85;
        product_title.innerHTML = product_title.innerHTML.match(/^(.*?)(?=\d{2} mm)/)[1] + " 41 mm";
    }

    if (size.id.startsWith("1")) {
        bigImg.style.scale = 1;
        product_title.innerHTML = product_title.innerHTML.match(/^(.*?)(?=\d{2} mm)/)[1] + " 45 mm";
    }
}