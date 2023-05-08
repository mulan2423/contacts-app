import './App.css'
import React, { useState } from 'react';

const contactForm = () => {
    const [name, email, phoneNumber, address,
        city, state, zipCode] = useState('')
            
const handleSubmit =(event) => {
event.preventDefault();
    };
    const serverResponse = this.props.handleSubmit
       (this.state.name, 
        this.state.email,
        this.state.phoneNumber,
        this.state.address, 
        this.state.city, 
        this.state.state ,
        this.state.zipcode);
    this.setState({
    serverResponse }, () => {
        console.log (serverResponse)
    }); 
    
    
    
    
    
    
    
    return (
        
  );
};

 </form>
</div>
    
    }
    export default ContactForm;