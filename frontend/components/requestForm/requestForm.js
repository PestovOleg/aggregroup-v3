import styles from "./RequestForm.module.scss";
import React, { Component } from "react";

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      phone:"",
      email:""
     };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event){
    this.setState({phone:event.target.value})
  }
  handleChangeEmail(event) {
    this.setState({email:event.target.email})
  }

  handleSubmit(event) {
    alert("Отправленное имя: " + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.bigHeader + " " + styles.colorWhite}>
          {this.props.caption}
        </h1>
        <p className={styles.colorWhite}>
          Заполните форму и наш специалист свяжется с Вами в течение часа
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formWrapper}>
            <input
              className={styles.inputSize}
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
              placeholder="Имя"
            />
            <input
              className={styles.inputSize}
              type="text"
              value={this.state.phone}
              onChange={this.handleChangePhone}
              placeholder="Номер телефона"
            />
            <input
              className={styles.inputSize}
              type="text"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              placeholder="e-mail"
            />
            <input
              className={styles.inputSize}
              type="submit"
              value="Отправить"
            />
          </div>
          <div className={styles.checkBoxWrapper}>
            <input type="checkbox" className={styles.checkBox}></input>
            <span className={styles.colorGreen}>
              Я даю свое согласие на обработку персональных данных
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default RequestForm;
