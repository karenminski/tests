import React from "react";

class Test8 extends React.PureComponent {  
  constructor(props){
  super(props);
  this.state = {
    disabled: false,
    fullName: "",
    phoneNumber: "",
    aadress: ""
  };
}

handleGameClik() {
  this.setState( {disabled: !this.state.disabled} );
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

render(){
  return (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
    <form style={{width: 300}} onSubmit={this.handleSubmit}>
            <div className={"row"}>
              <label htmlFor="fullName">Full name</label>
              <input name="fullName" value={this.state.fullName} onChange={this.handleChange} type="text" disabled = {(this.state.disabled)? "disabled" : ""}/>
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Phone number</label>
              <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="number" disabled = {(this.state.disabled)? "disabled" : ""}/>
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
              <input name="address" value={this.state.address} onChange={this.handleChange} type="text" disabled = {(this.state.disabled)? "disabled" : ""}/>
            </div>
            <div className={"row"} style={{justifyContent: "flex-end"}}>
              <button>Send</button>
            </div>
          </form>
          <button onClick = {this.handleGameClik.bind(this)}> Nupp </button>
  </div>
  );
  }
}

export default Test8;