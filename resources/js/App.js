import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import Menu from './components/Menu';
import Page from './pages/Page';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { AmplifyConfig } from "./AmplifyConfig.json";
import { StateProvider } from './context/StateContext'

Amplify.configure(AmplifyConfig);

const App = () => {

	return (
		<IonApp>
			<StateProvider>
				<IonReactRouter>
					<IonSplitPane when="xxl" contentId="main">
						<Menu user={Auth.user == null ? null : Auth.user.attributes.email} />
						<IonRouterOutlet id="main">
							<Route state={Auth.user == null ? null : Auth.user.attributes.email} path="/" component={Page} />
						</IonRouterOutlet >
					</IonSplitPane >
				</IonReactRouter >
			</StateProvider>
		</IonApp>
	)
};

export default withAuthenticator(App)


if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
};
