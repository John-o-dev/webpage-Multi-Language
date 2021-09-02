//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-menu").children().eq(0).text("Soluções");
        $(".nav-menu").children().eq(1).text("Comunidade");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entrar");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visão Geral");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ajuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Solutions");
        $(".nav-menu").children().eq(1).text("community");
        $(".nav-menu").children().eq(2).text("Buy");
        $(".nav-menu").children().eq(3).text("Log in");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-menu").children().eq(0).text("Soluciones");
        $(".nav-menu").children().eq(1).text("Comunidad");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entra");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Una página web sencilla con la opción de Multi-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
    });
});