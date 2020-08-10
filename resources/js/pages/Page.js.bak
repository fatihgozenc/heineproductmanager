import React from 'react';
import {
	IonButtons,
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonIcon,
	IonTitle,
	IonToolbar,
	IonButton,
	IonImg
} from '@ionic/react';
import { Auth } from 'aws-amplify';
import DataTable from 'react-data-table-component';
import userTableColumns from '../utils/userTableColumns';
import userTableStyles from '../utils/userTableStyles';
import Logo from '../../assets/logo.jpg'

const Page = (props) => {

	const [userTable, setUserTable] = React.useState([]);
	const [userTableEmptyValues, setUserTableEmptyValues] = React.useState([]);

	// FETCHING ALL DATA IN RELATION WITH AUTHORIZED E-MAIL ADDRESS
	React.useEffect(() => {
		axios.get(`/products/${Auth.user.attributes.email}`)
			.then(res => {
				// SET ALL ROWS OF USER
				setUserTable(res.data);
				setUserTableEmptyValues(res.data.map((row, i) => {
					return {
						productNumber: row.artikelnummer_heine,
						product_id: row.product_id,
						emptyFields: row.empty_values.split(',')
					};
				}))

				// setUserTableEmptyValues()

				// FILTERING OF EMPTY COLUMNS
				// const itemsNeedAttention = res.map((row, i) => {
				// 	const itemNeedsAttention = {
				// 		productNumber: "",
				// 		emptyFields: []
				// 	};
				// 	for (const [key, value] of Object.entries(row)) {
				// 		if (value == 0) { // IF VALUE IS 0 OR ""
				// 			itemNeedsAttention.productNumber = row.artikelnummer_heine
				// 			itemNeedsAttention.emptyFields.push(key)
				// 		}
				// 	}
				// 	return itemNeedsAttention
				// })
				// setUserTableEmptyValues(itemsNeedAttention)
			})
			.catch(err => console.log(err))
	}, [])



	const UserTableExpanded = ({ data }) => {

		console.log(data)

		const [formData, setFormData] = React.useState(
			data.empty_values.split(", ").reduce((acc, cur) => ({ ...acc, [cur]: data[cur] }), {})
		);

		const [status, setStatus] = React.useState("")

		const updateItem = (e) => {
			e.preventDefault();
			let userEmail = Auth.user.attributes.email;
			console.log(formData)
			axios.put(`/products/${data.id}/update`, { formData })
				.then(res => {
					console.log(res)
					const fieldsLeftEmpty = Object.values(formData).filter(item => item == "").length;
					fieldsLeftEmpty == 0
						? (
							setStatus(`${res.data}`)
						) : (
							setStatus(`${res.data} There are ${fieldsLeftEmpty} empty fields, please fill them.`)
						)
				})
				.catch(err => console.log(err))
		}

		return (
			<>
				<form itemID={data.product_id} onSubmit={updateItem} className="inputcontainer">
					<div className="inputcontainer__wrapper">
						{data.empty_values.split(", ").map((value, i) => (
							<IonItem className="inputcontainer__item" key={i}>
								<IonLabel className="inputcontainer__item--label"
									position="stacked">{value.replace(/_/g, ' ').toUpperCase()}</IonLabel>
								<IonInput
									// value={data[`${value}`] ? data[`${value}`] : formData[`${value}`]}
									value={formData[`${value}`]}
									onIonChange={e => setFormData({ ...formData, [value]: e.detail.value })}
								></IonInput>
							</IonItem>
						))}
					</div>
					<div>
						<IonButton type="submit"
							className="inputcontainer__item--button">SUBMIT</IonButton>
						<span className="inputcontainer__message">{status}</span>
					</div>
				</form>
			</>
		)
	}

	const toggleListItem = (e) => {
		const toggler = document.querySelector(`[data-testid=expander-button-${e.currentTarget.id}]`);
		toggler.click();
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="content">
					{/* <IonTitle>Heine Product Manager</IonTitle> */}
					<IonImg className="logo" src={Logo} />
					<IonButtons slot="end">
						<IonTitle>Product Manager</IonTitle>
						<IonMenuButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent className="content content--page">
				{
					userTableEmptyValues.length > 0 &&
					<IonList>
						<header className="sc-fzqNJr kwRiGp rdt_TableHeader">
							<h2 className="sc-fzoyAV jqBTNs">Notifications</h2>
						</header>
						{
							userTableEmptyValues.map((item, i) => (
								<IonItem
									className="notification"
									id={item.product_id}
									onClick={toggleListItem}
									detail key={i}
									button>
									<span className="notification__definition">
										{`Product ${item.productNumber} has empty values:`}
									</span>
									<span className="notification__values">
										{`${item.emptyFields.map(field => ` ${field.replace(/_/g, ' ').toUpperCase()}`)}`}
									</span>
									{/* <span>FILL</span> */}
								</IonItem>
							))
						}
					</IonList>
				}
				{
					userTable.length > 0 &&
					<DataTable
						title="Produkte"
						expandableRows
						striped={true}
						customStyles={userTableStyles}
						keyField="product_id"
						expandableRowsComponent={<UserTableExpanded />}
						// columns={[editButton, ...userTableColumns]}
						columns={userTableColumns}
						data={userTable}
						pagination={true}
						highlightOnHover
						pointerOnHover
						expandOnRowClicked
					/>
				}

			</IonContent>
		</IonPage>
	);
};

export default Page;
