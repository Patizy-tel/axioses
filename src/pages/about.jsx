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
      <Page name="about">
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
            About Us
          </BlockTitle>
        <Card className="demo-card-header-pic">
          <CardHeader
            className="no-border"
            valign="bottom"
            style={{
              height: 200,
              color: "#fff",
              backgroundImage:
                "url(https://images.pexels.com/photos/533405/pexels-photo-533405.jpeg?cs=srgb&dl=about-us-businessman-card-533405.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=640&h=213)"
            }}
          >
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores eos iste corporis quo, voluptatem ex sit animi ut
              nobis illo laudantium autem, porro quibusdam. Fugiat excepturi
              omnis suscipit quod pariatur.
            </p>
          </CardContent>
        </Card>
        <Card
          outline
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores eos iste corporis quo, voluptatem ex sit animi ut
              nobis illo laudantium autem, porro quibusdam. Fugiat excepturi
              omnis suscipit quod pariatur."
        />
      </Page>
    );
  }
}