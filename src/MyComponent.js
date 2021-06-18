import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {     // props 비구조화 할당
    
    return (
        <div>
            나의 {name} 컴포넌트. <br />
            Children 값은 {children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본'
};

MyComponent.propTypes ={
    name: PropTypes.string
};

export default MyComponent;