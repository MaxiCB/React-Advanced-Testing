import React from 'react';
// RTL Imports
import {render, wait} from '@testing-library/react'
// API Call
import {fetchShow as mockFetchShow} from '../api/fetchShow'
// Mock Data
import {mockEpisodeRes} from '../mockData'
// Components
import App from '../App'

// Mocking function before creation of test
jest.mock('../api/fetchShow')

test('App Renders - Data Present', async () => {
    mockFetchShow.mockResolvedValueOnce(mockEpisodeRes)
    const { getByTestId } = render(<App/>)
    expect(mockFetchShow).toHaveBeenCalledTimes(1)

    await wait(() => {
        const app = getByTestId('loading')
        expect(app).toBeInTheDocument()
    })
})