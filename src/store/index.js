import {configureStore} from '@reduxjs/toolkit'
// Reducers
import pokemons from './slices/pokemons/index.js'


export default configureStore({
    reducer: {
        pokemons
    }
})

