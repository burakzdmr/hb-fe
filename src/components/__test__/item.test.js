import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import Item from '../molecules/item/item';
test('should render Item component', () => {
    const item = {
        brand: "Huawei",
        changepercent: 12,
        color: "Kırmızı",
        createddate: "1646482298719",
        id: 30,
        imageurl: "blackIphone.png",
        name: "Huawei 5",
        oldprice: 124,
        price: 90.85
    }
    render(<Item props={item} />);
    const itemBrand = screen.getByTestId('item-brand');
    const itemColor = screen.getByTestId('item-color');
    const itemPrice = screen.getByTestId('item-price');
    expect(itemBrand).toBeInTheDocument();
    expect(itemBrand).toHaveTextContent("Huawei");

    expect(itemColor).toBeInTheDocument();
    expect(itemColor).toHaveTextContent("Kırmızı")

    expect(itemPrice).toBeInTheDocument();
    expect(itemPrice).toHaveTextContent("90.85")

})