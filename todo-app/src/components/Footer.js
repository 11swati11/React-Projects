import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../typeCodes';

const FILTER_TITLES = {
    [VisibilityFilters.SHOW_ALL]: 'ALL',
    [VisibilityFilters.SHOW_ACTIVE]: 'ACTIVE',
    [VisibilityFilters.SHOW_COMPLETED]: 'COMPLETED'
}

const Footer = (props) => (
    <footer>
        <strong>SHOW: </strong>
        {Object.keys(FILTER_TITLES).map(filter =>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
        )}
    </footer>
)

export default Footer;