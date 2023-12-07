import * as React from "react";
import {IWelcomeProps }from "./IWelcomeProps"

// Create React Component
export default class Welcome extends React.Component<IWelcomeProps>{
    public render(): JSX.Element {
        return (
            //<h1>Welcome to the New Component</h1>
            <h1>{this.props.message}</h1>
        )
    }
}