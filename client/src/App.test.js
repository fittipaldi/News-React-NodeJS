import React from 'react';
import {render} from '@testing-library/react';
import BoxNews from './componentes/Modules/BoxNews';

test('Render Box News', () => {
    const data = {
        url: 'http://localhost',
        urlToImage: process.env.PUBLIC_URL + '/no-image-512.png',
        publishedAt: '2020-10-11T18:07:00Z',
        title: 'News Test',
        description: 'Description test',
        author: 'Developer',
        countryCode: 'us'
    };
    const {getByText} = render(<BoxNews data={data}/>);
    const title = getByText(/News Test/i);
    expect(title).toBeInTheDocument();
});
