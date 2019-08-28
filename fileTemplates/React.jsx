import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class ${NAME} extends Component
{
    render()
    {
        return (
            <Styled${NAME}>
                ${NAME}
            </Styled${NAME}>
        );
    }
}

${NAME}.propTypes = {

};

${NAME}.defaultProps = {
};

export default observer(${NAME});

const Styled${NAME} = styled.div`

`;