import React, {Component} from 'react';
import './Form.scss';
import axios from 'axios';
import group3 from './images/group3.jpg';


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
						fields.email = '';
						fields.text = '';
						this.setState({
							showMsg:true,
							fields: fields,
							errors: {}
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
							errors: err.response.data.errors
						})
					}
				});
			}

		}



	render() {
		let header = this.state.showMsg ? 'Thank you' : 'Contact us';
        let info = this.state.showMsg ? 'Thank you for your feedback, we will try to respond to you as soon as possible.' : 'Email us if you have any suggestions, questions, or comments.';


		return (

			<div className="support-form">
				<div className="support-member-block">		
					<img src={group3} alt="Choicy support" className="assistant-img"  />
					<h2 className="assistant-name">Jayden Clark</h2>
					<p className="support-msg">Hi, I am a Choicy tech support employee, I will answer all your questions</p>
				</div>
				<form className="user-feedback" method="post" onSubmit= {this.submitForm}>
					<h1 className="contact-header">{header}</h1>
					<p className="contact-information">{info}</p>
					{this.state.showMsg &&
						<div className="showMsg">Your feedback has been sent!</div>
					}
					<div className="email-wrap">
						<label htmlFor="email" className="email-header">Email</label>
						<input type="email" name="email" className="email" value= {this.state.fields.email} onChange={this.handleChange} />
						{this.state.errors.email && 
							<div className="error">{this.state.errors.email}</div>
						}
					</div>
					<div className="message-wrap">
						<label htmlFor="text" className="message-header">Message</label>
						<textarea name="text" className="message" rows="4" cols="10" value= {this.state.fields.text}	onChange={this.handleChange} />
						{this.state.errors.text &&
							<div className="error">{this.state.errors.text}</div>
						}
					</div>
	            	<div className="button-wrap">
		                {!this.state.showMsg  &&
		                	<input type="submit" className="button" value="Send"/>
		                }
		                {this.state.showMsg  &&
		                	<input type="submit" className="button" value="Write again"/>
		                }   
	                </div> 
	                <div className="email-support-wrap">
		                <p className="contact-support-text">Or feel free to write us on e-mail: 
			                <a href="mailto:support@choicy.com" className="contact-support-email"> support@choicy.com</a>
			            </p>
		             </div>
				</form>
			</div>
           
			);


}
}

export default Form;
