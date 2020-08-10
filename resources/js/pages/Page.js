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
		axios.get(`/products/${Auth.user.attributes.email}`)
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
					<IonText className="content__instructions__text">
						Welcome to Heine Produktmanager. You can edit and update the required/missing fields of your products in Heine Database via this app.
						<br />You can scroll ↔ horizontally to see all fields in the table.
						<br />Products which have missing values are indicated with
						<span>
							<svg className={`table__indicator table__indicator--red`} height="8" width="8" viewBox="0 0 8 8" >
								<circle fill="#ff0055" cx="4" cy="4" r="4" />
							</svg>
						</span>
						You should press <span><IonButton size="small" fill="outline">Edit</IonButton></span> to activate editing of the related product.
						<br />After you finish editing, you should press   <span><IonIcon size="large" color="primary" icon={checkmarkDoneOutline} /></span>   to update your item. If there are no missing fields left, indicator of the completed product will be
						<span>
							<svg className={`table__indicator table__indicator--green`} height="8" width="8" viewBox="0 0 8 8" >
								<circle fill="#ff0055" cx="4" cy="4" r="4" />
							</svg>
						</span>
					</IonText>
				</div>
				<div className="content__servermessage">{state.serverResponse}</div>
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
