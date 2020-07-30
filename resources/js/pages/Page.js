import React from 'react';
import {
	IonButtons,
	IonList,
	IonItem,
	IonPopover,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonIcon,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { ellipsisVertical, ellipsisVerticalOutline } from 'ionicons/icons';
import './Page.css';
import { Auth } from 'aws-amplify';
import DataTable from 'react-data-table-component';
import userTableColumns from '../utils/userTableColumns';
import userTableStyles from '../utils/userTableStyles';

const Page = (props) => {

	const [userTables, setUserTables] = React.useState([]);

	const [showPopover, setShowPopover] = React.useState(false);

	React.useEffect(() => {
		fetch(`/products/${Auth.user.attributes.email}`)
			.then(res => res.json())
			.then(res => {
				console.log(res)
				setUserTables(res)
			})
			.catch(err => console.log(err))
	}, [])

	const editButton = {
		// cell: () => <IonIcon onClick={() => setShowPopover(!showPopover)} slot="start" ios={ellipsisVertical} md={ellipsisVertical} />,
		cell: () => (
			<IonItem button lines="none" onClick={() => setShowPopover(!showPopover)}>
				<IonIcon ios={ellipsisVertical} md={ellipsisVertical} />
				<IonPopover
					isOpen={showPopover}
					cssClass='my-custom-class'
					onDidDismiss={e => setShowPopover(false)}
				>
					<IonList>
						<IonItem button>Learn Ionic</IonItem>
						<IonItem button>Documentation</IonItem>
						<IonItem button>Showcase</IonItem>
						<IonItem button>GitHub Repo</IonItem>
						<IonItem detail button onClick={() => setShowPopover(!showPopover)}>Close</IonItem>
					</IonList>
				</IonPopover>
			</IonItem>
		),
		width: '56px',
		height: '56px',
		// button: true,
		// allowOverflow: true,
		style: {
			borderBottom: '1px solid #FFFFFF',
			marginBottom: '-1px',
		}
	}

	// userTables.map((table, i) => (
	// 	<p key={i}>{table['Sprache']}</p>
	// ))

	const UserTableExpanded = ({ data }) => {
		console.log(data)
		return (
			<div>fatih</div>
		)
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle></IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large"></IonTitle>
					</IonToolbar>
				</IonHeader>

				{
					userTables.length > 0 &&
					<DataTable
						title="Produkte"
						expandableRows
						// expandableIcon={{
						// 	collapsed: <IonIcon size="medium" icon={ellipsisVertical} />,
						// 	expanded: <IonIcon icon={ellipsisVerticalOutline} />,
						// }}
						customStyles={userTableStyles}
						expandableRowsComponent={<UserTableExpanded />}
						// columns={[editButton, ...userTableColumns]}
						columns={userTableColumns}
						data={userTables}
						pagination={true}
						highlightOnHover
						pointerOnHover
					/>
				}

			</IonContent>
		</IonPage>
	);
};

export default Page;
