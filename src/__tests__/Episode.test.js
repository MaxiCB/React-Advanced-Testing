import React from 'react';
import {render} from '@testing-library/react'
import Episodes from '../components/Episodes'

test('Episodes Renders Correctly', () => {
    const mockEpisode = [{
        id: 123,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        name: "Testing Episode",
        season: 1,
        number: 1,
        summary: "Test Sumarry",
        runtime: 60
    }]
    render(<Episodes episodes={mockEpisode}/>)
})