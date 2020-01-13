import React, {Component} from 'react';
import './Form.css';


class Form extends Component {
	constructor(){
		super();
		this.state = {
			fields: {},
			errors: {}
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

	submitForm(e) {
		e.preventDefault();
		if (this.validateForm()) {
			let fields = {};
			fields['email'] = '';
			fields['feedback'] = '';
			this.setState({fields:fields});
			alert('Feedback submitted');
		}
	}

	validateForm() {
		let fields = this.state.fields;
		console.log()
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
		          errors["email"] = "* Please enter a valid email address.";
		      }
		}

		if (!fields.feedback) {
			formValid = false;
			errors['feedback'] = '* Please enter your feedback.';
		};

		if (fields.feedback && fields.feedback.length > 0 && fields.feedback.length < 10){

			formValid = false;
			errors['feedback'] = '* Feedback message must contain at least 10 characters.';
		}

		if (fields.feedback && fields.feedback.length > 200) {
			formValid = false;
			errors['feedback'] = '* Maximum amount of characters: 200.';
		}



		this.setState({
			errors: errors
		});

		return formValid;
	}



	render() {
		return (

			<form className="feedback" action="https://choicy.com/feedback" method="post" onSubmit= {this.submitForm}>
				<h1>Get in Touch</h1>
				<p>Please fill out the quick form and we will be in touch with lightening speed.</p>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" className="email" placeholder="Your Email address" value= {this.state.fields.email} onChange={this.handleChange} />
				{this.state.errors.email && 
					<div className="error">{this.state.errors.email}</div>
				}
				<label htmlFor="feedback">Message</label>
				<textarea name="feedback" className="message" rows="4" cols="10" placeholder="Message" value= {this.state.fields.feedback}	onChange={this.handleChange} />
				{this.state.errors.feedback &&
					<div className="error">{this.state.errors.feedback}</div>
				}
				<input type="submit" className="button"  value="SUBMIT"/>
				</form>
			);

}
}


export default Form;
