import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
} from '@ionic/react';
import React from 'react';
import {
	mailOutline,
	personCircleOutline,
	atCircleOutline
} from 'ionicons/icons';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { StateContext } from '../context/StateContext'

const Menu = (props) => {

	const state = React.useContext(StateContext)

	return (
		<IonMenu contentId="main" side="end" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Willkommen</IonListHeader>

					<IonItem>
						<IonIcon color="primary" icon={mailOutline} slot="start" />
						<IonLabel color="primary">{props.user}</IonLabel>
					</IonItem>

					<IonItem>
						<IonIcon color="primary" icon={personCircleOutline} slot="start" />
						<IonLabel color="primary">{state.companyName}</IonLabel>
					</IonItem>

					<IonItem>
						<IonIcon color="primary" icon={atCircleOutline} slot="start" />
						<IonLabel color="primary">{state.clientNumber}</IonLabel>
					</IonItem>

					<AmplifySignOut buttonText="Abmelden" />
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
