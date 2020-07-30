import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';


const appPages = [
	{
		title: 'Inbox',
		url: '#inbox',
		iosIcon: mailOutline,
		mdIcon: mailSharp
	},
	{
		title: 'Outbox',
		url: '#outbox',
		iosIcon: paperPlaneOutline,
		mdIcon: paperPlaneSharp
	},
	{
		title: 'Favorites',
		url: '#favorites',
		iosIcon: heartOutline,
		mdIcon: heartSharp
	},
	{
		title: 'Archived',
		url: '#archived',
		iosIcon: archiveOutline,
		mdIcon: archiveSharp
	},
	{
		title: 'Trash',
		url: '#trash',
		iosIcon: trashOutline,
		mdIcon: trashSharp
	}
];

const Menu = (props) => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Heine Product Manager</IonListHeader>
					<IonNote>{props.user}</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={location.pathname === appPage.url ? 'selected' : ''}
									routerLink={appPage.url} routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
					<AmplifySignOut buttonText="Abmelden" />
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
