import React, { Component } from 'react';
import { sdk as fipe } from 'fipe'
import autoBind from 'react-autobind'
import SearchBar from 'react-search-bar'
import SearchBarStyle from './SearchBarStyle.css'

export default class BrandSearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brandsObj: [],
            brands: [],
            searchBrands: []
        }

        autoBind(this)
    }

    async componentDidMount() {
        const brands = await fipe.brand(this.props.vehicleType).all()
        const brandNames = brands.map((brand) => brand.fipe_name)

        this.setState({
            brandsObj: brands,
            brands: brandNames,
            searchBrands: brandNames
        })
    }

    handleClear() {
        this.setState({
            searchBrands: []
        });
    }

    handleChange(input) {
        this.props.onTyping(input)

        const filteredBrands = this.state.brands.filter(
            brand => brand.toLowerCase().includes(input.toLowerCase())
        )

        this.setState({
            searchBrands: filteredBrands
        });
    }

    handleSelection(value) {
        if (value) {
            this.props.onSelectBrand(
                this.state.brandsObj.find((brand) => brand.fipe_name.toLowerCase() === value.toLowerCase())
            )
        }
    }

    suggestionRenderer(suggestion, searchTerm) {
        return (
            <span>
                <strong>{suggestion}</strong>
            </span>
        );
    }

    render() {
        return (
            <SearchBar
                autoFocus
                placeholder="Digite a marca do carro"
                onChange={this.handleChange}
                onClear={this.handleClear}
                onSelection={this.handleSelection}
                suggestions={this.state.searchBrands}
                suggestionRenderer={this.suggestionRenderer}
                styles={SearchBarStyle}
            />
        )
    }
}
