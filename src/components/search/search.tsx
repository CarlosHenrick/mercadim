import React from "react";
import { Input, Space } from 'antd';
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchSearchProducts } from "../../store/productsSlice";

const { Search } = Input;

function SearchItems() {
    const dispatch = useDispatch<AppDispatch>();

    const onSearch = (value: string) => {
        dispatch(fetchSearchProducts(value));
    }

    return (

        <Search
            className="search-input"
            placeholder="O que você procura?"
            allowClear
            enterButton="Buscar"
            size="large"
            onSearch={onSearch}
        />
    )
}

export default SearchItems;