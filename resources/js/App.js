import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import { StateProvider } from './context/StateContext'

// Auth.configure(AmplifyConfig);

const App = () => {

	return (
		<IonApp>
			<StateProvider>
				<IonReactRouter>
					<IonSplitPane when="xxl" contentId="main">
						<Menu user={"admin@narciss-taurus.de"} />
						<IonRouterOutlet id="main">
							<Route state={"admin@narciss-taurus.de"} path="/" component={Page} />
						</IonRouterOutlet >
					</IonSplitPane >
				</IonReactRouter >
			</StateProvider>
		</IonApp>
	)
};

export default App
