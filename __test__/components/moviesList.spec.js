import React from 'react'
import {shallow} from 'enzyme'
import MoviesList from '../../app/components/MoviesList';

describe('[Component] -  MoviesList', () => {
    let moviesList = [
        {
            Title: "X-Men: The Last Stand",
            Year : "2006",
            Type : "movie",
            avatar: "https://via.placeholder.com/150"
        }]
    test('should render correctly', () => {
        const node = shallow(<MoviesList data={moviesList} />)
		expect(node.find('#moviesList').exists()).toEqual(true)
    })
    test('API response prop data should exists', () => {
        
    })
});






