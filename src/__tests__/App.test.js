import React from 'react';
// RTL Imports
import {render, fireEvent, wait} from '@testing-library/react'
// API Call
import {fetchShow as mockFetchShow} from '../api/fetchShow'
// Mock Data
import {mockEpisodeRes} from '../mockData'
// Components
import App from '../App'

test('App Renders Correctly', () => {
    render(<App/>)
})

test('Fethcing Data... Renders - No Data', () => {
    const { getByTestId } = render(<App/>)
    const text = getByTestId('loading')
    expect(text).toBeInTheDocument()
})

// Mocking function before creation of test
jest.mock('../api/fetchShows');

test('App Renders - Data Present', () => {
    // mockFetchShow.mockResolvedValueOnce({
    //     'Season 1': [
    //         {
    //             id: 111,
    //             url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    //             name: 'Test 1',
    //             season: 1,
    //             number: 1,
    //             airdate: "2016-07-15",
    //             airtime: "",
    //             airstamp: "2016-07-15T12:00:00+00:00",
    //             runtime: 60,
    //             image: {
    //                 medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    //                 original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    //             },
    //             summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
    //         }
    //     ]
    // })
    mockFetchShow.mockResolvedValueOnce(mockEpisodeRes)
    const { getByTestId } = render(<App/>)
    const app = getByTestId('loaded')
    expect(app).toBeInTheDocument()
})