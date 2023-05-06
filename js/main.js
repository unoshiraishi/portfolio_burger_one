'use strict';
 {
    // const target = document.querySelector('img');
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
}