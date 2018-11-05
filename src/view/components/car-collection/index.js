export default function() {
    return {
        view: function(vnodes) {
            const data = vnodes.attrs.info;

            return (
                <section class="layer car-coll">
                    <div class="mw8 center car-coll-inner site-grid">
                        <aside class="car-coll__desc content">
                            <h2 class="f2 lh-title mb3">{data.title}</h2>
                            <p class="mb4">{data.desc}</p>
                            <a href="#" class="btn btn--secondary btn--blue"> View All </a>
                        </aside>
                        {/* this would be a loop IRL instead of faking first and second we'd use position */}
                        <figure class="car-coll__car-item car-coll__car__anim-on-hover first">
                            <img class="car-coll__illy" src={data.pic1} />
                            <figcaption class="car-coll__meta">
                                <div class="car-coll__meta-inner">
                                    <h3 class="car-coll__title f3">{data.title1}</h3>
                                    <a class="car-coll__link" href="#"> Learn More </a>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="car-coll__car-item  car-coll__car__anim-on-hover second">
                            <img class="car-coll__illy" src={data.pic2} />
                            <figcaption class="car-coll__meta">
                                <div class="car-coll__meta-inner">
                                    <h3 class="car-coll__title f3">{data.title2}</h3>
                                    <a class="car-coll__link" href="#"> Learn More </a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            );
        },
    };
}
