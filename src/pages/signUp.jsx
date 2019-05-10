import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  BlockTitle,
  Button,

} from 'framework7-react';
import Framework7 from 'framework7';


export default class extends React.Component{
    constructor(){
        super();
        this.onChangeFunc = this.onChange.bind(this)
        this.submitFunc = this.submit.bind(this)
        this.state={
            name:'',
            phoneNumber:"",
            AccountNumber:"",
            password:"",
            CustomerNumber:""
        }
    }
    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
      };

      submit(e) {
       /// we gonna  store all this in local storage 🚋
       // localStorage.setItem('name', this.state.name);
       // localStorage.setItem('password',this.state.password)
       // localStorage.setItem('AccountNumber', this.state.AccountNumber)
       // localStorage.setItem('phoneNumber' ,this.state.phoneNumber)
       // localStorage.setItem('customerNumber' ,this.state.CustomerNumber)

        console.log(this.state)
      };


    render(){
        return(
            <Page name="form">
              <Navbar title="Sign UP" backLink="Back"></Navbar>

              <BlockTitle>Sign UP</BlockTitle>
              <List noHairlinesMd>
                <ListInput
                  label="Name"
                  value={this.state.name}
                  onChange={this.onChangeFunc}
                  type="text"
                  placeholder="Your name"
                ></ListInput>

                <ListInput
                  label="Phone Number"
                  onChange={this.onChangeFunc}
                  value={this.state.phoneNumber}
                  type="tel"
                  placeholder="Phone Number"
                ></ListInput>


                <ListInput
                  label="Account Number"
                  onChange={this.onChangeFunc}
                  value={this.state.AccountNumber}
                  type="number"
                  placeholder="Account Number"
                ></ListInput>
                <ListInput
                label="Customer Number"
                onChange={this.onChangeFunc}
                value={this.state.CustomerNumber}
                type="number"
                placeholder="Customer Number"
              ></ListInput>
              <ListInput
                  label="Password"
                  type="password"
                  onChange={this.onChangeFunc}
                  value={this.state.password}
                  placeholder="Password"
                ></ListInput>

                <ListInput
                  label="Confirm Password"
                  onChange={this.onChangeFunc}
                  value={this.state.password2}
                  type="password"
                  placeholder="Confirm Password"
                ></ListInput>
                <Button className="col" onClick={this.submit} small round outline>Sign Up</Button>

                </List>
            </Page>
          );
    }
}


//var myapp   = new Framework7();
