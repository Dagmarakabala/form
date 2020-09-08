import $ from 'jquery';

const Form = {
  init() {
      this.catchDOM();
      this.addNoValidate();
      this.bindEvents();
    },
  catchDOM() {
    this.formSection = $('.form');
  },
  bindEvents() {
    this.formSection.find('.form__button').on("click", this.checkForm.bind(this));
    this.formSection.find('.form__checkbox').on("click", this.toggleCheckbox.bind(this));
  },
  checkForm(event) {
    event.preventDefault();
    this.checkName();
    this.checkSurname();
    this.checkNumber();
    this.checkEmail();
    this.checkCity();
    this.checkCountry();
    this.checkWork();
    this.checkCheckbox();
  },
  checkName() {
    const name = this.formSection.find('#name');
    const nameSpan = this.formSection.find('.form__tooltip#name');
    const nameSurname = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i;
    if (!nameSurname.test(name[0].value)) {
      name.addClass('-redBorder');
      nameSpan.addClass('-visible');
    }
    else {
      name.removeClass('-redBorder');
      nameSpan.removeClass('-visible');
    }
  },
  checkSurname() {
    const surname = this.formSection.find('#surname');
    const surnameSpan = this.formSection.find('.form__tooltip#surname');
    const nameSurname = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i;
    if (!nameSurname.test(surname[0].value)) {
      surname.addClass('-redBorder');
      surnameSpan.addClass('-visible');
    }
    else {
      surname.removeClass('-redBorder');
      surnameSpan.removeClass('-visible');
    }
  },
  checkNumber() {
    const phoneNumber = this.formSection.find('#phoneNumber');
    const phoneNumberSpan = this.formSection.find('.form__tooltip#phoneNumber');
    if (phoneNumber[0].value.length != 9) {
      phoneNumber.addClass('-redBorder');
      phoneNumberSpan.addClass('-visible');
    }
    else {
      phoneNumber.removeClass('-redBorder');
      phoneNumberSpan.removeClass('-visible');
    }
  },
  checkEmail() {
    const email = this.formSection.find('#email');
    const emailSpan = this.formSection.find('.form__tooltip#email');
    const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    if(!regEmail.test(email[0].value))  {
      email.addClass('-redBorder');
      emailSpan.addClass('-visible');
    }
    else {
      email.removeClass('-redBorder');
      emailSpan.removeClass('-visible');
    }
  },
  checkCity() {
    const city = this.formSection.find('#city');
    const citySpan = this.formSection.find('.form__tooltip#city');
     if (city[0].value.length == 0) {
      city.addClass('-redBorder');
      citySpan.addClass('-visible');
    }
    else {
      city.removeClass('-redBorder');
      citySpan.removeClass('-visible');
    }
  },
  checkCountry() {
    const country = this.formSection.find('#country');
    const countrySpan = this.formSection.find('.form__tooltip#country');
    if (country[0].value.length == 0) {
      country.addClass('-redBorder');
      countrySpan.addClass('-visible');
    }
    else {
      country.removeClass('-redBorder');
      countrySpan.removeClass('-visible');
    }
  },
  checkWork() {
    const work = this.formSection.find('#work');
    const workSpan = this.formSection.find('.form__tooltip#work');
    if (work[0].value.length == 0) {
      work.addClass('-redBorder');
      workSpan.addClass('-visible');
    }
    else {
      work.removeClass('-redBorder');
      workSpan.removeClass('-visible');
    }
  },
  checkCheckbox() {
    const checkboxs = this.formSection.find('.form__checkbox');
    let i;
    for( i=0; i < checkboxs.length; i++) {
      const id = checkboxs[i].id;
      const checkboxsSpan = this.formSection.find(`.form__tooltip#${id}`);
      if (checkboxs[i].checked == false) {
        checkboxsSpan.addClass('-visible');
      }
      else {
        checkboxsSpan.removeClass('-visible');
      }
    }
  },
  toggleCheckbox(event) {
    const checkbox = $(event.currentTarget);
    const checkboxName = checkbox[0].id;
    const label = this.formSection.find(`.form__label#${checkboxName}`);
    label.toggleClass('-checked')
  },
  addNoValidate() {
    const form = this.formSection.find('.form__form');
    form[0].setAttribute("novalidate", true);
  },
};
export default Form;