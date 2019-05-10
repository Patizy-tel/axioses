import React from 'react';
import axios from 'axios'
import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    BlockTitle,
    Block,
    Card,
    CardContent,
    CardHeader,
    Link,
    List,
    ListInput,
    Button
} from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: this.$f7.data.user,
    };

    clicked = e=>{
      let data = this.state.user
      axios.post("http://localhost:5000/payments")

    }

  }
  render() {
    return (
      <Page name="pay">
          <Navbar>
              <NavLeft>
                  <Icon style={{
                    marginLeft: 16,
                    fontSize: 22,
                    color: '#0000008a',
                  }} material="account_box"></Icon>
                  <span style={{
                    fontSize: 14,
                    marginLeft: 2,
                    color: '#0000008a',
                  }}>{this.state.user.firstName + " " + this.state.user.lastName}</span>
              </NavLeft>
              <NavRight>
                  <Icon style={{
                    marginRight: 2,
                    fontSize: 20,
                    color: '#007aff',
                  }} material="account_balance_wallet"></Icon>
                  <span style={{
                    fontSize: 12,
                    fontWeight: '500',
                    marginRight: 16,
                    color: '#007aff',
                  }}>${this.state.user.balance}</span>
              </NavRight>
          </Navbar>
        <BlockTitle>New Payment</BlockTitle>
        <List noHairlinesMd>
          <ListInput
            label="To"
            type="text"
            placeholder="Recipient's name/code"
          ></ListInput>

          <ListInput
            label="Amount"
            type="number"
            placeholder="$0.00"
          ></ListInput>

          <ListInput
            label="Comment"
            type="textarea"
            placeholder="Comment on payment..."
          ></ListInput>
      </List>
      <Button style={{
        marginLeft: 16,
        marginRight: 16,
      }} 

      onClick={this.clicked}
      fill>Pay</Button>
      </Page>
    );
  }
}