"use strict";$(document).ready(function(){$(".slider-banners").slick({slidesToShow:5,slidesToScroll:1,dots:!1,centerMode:!0,arrows:!0,infinite:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".second-slider").slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,infinite:!0}),$("[data-group]").each(function(){var t=this,r=$(this).find("[data-target]"),s=$(this).find("[data-click]"),e="active";r.first().addClass(e),s.first().addClass(e),s.click(function(a){a.preventDefault();a=$(t).data("click"),a=$('[data-target="'+a+'"]');s.removeClass(e),r.removeClass(e),a.addClass(e),$(t).addClass(e)})}),$("[data-modal]").each(function(){var t=$(this).find("[data-target]"),a=$(this).find("[data-click]"),r=$(this).find("[data-close]"),s="active";a.click(function(a){a.preventDefault();a=$(this).data("click");$('[data-target="'+a+'"]').addClass(s),$(".andrea").attr("src",$(".andrea").attr("src")+"?autoplay=0"),$(".dina").attr("src",$(".dina").attr("src")+"?autoplay=0"),$(".jimmy").attr("src",$(".jimmy").attr("src")+"?autoplay=0"),$(".juliano").attr("src",$(".juliano").attr("src")+"?autoplay=0"),$(".mario").attr("src",$(".mario").attr("src")+"?autoplay=0"),$(".pedro").attr("src",$(".pedro").attr("src")+"?autoplay=0")}),r.click(function(a){a.preventDefault(),t.removeClass(s),$(".andrea").attr("src",$(".andrea").attr("src")+"?autoplay=0"),$(".dina").attr("src",$(".dina").attr("src")+"?autoplay=0"),$(".jimmy").attr("src",$(".jimmy").attr("src")+"?autoplay=0"),$(".juliano").attr("src",$(".juliano").attr("src")+"?autoplay=0"),$(".mario").attr("src",$(".mario").attr("src")+"?autoplay=0"),$(".pedro").attr("src",$(".pedro").attr("src")+"?autoplay=0")})}),$("[data-receptor]").each(function(){$(this).find("[data-show]");var a=$(this).find("[data-open]"),t="active";a.click(function(a){a.preventDefault();a=$(this).data("open");$('[data-show="'+a+'"]').toggleClass(t),$(this).toggleClass(t)})});var t=document.querySelector(".open__menu"),r=(document.querySelector(".hamburguer-line"),document.querySelector(".nav__bar"));t.addEventListener("click",function(a){a.preventDefault(),t.classList.toggle("active"),r.classList.toggle("active")})});