import React from 'react';
import { Page,
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    List,
    ListItem,
    Block,
    BlockTitle
    } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
      payments: this.$f7.data.payments,
      user: this.$f7.data.user,
    }
  }
  render() {
    return (
      <Page name="history">
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
        <BlockTitle>Payment History</BlockTitle>
            <List mediaList noChevron >
                {this.state.payments.map((payment) => (
                  <ListItem
                    link="#"
                    key={Math.random()}
                    title={payment.to}
                    after={payment.datetime}
                    subtitle={payment.subtitle}
                    text={payment.comment}
                  ></ListItem>
                 ))}
            </List>
      </Page>
    );
  }
}
