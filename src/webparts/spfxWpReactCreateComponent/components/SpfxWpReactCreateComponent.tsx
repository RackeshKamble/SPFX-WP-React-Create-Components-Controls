import * as React from 'react';
import styles from './SpfxWpReactCreateComponent.module.scss';
import { ISpfxWpReactCreateComponentProps } from './ISpfxWpReactCreateComponentProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Welcome from "./Welcome";

export default class SpfxWpReactCreateComponent extends React.Component<ISpfxWpReactCreateComponentProps, {}> {
  public render(): React.ReactElement<ISpfxWpReactCreateComponentProps> {
    return (
      <div className={ styles.spfxWpReactCreateComponent }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <Welcome message='This is a React Component'/>
              
              {/* If check box checked then show message  */}
              {this.props.checkbox?
                    <Welcome message={this.props.message}/> : null }

              React Experience : {this.props.experience}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
