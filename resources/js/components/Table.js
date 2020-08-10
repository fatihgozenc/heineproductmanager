import React from 'react'
import { IonItem } from '@ionic/react';
import TableRow from './TableRow'
import inputConfig from '../utils/inputConfig'

const Table = ({ content }) => {

	return (
		<div className="table">
			<div className="table__header">
				<svg className="table__indicator" height="10" width="10" viewBox="0 0 10 10" >
					<circle fill="#fff" cx="5" cy="5" r="5" />
				</svg>
				<div className="table__submit"></div>
				{
					inputConfig.shownInputs.map((item, i) => (
						<IonItem key={`${i}__header--item`} className="table__header--item">
							{item.replace(/_/g, ' ').toUpperCase()}
						</IonItem>
					))
				}
			</div>
			{
				content.map((data) => (
					<TableRow key={data.id} item={data} />
				))
			}
		</div>
	)
}

export default Table;