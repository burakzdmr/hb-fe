import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import FilterItem from '../molecules/filterItem/filterItem';

afterEach(() => {
    cleanup();
})

test('should render FilterItem component', () => {
    const filters = [{
        count: 2,
        name: "Siyah",
        type: 1
    },
    {
        count: 13,
        name: "Sarı",
        type: 2
    }]
    render(<FilterItem title={"Renk"} subItems={filters} />);
    const title = screen.getByTestId('filter-item-title');
    const item1 = screen.getByTestId('filter-item-Siyah');
    const item2 = screen.getByTestId('filter-item-Sarı');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Renk");

    expect(item1).toBeInTheDocument();
    expect(item1).toHaveTextContent("Siyah(2)")

    expect(item2).toBeInTheDocument();
    expect(item2).toHaveTextContent("Sarı(13)")

})