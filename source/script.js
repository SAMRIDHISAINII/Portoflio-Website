function openNavbar() {
    $('.navbar').css({
        transform: 'scale(1)',
        bottom: '8%',
    });
}
function closeNavbar() {
    $('.navbar').css({
        transform: 'scale(0)',
        bottom: '0%',
    });
}
function changeHeaderColor(param) {
    if (param == 10) {
        $('.header').css({
            'background-color': 'rgba(0,0,0,0.2)',
            color: 'white',
        });
        $('.scrollTracker').css('background-color', 'rgba(255,255,255,0.8)');
        $('.headerBtn').css({
            border: '2px solid white',
            color: 'white',
        });
        $('.headerBtn').hover(
            function () {
                $('.headerBtn').css({
                    'background-image': 'none',
                    'background-color': 'white',
                    color: 'rgba(25, 31, 36, 1)',
                });
            },
            function () {
                $('.headerBtn').css({
                    'background-color': 'transparent',
                    color: 'white',
                });
            }
        );
    } else if (param) {
        $('.header').css({
            'background-color': 'rgba(255,255,255,0.8)',
            color: 'black',
        });
        $('.scrollTracker').css('background-color', 'rgba(25,31,36,1)');
        $('.headerBtn').css({
            border: '2px solid rgba(25,31,36,1)',
            color: 'rgba(25,31,36,1)',
        });
        $('.headerBtn').hover(
            function () {
                $('.headerBtn').css({
                    'background-image':
                        'linear-gradient(to right, rgba(25,31,36,1), rgba(65,71,76,0.9))',
                    color: 'white',
                });
            },
            function () {
                $('.headerBtn').css({
                    'background-image': 'none',
                    'background-color': 'transparent',
                    color: 'rgba(25, 31, 36, 1)',
                });
            }
        );
    } else {
        $('.header').css({
            'background-color': 'rgba(0,0,0,0.6)',
            color: 'white',
        });
        $('.scrollTracker').css('background-color', 'rgba(255,255,255,0.8)');
        $('.headerBtn').css({
            border: '2px solid white',
            color: 'white',
        });
        $('.headerBtn').hover(
            function () {
                $('.headerBtn').css({
                    'background-image': 'none',
                    'background-color': 'white',
                    color: 'rgba(25, 31, 36, 1)',
                });
            },
            function () {
                $('.headerBtn').css({
                    'background-color': 'transparent',
                    color: 'white',
                });
            }
        );
    }
}
function closeLoader() {
    $('.bodyOverlay').css({
        opacity: '0',
    });
    // to prevent automatic scrolling when clicking on work tile.
    const scrollY = $('body').css('top');
    $('body').css({
        position: 'absolute',
        top: '',
    });
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    $('.workLoaderDetailContainer').scrollTop(0);
    $('.workLoaderContainer').css({
        opacity: '0',
        transform: 'translateY(20px)',
    });
    setTimeout(function () {
        $('.bodyOverlay').css({
            display: 'none',
        });
    }, 200);
    $('.workLoaderImg').find('img').attr('src', '');
}
function checkScrollDirection(stOrig, stNew) {
    if (stNew > stOrig) {
        return 1;
    } else {
        return 0;
    }
}
function navTrack(pos, btn, left = 0, right = 0) {
    $('.navTracker').css({
        left: pos,
    });
    if (left == 1) {
        $('.navTracker').css({
            'border-radius': '10px 0px 0px 10px',
        });
    } else if (right == 1) {
        $('.navTracker').css({
            'border-radius': '0px 10px 10px 0px',
        });
    } else {
        $('.navTracker').css({
            'border-radius': '0px',
        });
    }
    $('.navbarElement').removeClass('navSelected');
    $(btn).addClass('navSelected');
}
function navToPage(page, home = 0, extra = 0) {
    if (home == 1) {
        $('html,body').animate(
            {
                scrollTop: 0,
            },
            500,
            'swing'
        );
    } else if (extra == 1) {
        $('html,body').animate(
            {
                scrollTop: $(page).offset().top + 180,
            },
            500,
            'swing'
        );
    } else {
        if (page == '.aboutPage') {
            $('html,body').animate(
                {
                    scrollTop: $(page).offset().top - 50,
                },
                500,
                'swing'
            );
        } else {
            $('html,body').animate(
                {
                    scrollTop: $(page).offset().top,
                },
                500,
                'swing'
            );
        }
    }
}
function offsetPage(page) {
    return $(page).offset().top;
}

