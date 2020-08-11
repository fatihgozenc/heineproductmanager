import React from 'react'
import {
	IonItem,
	IonInput,
	IonIcon,
	IonButton,
} from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import inputConfig from '../utils/inputConfig'
import { StateContext } from '../context/StateContext'

const TableRow = ({ item }) => {

	const state = React.useContext(StateContext)

	// HELPER FUNC
	const isFieldEmpty = (field) => field == "" || field == 0

	// GETTING ONLY ALLOWED INPUTS TO FORM STATE
	const [formData, setFormData] = React.useState(
		inputConfig.allowedInputs.reduce((acc, cur) => (
			{ ...acc, [cur]: item[cur] }
		), {})
	);

	// GET EMPTY FIELD COUNT
	const [emptyFieldCount, setEmptyFieldCount] = React.useState(
		Object.values(formData).filter(item => isFieldEmpty(item)).length
	)

	// ACTIVATION FOR EDITING THE ROW
	const [isRowActive, setIsRowActive] = React.useState(false)

	// CREATING COLUMNS FROM DATA OBJ PROPERTIES
	const createColumns = (item) => {

		const filtered = Object.keys(item)
			.filter(key => inputConfig.shownInputs.includes(key))
			.reduce((obj, key) => {
				obj[key] = item[key];
				return obj;
			}, {});

		let table = []

		for (const [key, value] of Object.entries(filtered)) {
			let isDisabled = inputConfig.allowedInputs.indexOf(key) == -1 ? true : false
			table.push(
				<IonItem
					key={`${item.id}--${key}`}
					id={`${item.id}--${key}`}
					className={`table__column ${isFieldEmpty(isDisabled ? value : formData[key]) ? 'table__column--empty' : ''}`}>
					<IonInput
						disabled={isDisabled ? isDisabled : isRowActive ? false : true}
						value={isDisabled ? value : formData[key]}
						onIonChange={e => setFormData({ ...formData, [key]: e.detail.value })}
					></IonInput>
				</IonItem>
			)
		}
		return table
	}

	const updateItem = (e) => {
		e.preventDefault();
		axios.put(`/products/${item.id}/update`, { formData })
			.then(res => {
				setIsRowActive(false)
				const fieldsLeftEmpty = Object.values(formData).filter(item => isFieldEmpty(item)).length;
				if (fieldsLeftEmpty == 0) {
					state.setServerResponse({ ...state.serverResponse, en: `${res.data.en}`, de: `${res.data.de}` })
					setEmptyFieldCount(0)
				} else {
					let messageEn = `${res.data.en} There are ${fieldsLeftEmpty} empty field${fieldsLeftEmpty > 1 ? 's' : ''} in the latest edited row, please insert your information.`
					let messageDe = `${res.data.de} Jedoch befinden sich in der zuletzt bearbeiteten Zeile noch ${fieldsLeftEmpty} ${fieldsLeftEmpty > 1 ? 'leere Felder' : "leeres Feld"}. Bitte ergänzen Sie die Informationen.`
					state.setServerResponse({ ...state.serverResponse, en: `${messageEn}`, de: `${messageDe}` })
					setEmptyFieldCount(fieldsLeftEmpty)
				}
			})
			.catch(err => console.log(err))
	}


	return (
		<form key={item.id} id={item.id} onSubmit={updateItem} className="table__row">
			<svg className={`table__indicator table__indicator--${emptyFieldCount > 0 ? 'red' : 'green'}`} height="8" width="8" viewBox="0 0 8 8" >
				<circle fill="#ff0055" cx="4" cy="4" r="4" />
			</svg>
			<div className="table__submit">
				{
					isRowActive
						? (
							<button type="submit">
								<IonIcon size="large" color="primary" icon={checkmarkDoneOutline} />
							</button>
						) : (
							<IonButton size="small" onClick={() => setIsRowActive(true)} fill="outline">Edit</IonButton>
						)
				}
			</div>
			{createColumns(item)}
		</form>
	)
}

export default TableRow;