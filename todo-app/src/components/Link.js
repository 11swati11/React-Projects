import React from 'react';

const Link = ({active, setVisibilityFilter, children}) => (
    <button className={"btn btn-outline-primary mr-3 " + (active ? "active" : "")} onClick={() => setVisibilityFilter()}>
        {children}
    </button>
    
)

export default Link;
// const mapStateToProps = (state) => {
//     return {
//         visibilityFilter: state.visibilityFilter
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ setVisibilityFilter: setVisibilityFilter }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Link);

