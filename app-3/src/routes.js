import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokemon from './Pokemon-Classes/Pokemon';
import PokemonList from './Pokemon-Classes/PokemonList';

export default (
    <Switch>
        <Route exact path='/' component={ PokemonList } />
        <Route path='/pokemon/:name' component={ Pokemon } />
    </Switch>
)