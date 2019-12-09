import React from "react";

class Test10 extends React.PureComponent {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputFullName = React.createRef();
    this.inputAddress = React.createRef();
    this.inputPhone = React.createRef();
    this.inputPersonalCode = React.createRef();
  }

  handleSubmit = (event) => {
    const formBody = {
      fullName: this.inputFullName.current.value,
      address: this.inputAddress.current.value,
      phoneNumber: this.inputPhone.current.value,
      personalCode: this.inputPersonalCode.current.value,
    };
    event.preventDefault();
    fetch("/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formBody)
    }).then( res => res.text())
    .then((responseText) => {
      this.setState({responseText});
    }).catch(err => {
        console.log("Error", err);
    });
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
                ref={this.inputFullName}
                type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
              <input name="address" 
                ref={this.inputAddress}
                type="text"/>
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Phone</label>
              <input name="phoneNumber" 
                ref={this.inputPhone}
                type="number"/>
            </div>
            <div className={"row"}>
              <label htmlFor="personalCode">Personal code</label>
              <input name="personalCode" 
                ref={this.inputPersonalCode}
                type="number"/>
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
export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';