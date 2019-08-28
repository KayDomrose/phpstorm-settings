import React from "react";
import injectSheet, { WithSheet } from 'react-jss';

interface IProps extends WithSheet<typeof styles> {

}

const ${NAME} = ({ classes }: IProps) => (
    <div>

    </div>
);

const styles = (theme: ITheme) => ({

});

export default injectSheet(styles)(${NAME});