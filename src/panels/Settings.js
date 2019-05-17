import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Spinner, Button, Group, Div, List, Cell, Switch} from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

class Settings extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      notifications: false
    }
	}

  componentDidMount() {

    connect.send("VKWebAppCallAPIMethod", {"method": "apps.isNotificationsAllowed", "params": {"v":"5.95", "access_token":this.props.token}});

    connect.subscribe((e) => {
      switch (e.detail.type) {

        case 'VKWebAppCallAPIMethodResult':
          this.setState({notifications: e.detail.data.response.is_allowed})
        break;

        case 'VKWebAppAllowNotificationsResult':
          if(e.detail.data.result){
            connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
            fetch(`https://cinema.voloshinskii.ru/user/subscribe?token=${this.props.token}`)
            this.setState({notifications: true});
          }
        break;

        case 'VKWebAppDenyNotificationsResult':
          fetch(`https://cinema.voloshinskii.ru/user/unsubscribe?token=${this.props.token}`)
          this.setState({notifications: false});
          break;
      }
    });
  }

  subscribe(event){
    connect.send("VKWebAppTapticImpactOccurred", {"style": "heavy"});
    if(this.state.notifications){
      connect.send("VKWebAppAllowNotifications", {});

    }
    else{
      connect.send("VKWebAppDenyNotifications", {});
      connect.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
    }
  }

	render() {
		return (
      <Panel theme="white" id={this.props.id}>
    		<PanelHeader
    			left={<HeaderButton onClick={this.props.go} data-to="home">
    				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    			</HeaderButton>}
    		>
    			Настройки
    		</PanelHeader>

        <Group title="Настройки профиля">
        <List>
          <Cell asideContent={<Switch value={this.state.notifications} onClick={this.subscribe}/>}>
            Уведомления
          </Cell>
        </List>
        </Group>

    	</Panel>
		);
	}
}

export default Settings;