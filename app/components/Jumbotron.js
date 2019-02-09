import React from 'react'

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id="banner" className="jumbotron text-left">
				<div className="container-fluid">
					<h1 className="jumbotron-heading">{this.props.name}</h1>
					<p className="lead">
						Something short and leading about the collection below—its contents, the creator, etc. Make it short and
						sweet, but not too short so folks don't simply skip over it entirely.
					</p>
					{/* <p>
						<button type="button" className="btn btn-secondary mr-1">
							Button 1
						</button>
						<button type="button" className="btn btn-primary">
							Button 2
						</button>
					</p> */}
				</div>
			</section>
		)
	}
}
