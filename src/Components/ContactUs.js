import React, { Component } from "react";

export class ContactUs extends Component {

    //state
    state = {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        firstNameErr:"",
        lastNameErr:"",
        emailErr:"",
        passwordErr:""
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        
        const {name,value} = e.target;
        console.log(name,value)
        //setstate is a method which is used to update the state
        this.setState({[name]:value})
        console.log(this.state)
    }


    validateTheForm = () =>{
        let firstNameErr,lastNameErr,emailErr,passwordErr = '';

        if(this.state.firstName.length<4){
            firstNameErr = "first Name should be more than 4 character";
        }

        if(this.state.lastName.length<3){
            lastNameErr = "last Name is required"
        }

        if(!this.state.email.includes('@')){
            emailErr = "please enter a valid email"
        }

        if(this.state.password.length<5){
            passwordErr = "please enter a valid password"
        }


        //0,false,null,undefined,""

        if(firstNameErr || lastNameErr || emailErr || passwordErr){
            this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})

        }else{
            this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
        }

        //firstName > 4
        //lastName>0
        //email '@'
        // password>5
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        // alert("data submitted")

        this.validateTheForm();
    }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-6 mt-5">
            <form>
          <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your First Name"
               onChange={this.handleChange}
               name="firstName"
              /> 
            </div>
            <p className="text-danger">{this.state.firstNameErr}</p>

            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Last Name"
                onChange={this.handleChange}
                name="lastName"
              /> 
            </div>
            <p className="text-danger">{this.state.lastNameErr}</p>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={this.handleChange}
                name ="email"
              />
            <p className="text-danger">{this.state.emailErr}</p>


            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={this.handleChange}
                name="password"
              />
            </div>
            <p className="text-danger">{this.state.passwordErr}</p>

           
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
            </div>

            <div className="col-md-3"></div>
        </div>
         
        </div>
      </div>
    );
  }
}

export default ContactUs;
