import * as React from 'react';
import styles from './EmployeeData.module.scss';
import { IEmployeeDataProps } from './IEmployeeDataProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IEmployee } from './IEmployee';
import pnp from 'sp-pnp-js';
import { Employee } from './Employee';
export default class EmployeeData extends React.Component<IEmployeeDataProps, any> {
  public constructor(props:IEmployeeDataProps,any)
  {
    super(props);
    this.state={
      items:[]
    }
  }
  public render(): React.ReactElement<IEmployeeDataProps> {
    return (
      <div className={ styles.employeeData }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <div className={ "ms-Grid" }>
            <div className={ "ms-Grid-row" }>
             {
               this.state.items.map(function(item:Employee){
                 return(
                  <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>               
                  <div className={styles.contentDiv}>
                  <label className="ms-Label ms-font-xxl">{item.id}</label>
                  <label className="ms-Label">{item.name}</label>
                  <label className="ms-Label">{item.type}</label>
                  <label className="ms-Label">{item.address}</label>                              
                  </div>
                  </div>
                 )
               })
             }
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public componentDidMount()
  {
    debugger;
    this._getListEmployeeData();
  }
  private _getListEmployeeData():void
  {
    debugger;
      pnp.sp.web.lists.getByTitle(`Employees`).items.get().then
      ((response)=>{
        let customerCollection=response.map(item=>new Employee(item));
        this.setState({items:customerCollection});
      }
      )
      
  }
}
