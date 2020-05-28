import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			location: null,
			user: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let greeting = await r.json();
			this.setState({ 
				location: greeting.location,
				user: greeting.user
			 });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-danger text-center">Hello {this.state.location} from @{this.state.user}!</h1>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	location: string,
	user: string
}

export default App;
