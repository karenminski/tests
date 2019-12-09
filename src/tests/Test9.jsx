import React from "react";

class Test9 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        fullName: "",
        address: "",
        phoneNumber: 0,
        personalCode: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
    }).then( res => res.text())
    .then((responseText) => {
      this.setState({responseText});
    }).catch(err => {
        console.log("Error", err);
    });
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  toggleDisabledState() {
    this.setState( {disabled: !this.state.disabled} );
  } 

  render() {
    return (
      <div>
        <Task />
        <div>
          <form style={{width: 300}} onSubmit={this.handleSubmit}>
            <div className={"row"}>
              <label htmlFor="fullName">Name</label>
              <input name="fullName" 
                value={this.state.fullName}
                onChange={this.handleChange}
                type="text" 
                disabled = {this.state.disabled}/>
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
              <input name="address" 
                value={this.state.address}
                onChange={this.handleChange}
                type="text"
                disabled = {this.state.disabled}/>
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Phone</label>
              <input name="phoneNumber" 
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                type="number"
                disabled={this.state.disabled}/>
            </div>
            <div className={"row"}>
              <label htmlFor="personalCode">Personal code</label>
              <input name="personalCode" 
                value={this.state.personalCode}
                onChange={this.handleChange}
                type="number"
                disabled = {this.state.disabled}/>
            </div>
            <div className={"row"} style={{justifyContent: "flex-end"}}>
              <button>Send</button>
            </div>
          </form> 
        </div>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';