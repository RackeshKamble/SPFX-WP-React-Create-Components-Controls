import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLabel,
  PropertyPaneHorizontalRule,
  PropertyPaneButton,
  PropertyPaneCheckbox,
  PropertyPaneChoiceGroup,
  PropertyPaneButtonType
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxWpReactCreateComponentWebPartStrings';
import SpfxWpReactCreateComponent from './components/SpfxWpReactCreateComponent';
import { ISpfxWpReactCreateComponentProps } from './components/ISpfxWpReactCreateComponentProps';

export interface ISpfxWpReactCreateComponentWebPartProps {
  description: string;
  message : string;
  checkbox : boolean;
  experience:string;
}

export default class SpfxWpReactCreateComponentWebPart extends BaseClientSideWebPart<ISpfxWpReactCreateComponentWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxWpReactCreateComponentProps > = React.createElement(
      SpfxWpReactCreateComponent,
      {
        description: this.properties.description,
        message : this.properties.message,
        checkbox: this.properties.checkbox,
        experience : this.properties.experience
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected myFucntionClick() : void {
    alert("Button Clicked");
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [

                //Textbox Control
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                
                //Textbox Control
                PropertyPaneTextField('message', {
                  label: "Message"
                }),

                //Label Control
                PropertyPaneLabel('', {
                  text: "This is a Label - Please Enter the Message"
                }),

                //Line Control
                PropertyPaneHorizontalRule(),

                //Button Control
                PropertyPaneButton('', {
                  text: "Click Here",
                  buttonType : PropertyPaneButtonType.Normal,
                  onClick : this.myFucntionClick
                }),

                //Checkbox Control
                PropertyPaneCheckbox('checkbox', {
                  text: "Do you wanna show a message?",
                  checked : true
                }),
                
                //Radio Button Controls
                PropertyPaneChoiceGroup('experience' , {
                  label: 'Select React Experience ', 
                    options: [
                    {key: 'Amatuer', text: 'Amatuer'},
                    {key: 'Advanced', text: 'Advanced', checked : true},
                    {key: 'Experienced', text: 'Experienced'}
                    ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
