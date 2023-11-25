// O JavaScript pode ser usado para adicionar ou remover classes conforme necessário
// Por exemplo, você pode adicionar uma classe "scrolled" quando o usuário rolar para baixo

window.addEventListener('scroll', function() {
    var header = document.querySelector('.fixed-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});