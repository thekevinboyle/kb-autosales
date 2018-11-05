import CarCollection from '../car-collection';

export default function() {

    // faking an API response
    const carCollResponse = [
        {
            title: 'Honda Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://picsum.photos/700/700',
            title1: 'Honda Accord',
            pic2: 'https://picsum.photos/800/800',
            title2: 'Honda Prius',
        },
        {
            title: 'Honda Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://picsum.photos/700/700',
            title1: 'Honda Accord',
            pic2: 'https://picsum.photos/800/800',
            title2: 'Honda Prius',
        },
        {
            title: 'Honda Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://picsum.photos/700/700',
            title1: 'Honda Accord',
            pic2: 'https://picsum.photos/800/800',
            title2: 'Honda Prius',
        },
        {
            title: 'Honda Cars and SUVs',
            desc:
        'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
            pic1: 'https://picsum.photos/700/700',
            title1: 'Honda Accord',
            pic2: 'https://picsum.photos/800/800',
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
