import React from 'react';
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonIcon,
	IonButton,
	IonTitle,
	IonToolbar,
	IonImg,
	IonText
} from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import { Auth } from 'aws-amplify';
import Logo from '../../assets/logo-white.png'
import Table from '../components/Table'
import { StateContext } from '../context/StateContext'

const Page = (props) => {

	const state = React.useContext(StateContext)

	const [userTable, setUserTable] = React.useState([]);
	const [userTableEmptyValues, setUserTableEmptyValues] = React.useState([]);

	// FETCHING ALL DATA IN RELATION WITH AUTHORIZED E-MAIL ADDRESS
	React.useEffect(() => {
		axios.get(`/products/admin@narciss-taurus.de`)
			.then(res => {
				// SET ALL ROWS OF USER
				setUserTable(res.data);
				let sampleData = res.data[0]
				state.setCompanyName(sampleData.hauptlieferant)
				state.setClientNumber(sampleData.lieferantennummer)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<IonPage>
			<IonHeader className="topbar">
				<IonToolbar className="content" color="primary" >
					<IonImg className="logo" src={Logo} />
					<IonButtons slot="end">
						<IonTitle>Produktmanager</IonTitle>
						<IonMenuButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="content content--page">
				<div className="content__instructions">
					<IonTitle color="primary">Anleitung</IonTitle>
					<div className="content__instructions__text">
						<p>
							Willkommen bei Heine Produktmanager. Mittels dieser App können Sie die erforderlichen / fehlenden Informationsfelder Ihrer einzelnen Produkte aktualisieren.
							<i className="block">(Welcome to the Heine Product Manager. With this app you can edit and update the required/missing Information’s relating to your products.)</i>
						</p>

						<p>
							Um alle Felder der Tabelle anzeigen zu lassen, können Sie nach links und rechts scrollen.
							<i className="block">(You can scroll ↔ left and right to see all the fields in the table.)</i>
						</p>

						<p>
							Produkte mit fehlenden Werten sind mit einem roten Punkt
							<span>
								<svg className={`table__indicator table__indicator--red`} height="8" width="8" viewBox="0 0 8 8" >
									<circle fill="#ff0055" cx="4" cy="4" r="4" />
								</svg>
							</span>
							gekennzeichnet. Mit dem Button <span><IonButton size="small" fill="outline">Edit</IonButton></span> können Sie die Bearbeitung des einzelnen Produkts aktivieren.
							<i className="block">(Products which have missing values are indicated with
								<span>
									<svg className={`table__indicator table__indicator--red`} height="8" width="8" viewBox="0 0 8 8" >
										<circle fill="#ff0055" cx="4" cy="4" r="4" />
									</svg>
								</span>
								You should press <span><IonButton size="small" fill="outline">Edit</IonButton></span> to activate editing of the related product.)
							</i>
						</p>

						<p>
							Nachdem Sie die Bearbeitung abgeschlossen haben, drücken Sie <span><IonIcon size="large" color="primary" icon={checkmarkDoneOutline} /></span>, um Ihre eingetragenen Informationen abzuspeichern. Sobald Sie alle Informationen zu deinem jeweiligen Produkt eingetragen haben, erscheint folgendes Symbol.
							<span><svg className={`table__indicator table__indicator--green`} height="8" width="8" viewBox="0 0 8 8" >
								<circle fill="#ff0055" cx="4" cy="4" r="4" />
							</svg></span>
							<i className="block">
								(After you finish editing, you should press <span><IonIcon size="large" color="primary" icon={checkmarkDoneOutline} /></span>to update your product information. If there are no missing fields left, the indicator of the completed product will turn into
								<span>
									<svg className={`table__indicator table__indicator--green`} height="8" width="8" viewBox="0 0 8 8" >
										<circle fill="#ff0055" cx="4" cy="4" r="4" />
									</svg>
								</span>)
							</i>
						</p>

					</div>
				</div>
				<div className="content__servermessage">
					<p className="block">{state.serverResponse.de}</p>
					<i className="block">{state.serverResponse.en}</i>
				</div>
				<IonTitle color="primary">Produkte</IonTitle>
				{
					userTable.length > 0 &&
					<Table content={userTable} />
				}
			</IonContent>
		</IonPage>
	);
};

export default Page;
