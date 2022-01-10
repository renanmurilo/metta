$(document).ready(() => {
    $('.slider-banners').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.second-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // centerMode: true,
        arrows: true,
        infinite: true,
    });

    $('[data-group]').each(function () {
        var $allTarget = $(this).find('[data-target]'),
            $allClick = $(this).find('[data-click]'),
            activeClass = 'active';

        $allTarget.first().addClass(activeClass);
        $allClick.first().addClass(activeClass)

        $allClick.click((e) => {
            e.preventDefault();

            var id = $(this).data('click'),
                $target = $('[data-target="' + id + '"]');

            $allClick.removeClass(activeClass);
            $allTarget.removeClass(activeClass);

            $target.addClass(activeClass);
            $(this).addClass(activeClass)
        });
    });

    $('[data-modal]').each(function () {
        var $allTarget = $(this).find('[data-target]'),
            $allClick = $(this).find('[data-click]'),
            $allClose = $(this).find('[data-close]'),
            activeClass = 'active';

        $allClick.click(function (e) {
            e.preventDefault();

            var id = $(this).data('click'),
                $target = $('[data-target="' + id + '"]');

            $target.addClass(activeClass);
            $(".andrea").attr('src', $(".andrea").attr('src') + '?autoplay=0');
            $(".dina").attr('src', $(".dina").attr('src') + '?autoplay=0');
            $(".jimmy").attr('src', $(".jimmy").attr('src') + '?autoplay=0');
            $(".juliano").attr('src', $(".juliano").attr('src') + '?autoplay=0');
            $(".mario").attr('src', $(".mario").attr('src') + '?autoplay=0');
            $(".pedro").attr('src', $(".pedro").attr('src') + '?autoplay=0');
        });

        $allClose.click(function (e) {
            e.preventDefault();

            $allTarget.removeClass(activeClass);
            $(".andrea").attr('src', $(".andrea").attr('src') + '?autoplay=0');
            $(".dina").attr('src', $(".dina").attr('src') + '?autoplay=0');
            $(".jimmy").attr('src', $(".jimmy").attr('src') + '?autoplay=0');
            $(".juliano").attr('src', $(".juliano").attr('src') + '?autoplay=0');
            $(".mario").attr('src', $(".mario").attr('src') + '?autoplay=0');
            $(".pedro").attr('src', $(".pedro").attr('src') + '?autoplay=0');
        });
    });

    $('[data-receptor]').each(function () {
        var $allTarget = $(this).find('[data-show]'),
            $allClick = $(this).find('[data-open]'),
            activeClass = 'active';

        $allClick.click(function (e) {
            e.preventDefault();

            var id = $(this).data('open'),
                $target = $('[data-show="' + id + '"]');

            $target.toggleClass(activeClass);
            $(this).toggleClass(activeClass)
        });
    });

    let openMenu = document.querySelector('.open__menu');
    let ico = document.querySelector('.hamburguer-line');
    let menu = document.querySelector('.nav__bar')

    openMenu.addEventListener('click', (e) => {
        e.preventDefault();

        openMenu.classList.toggle('active')
        menu.classList.toggle('active')
    });
})