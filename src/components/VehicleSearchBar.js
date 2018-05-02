import React, { Component } from 'react';
import { sdk as fipe } from 'fipe'
import autoBind from 'react-autobind'
import SearchBar from 'react-search-bar'
import SearchBarStyle from './SearchBarStyle.css'

export default class VehicleSearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehiclesObj: [],
            vehicles: [],
            searchVehicles: []
        }

        autoBind(this)
    }

    async componentDidMount() {
        const vehicles = await fipe.vehicle(this.props.vehicleType, this.props.brandName).all()
        const vehicleNames = vehicles.map((vehicle) => vehicle.fipe_name)

        this.setState({
            vehiclesObj: vehicles,
            vehicles: vehicleNames,
            searchVehicles: vehicleNames
        })
    }

    handleClear() {
        this.setState({
            searchVehicles: []
        });
    }

    handleChange(input) {
        this.props.onTyping(input)

        const filteredVehicles = this.state.vehicles.filter(
            vehicle => vehicle.toLowerCase().includes(input.toLowerCase())
        )

        this.setState({
            searchVehicles: filteredVehicles
        });
    }

    handleSelection(value) {
        if (value) {
            this.props.onSelectVehicle(
                this.state.vehiclesObj.find((vehicle) => vehicle.fipe_name.toLowerCase() === value.toLowerCase())
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
                placeholder="Digite o nome do veículo"
                onChange={this.handleChange}
                onClear={this.handleClear}
                onSelection={this.handleSelection}
                suggestions={this.state.searchVehicles}
                suggestionRenderer={this.suggestionRenderer}
                styles={SearchBarStyle}
            />
        )
    }
}
