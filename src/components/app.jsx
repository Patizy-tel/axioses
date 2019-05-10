import React from 'react';
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.stanbic', // App bundle ID
        name: 'stanbic-mobile', // App name
        theme: 'auto', // Automatic theme detection
        //App root methods
        methods: {
            alert: ()=> {
                this.$f7.dialog.alert('Hello World');
            }
        },
        // App root data
        data: function () {
          return {
            user: {
              firstName: 'Tate',
              lastName: 'Mbuva',
              balance: '243.50',
            },
            // Payment History
            payments: [
                {
                    to: 'Trevor Munyanyi (EazyElectronics)',
                    datetime: '11 April, 15:35',
                    comment: 'Bluetooth speaker purchase, JBL-Zf290k...',
                    subtitle: '$89.99 successfully paid',
                },
                {
                    to: 'Chinken Inn (Avondale)',
                    datetime: '1 April, 13:15',
                    comment: 'Lunch...',
                    subtitle: '$25.00 successfully paid',
                },
                {
                    to: 'Shingirirai Bishi',
                    datetime: '27 March, 08:00',
                    comment: 'Debt repayment...',
                    subtitle: '$12.00 successfully paid',
                },
                {
                    to: 'OK Supermarket (Marimba)',
                    datetime: '23 March, 12.48',
                    comment: '...',
                    subtitle: '$50.00 successfully paid',
                },
                {
                    to: 'Mrs. J. Mbeva (RotoRealEstate)',
                    datetime: '1 March, 09:00',
                    comment: 'Rent payment...',
                    subtitle: '$235.00 successfully paid',
                },
            ],

          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: this.$device.cordova && this.$device.ios || 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params }>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar></Statusbar>

          {/* Sign In View */}
          <View id="view-signIn" name="signIn" url="/" main/>

          {/* Sign Up View */}
          <View id="view-signIn" name="history"  url="/signUp/" />

          {/* Main View */}
          <View id="view-main" name="main"  url="/main/" router={false}/>

      </App>
    )
  }
  componentDidMount() {
    this.$f7ready((f7) => {
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
    });
  }
}