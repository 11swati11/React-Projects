import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ setVisibilityFilter: () => setVisibilityFilter(ownProps.filter) }, dispatch)
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;