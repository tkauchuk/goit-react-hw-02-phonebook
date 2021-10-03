import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

class Filter extends Component {

    static propTypes = {
        onFilterChange: PropTypes.func
    }

    onFilterInputChange = (event) => {
        const { target } = event;
        this.props.onFilterChange(target.value);
    }

    render() {
        return (
            <label className={styles.label}>
                Find contacts by name
                <input
                    className={styles.input}
                    type="text"
                    name="filter"
                    autoComplete="off"
                    disabled={!this.props.isFilterActive}
                    onChange={this.onFilterInputChange}
                />
            </label>
        );
    }
}

export default Filter;