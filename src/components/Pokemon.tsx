import React, { Component } from 'react'

export class Pokemon extends Component {
    state = {
        pokemon: {
            id: '999',
            name: 'MadeUp',
            type: 'Fire',
            description: 'Description'
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.pokemon.id}</p>
                <p>{this.state.pokemon.name}</p>
                <p>{this.state.pokemon.type}</p>
                <p>{this.state.pokemon.description}</p>
            </div>
        )
    }
}

export default Pokemon
