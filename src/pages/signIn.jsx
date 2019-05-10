import React from 'react';
import {
  Page,
  Navbar,
  List,
  Link,
  ListInput,
  BlockTitle,
  Button,

} from 'framework7-react';
import Framework7 from 'framework7';


export default class extends React.Component{
    constructor(){
        super();

        // Method Binding
        this.onChangeFunc = this.onChange.bind(this)
        this.submitFunc = this.submit.bind(this)

        // Component State
        this.state={
            name:'',
            password:""
        }
    }

    // Capture value change, onInput event
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // Submit input values to App Root
    submit(e) {
        console.log(this.state)
        this.$f7router.navigate('/main/')
    }

    render(){
        return(
            <Page name="signIn" noToolbar={true} style={{
                marginTop: '25%',
            }}>

              <BlockTitle>Sign In</BlockTitle>
              <List noHairlinesMd>

                <ListInput
                  name="name"
                  label="Name"
                  onInput={this.onChangeFunc}
                  type="text"
                  placeholder="Your name"
                ></ListInput>

              <ListInput
                  name="password"
                  label="Password"
                  type="password"
                  onInput={this.onChangeFunc}
                  placeholder="Password"
                ></ListInput>


                </List>
                <Button onClick={this.submitFunc} style={{
                    marginLeft: 16,
                    marginRight: 16,
                }}fill >Sign In</Button>
            <div style={{
                textAlign: 'center',
                marginTop: 16,
            }}>
                <p style={{
                    color: '#000000a6',
                    marginBottom: 0,
                }}>Don't have an account yet?</p>
                <Link href="/signUp/">Sign up here</Link>
            </div>
            </Page>
          );
    }
}

