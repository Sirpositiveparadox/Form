import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';


class Form extends Component {
	constructor(){
		super();
		this.state = {
			fields: {},
			errors: {},
			showMsg: false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	};

	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState ({
			fields: fields
		});

	}


	validateForm() {
		let fields = this.state.fields;
		let errors = {};
		let formValid = true;

		if (!fields['email']) {
			formValid = false;
			errors['email'] = '* Please enter your email address.';
		}

		if (typeof fields['email'] !== 'undefined') {
			let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	        if (!pattern.test(fields['email'])) {
		          formValid = false;
		          errors['email'] = "* Please enter a valid email address.";
		      }
		}

		if (!fields.text) {
			formValid = false;
			errors['text'] = '* Please enter your text.';
		};

		if (fields.text && fields.text.length > 0 && fields.text.length < 10){

			formValid = false;
			errors['text'] = '* Feedback message must contain at least 10 characters.';
		}

		if (fields.text && fields.text.length > 200) {
			formValid = false;
			errors['text'] = '* Maximum amount of characters: 200.';
		}


		this.setState({
			errors: errors
		});



		return formValid;
	}



		submitForm(e) {
			e.preventDefault();
			let fields = this.state.fields;
			this.setState({
				showMsg:false
			});

			if (this.validateForm()) {
				let data = {
					email: this.state.fields.email,
					text: this.state.fields.text
				}


				let url = 'https://dev.choicy.com/api/feedback';

				axios.post(url, data)
					.then((response) => {
						this.setState({
							showMsg:true,
						});

				}).catch(err => {
					if(err.response.status === 500) {
						this.setState({
							errors: {
								common: 'Server error'
							}
						})
					}

					if(err.response.status === 422) {
						this.setState({
							errors: err.response.errors
						})
					}
				});

				fields.email = '';
				fields.text = '';
			}

		}



	render() {
		return (

			<form className="feedback" action="https://choicy.com/feedback" method="post" onSubmit= {this.submitForm}>
				<h1>Get in Touch</h1>
				<p>Please fill out the quick form and we will be in touch with lightening speed.</p>
				{this.state.showMsg &&
					<div className="showMsg">Your feedback has been sent!</div>
				}
				<label htmlFor="email">Email</label>
				<input type="email" name="email" className="email" placeholder="Your Email address" value= {this.state.fields.email} onChange={this.handleChange} />
				{this.state.errors.email && 
					<div className="error">{this.state.errors.email}</div>
				}
				<label htmlFor="text">Message</label>
				<textarea name="text" className="message" rows="4" cols="10" placeholder="Message" value= {this.state.fields.text}	onChange={this.handleChange} />
				{this.state.errors.text &&
					<div className="error">{this.state.errors.text}</div>
				}
				<input type="submit" className="button" value="SUBMIT"/>
				</form>
			);

}

}

export default Form;
