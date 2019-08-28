import * as React from "react";
import injectSheet, {WithSheet} from 'react-jss';

interface IProps {
}

const initalState = {};

type State = typeof initalState;

const styles = (theme:themeType) => ({

});

class ${NAME} extends React.Component<WithSheet<typeof styles> & IProps, State>
{
    public state: State = initalState;


    public render(): React.ReactElement<{}> {

        return (

        );
    }
}

export default injectSheet(styles)(${NAME});