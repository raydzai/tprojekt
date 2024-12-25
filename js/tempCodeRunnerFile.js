
const titles = gsap.utils.toArray('p');
const tl = gsap.timeline({repeat: -1});

titles.forEach(title => {
    const splitTitle = new SplitTextJS(title);

    tl
        .from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: .02,
        }, "<")

        .to(splitTitle.chars, {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: .02,
        }, "<1")
});