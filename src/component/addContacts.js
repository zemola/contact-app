import React, { Component } from 'react'

 class AddContacts extends Component {
   state = {
     name:'',
     email: ''
   };

    add = (e) => {
      e.preventDefault();
     if(this.state.name===''|| this.state.email==='') {
       alert('All input feild is mandatory')
       return
     }
    this.props.addContactHandler(this.state)
    this.setState({name:'',email:''})
   }

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div>
            <label>Name</label>
            <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}></input>
          </div>
          <div>
            <label>email</label>
            <input type='email' placeholder='email' value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}></input>
          </div>
          <button className='bg-light-blue'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddContacts;