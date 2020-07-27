import React from 'react';
import ReactDOM from 'react-dom';

const Main = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">asd Component</div>

						<div className="card-body">I'm an example component!</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;

if (document.getElementById('main')) {
	ReactDOM.render(<Main />, document.getElementById('main'));
}
