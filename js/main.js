'use strict';
 {
    //ふわっと画像を表示させるための監視
    const targets = document.querySelectorAll('.top-menu-item');

    function callback(entries, obs) {
        entries.forEach( entry => {
            console.log(entry);

            if(!entry.isIntersecting){
                return;
            }

            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    const options = {
        threshold: 0,
        rootMargin: '0px 0px -200px',
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach(target => {
        observer.observe(target);
    });

    //テキストをバウンスさせるための監視
    const targetText = document.querySelector('.top-concept-text');

    function textCallback(entries, obs) {
        console.log(entries[0]);

        if(!entries[0].isIntersecting){
            return;
        }

        entries[0].target.classList.add('animated','bounce');
        obs.unobserve(entries[0].target);
    }

    const textOptions = {
        threshold: 0,
        ootMargin: '0px 0px -200px',
    };

    const textObserver = new IntersectionObserver(textCallback, textOptions);
    textObserver.observe(targetText);
}