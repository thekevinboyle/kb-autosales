import CarCollection from '../car-collection';

export default function() {

    // faking an API response
    const carCollResponse = [
        {
            title: 'Honda Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/honda-01.png',
            title1: 'Honda Accord',
            pic2: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/honda-02.png',
            title2: 'Honda Prius',
        },
        {
            title: 'Audi Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/audi-01.png',
            title1: 'Honda Accord',
            pic2: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/audi-02.png',
            title2: 'Honda Prius',
        },
        {
            title: 'Chevy Cars, Trucks, and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/chevy-01.png',
            title1: 'Honda Accord',
            pic2: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/chevy-02.png',
            title2: 'Honda Prius',
        },
        {
            title: 'Ford Cars, Trucks, and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/ford-01.png',
            title1: 'Honda Accord',
            pic2: 'https://s3-us-west-2.amazonaws.com/mockup-homework-assets/ford-02.png',
            title2: 'Honda Prius',
        },
    ];

    return {
        view: function() {
            return m(
                '.car-coll-list',
                carCollResponse.map(info => {
                    return m(CarCollection, {
                        info,
                    });
                })
            );
        },
    };
}