function appear(element) {
    $(element).css({
        opacity: '1',
        transform: 'translateY(0)',
    });
}

$(window).on('load', function () {
    $('.loadingPage').css({
        opacity: '0',
        transform: 'translateY(-60px)',
    });
    setTimeout(function () {
        $('.loadingPage').css('display', 'none');
        appear('.meImg');
    }, 310);

    var titleString = "Hi, I'm Samridhi Saini";
    var displayTitleString = [];

    var subTitleString = 'Designer | Developer';
    var displaySubTitleString = [];

    var i = 0,
        ilen = titleString.length;
    function nameAnimate() {
        displayTitleString.push(titleString[i]);
        $('.detName').html(displayTitleString);
        i++;
        if (i < ilen) {
            setTimeout(nameAnimate, 100);
        }
    }
    nameAnimate();
    setTimeout(function () {
        var j = 0,
            jlen = subTitleString.length;
        function subAnim() {
            displaySubTitleString.push(subTitleString[j]);
            $('.detCaption').html(displaySubTitleString);
            j++;
            if (j < jlen) {
                setTimeout(subAnim, 50);
            }
        }
        subAnim();
        setTimeout(function () {
            appear('.learnBtn');
        }, 50 * jlen);
    }, 110 * ilen);
});

$(document).ready(function () {
    if ($(window).width() >= 850) {
        $('.tileContainer').css('width', '750px');
    } else if ($(window).width() < 850 && $(window).width() >= 600) {
        $('.tileContainer').css('width', '500px');
    } else if ($(window).width() < 600) {
        $('.tileContainer').css('width', '250px');
    }

    // $('html, body').scrollTop(100);

    // $('.page').css({
    //     'top': $(window).height(),
    // });

    var scrollTopOrig = 0;
    let documentHeight =
        $('.contactPage').offset().top - $('.landingPage').height() + 100; // + 270 for end scroll
    $(document).scroll(function () {
        var scrollTopNew = $(document).scrollTop();
        var percentageScroll =
            ((scrollTopNew - $('.landingPage').height() + 55) /
                documentHeight) *
            100;
        if (scrollTopNew >= $('.aboutPage').offset().top / 2 - 100) {
            openNavbar();
            $('.header').css('opacity', '1');
        } else {
            closeNavbar();
            $('.header').css('opacity', '0');
        }

        $('.scrollTracker').css('width', percentageScroll + '%');
        scrollTopOrig = scrollTopNew;

        if (scrollTopNew <= offsetPage('.aboutPage') / 2 + 200) {
            navTrack('0', '.navbarHome', 1);
        } else if (scrollTopNew <= offsetPage('.educationPage') - 200) {
            navTrack('20%', '.navbarAbout');
        } else if (scrollTopNew <= offsetPage('.workPage') - 150) {
            navTrack('40%', '.navbarEdu');
        } else if (scrollTopNew <= offsetPage('.contactPage') - 150) {
            navTrack('60%', '.navbarWork');
        } else {
            navTrack('80%', '.navbarContact', 0, 1);
        }

        if (scrollTopNew <= offsetPage('.aboutPage') - 60) {
            $('.landingPage').css({
                // 'opacity': (1 - (scrollTopNew / (offsetPage('.aboutPage') * 1))),
                // parallax effect for the landing page - still buggy
                // 'transform': 'translateY(-'  + (scrollTopNew / 4) + 'px)',
            });
            changeHeaderColor(10);
        } else if (scrollTopNew <= offsetPage('.educationPage') - 60) {
            changeHeaderColor(0);
        } else if (scrollTopNew <= offsetPage('.workPage') - 60) {
            changeHeaderColor(1);
        } else if (scrollTopNew <= offsetPage('.contactPage') - 60) {
            changeHeaderColor(1);
        } else {
            changeHeaderColor(1);
        }
        if (scrollTopNew <= offsetPage('.educationPage') - 200) {
            $('.aboutPage').css({
                'background-position':
                    '0% ' +
                    (15 +
                        ((1.2 * scrollTopNew) / offsetPage('.educationPage')) *
                            100) +
                    '%',
            });
        }

        // parallax effect for the work page - still buggy
        // if (scrollTopNew <= (offsetPage('.contactPage') - 60)) {
        //   $('.workPage').css({
        //     'background-position': '50% ' + (50 + (( 1.4 * (scrollTopNew - offsetPage('.workPage')) / offsetPage('.contactPage')) * 100)) + '%'
        //   })
        // }
    });

    $('.tile').click(function () {
        $('.workLoaderDetailContainer').scrollTop(0);
        // to prevent automatic scrolling when clicking on work tile
        $('body').css({
            position: 'fixed',
            top: '-' + $(window).scrollTop() + 'px',
        });
      
        let title = $(this).find('.workTitle').html();
        let startMonth = $(this).find('.workDurationStartMonth').html();
        let startYear = $(this).find('.workDurationStartYear').html();
        let endMonth = $(this).find('.workDurationEndMonth').html();
        let endYear = $(this).find('.workDurationEndYear').html();
        let description = $(this).find('.workDescription').html();
        let imgNum = $(this).find('.workImagesContainer').find('img').length;
        let imgArr = [];
        var i;
        for (i = 0; i < imgNum; i++) {
            imgArr.push(
                $(this)
                    .find('.workImagesContainer')
                    .find('img:eq(' + i + ')')
                    .attr('src')
            );
        }
      
      
        var imgTracker = 0;
        $('.bodyOverlay').css({
            display: 'flex',
        });
        setTimeout(function () {
            $('.bodyOverlay').css({
                opacity: '1',
            });
            $('.workLoaderContainer').css({
                opacity: '1',
                transform: 'translateY(0)',
            });
        }, 1);
        $('.workLoader').css(
            'height',
            ($('.workLoaderContainer').height() * 100) / 100 + 'px'
        );
      
      
        $('.workLoaderTitle').html(title);
        $('.workLoaderStartMonth').html(startMonth);
        $('.workLoaderStartYear').html(startYear);
        $('.workLoaderEndMonth').html(endMonth);
        $('.workLoaderEndYear').html(endYear);
        $('.workLoaderDescription').html(description);
        $('.workLoaderImg').find('img').attr('src', imgArr[imgTracker]);
        $('.arrowLeft').click(function () {
            imgTracker = (((imgTracker - 1) % imgNum) + imgNum) % imgNum;
            $('.workLoaderImg').find('img').attr('src', imgArr[imgTracker]);
        });
        $('.arrowRight').click(function () {
            imgTracker = (imgTracker + 1) % imgNum;
            $('.workLoaderImg').find('img').attr('src', imgArr[imgTracker]);
        });
    });
  
    $('.workLoaderCloser').click(function () {
        closeLoader();
    });
    $('.workLoaderImg img').click(function () {
        var url = $(this).attr('src');
        window.open(url, '_blank');
    });

    $('.navbarHome').click(function () {
        navToPage('.landingPage', 1);
    });
    $('.navbarAbout, .learnBtn').click(function () {
        navToPage('.aboutPage');
    });
    $('.navbarWork').click(function () {
        navToPage('.workPage');
    });
    $('.navbarEdu').click(function () {
        navToPage('.educationPage');
    });
    $('.navbarContact').click(function () {
        navToPage('.contactPage');
    });
    $('.contactLandBtn').click(function () {
        navToPage('.contactPage', 0, 1);
    });

  
    $(window).resize(function () {
        if ($(window).width() >= 850) {
            $('.tileContainer').css('width', '750px');
        } else if ($(window).width() < 850 && $(window).width() >= 600) {
            $('.tileContainer').css('width', '500px');
        } else if ($(window).width() < 600) {
            $('.tileContainer').css('width', '250px');
        }
    });
});
