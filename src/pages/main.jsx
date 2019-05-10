import React from 'react';
import {
    
    Views,
    View,
    Icon,
    BlockTitle,
    Block,
    Card,
    CardContent,
    CardHeader,
    Link,
    List,
    ListInput,
    Button,
    Toolbar,
    
} from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.currentTab = this.currentTabFunc.bind(this)
    this.state = {
      currentTab: 'pay'
    }

  }
  //Tabbar highlighting logic
  currentTabFunc(tab) {
    console.log(tab)
    //this.setState({ currentTab: tab})
  }

  render() {
    return (
        <Views tabs className="safe-areas"> 
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>

            <Link tabLink="#view-pay"  tabLinkActive iconMd="material:payment" text="Pay" />
            <Link tabLink="#view-history" iconMd="material:history" text="History" />
            <Link tabLink="#view-deposit" iconMd="material:receipt" text="Deposit" />
            <Link tabLink="#view-about"  iconMd="material:info" text="About" />

          </Toolbar>

          

          

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */} 
          <View id="view-pay" name="pay" tab tabActive url="/pay/" 
           />

          {/* History View */}
          <View id="view-history" name="history" tab url="/history/" 
          />

           {/* History View */} 
          <View id="view-deposit" name="deposit" tab url="/deposit/" 
          />

           {/* History View */}
          <View id="view-about" name="about" tab url="/about/" 
          /> 


        </Views> 
            
    );
  }
}