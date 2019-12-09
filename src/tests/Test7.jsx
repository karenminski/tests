import React from "react";

class Test7 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      aadress: ""
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

  render(){
    return (
    <div>
      <h3>
        Ülesanne 7:
      </h3>
      <ol>
        <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
        <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
        <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
        <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
        <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
        <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
        <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
        <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
          (npm run start:backend)
        </li>
        <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
        <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
          <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>
      </ol>
      <form style={{width: 300}} onSubmit={this.handleSubmit}>
            <div className={"row"}>
              <label htmlFor="fullName">Full name</label>
              <input name="fullName" value={this.state.fullName} onChange={this.handleChange} type="text"/>
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Phone number</label>
              <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="number"/>
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
              <input name="address" value={this.state.address} onChange={this.handleChange} type="text"/>
            </div>
            <div className={"row"} style={{justifyContent: "flex-end"}}>
              <button>Send</button>
            </div>
          </form>
    </div>
    );
  }
}
export default Test7;