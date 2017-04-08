import {Navigation} from 'react-native-navigation';

import HomeRender from './HomeRender';
import DetailRender from './DetailRender';
import MeRender from './MeRender';
import ReplyListRender from './ReplyListRender';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Noder.HomeRender', () => HomeRender);
  Navigation.registerComponent('Noder.MeRender', () => MeRender);
  Navigation.registerComponent('Noder.DetailRender', () => DetailRender);
  Navigation.registerComponent('Noder.ReplyListRender', () => ReplyListRender);
}
