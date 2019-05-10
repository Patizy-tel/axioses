import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    BlockTitle,
    Block,
    Row,
    Card,
    CardContent,
    CardHeader,
    Link,
    List,
    ListInput,
    Button
} from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      user: this.$f7.data.user,
    }
  }
  render() {
    return (
      <Page name="deposit">
        <Navbar>
          <NavLeft>
            <Icon
              style={{
                marginLeft: 16,
                fontSize: 22,
                color: "#0000008a"
              }}
              material="account_box"
            />
            <span
              style={{
                fontSize: 14,
                marginLeft: 2,
                color: "#0000008a"
              }}
            >
              {this.state.user.firstName + " " + this.state.user.lastName}
            </span>
          </NavLeft>
          <NavRight>
            <Icon
              style={{
                marginRight: 2,
                fontSize: 20,
                color: "#007aff"
              }}
              material="account_balance_wallet"
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: "500",
                marginRight: 16,
                color: "#007aff"
              }}
            >
              ${this.state.user.balance}
            </span>
          </NavRight>
        </Navbar>
          <BlockTitle>
            Deposit Infomation
          </BlockTitle>
        <List noHairlinesMd >
          <ListInput
            label="Account"
            type="text"
            placeholder="Account Name"
          />

          <ListInput
            label="Account Number"
            type="text"
            placeholder="Account Number"
          />

          <ListInput
            label="Amount"
            type="number"
            placeholder="$0.00"
          />

          <ListInput
            type="textarea"
            label="Comment"
            placeholder="Comment"
          />
        </List>

            <Button
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                }}
              fill
            >
              Deposit
            </Button>
      </Page>
    );
  }
}