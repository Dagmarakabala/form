import $ from 'jquery';
import 'jquery-validation';
import 'selectric';
const Form = {
  settings: {
    target: '.form',
    citys: '#citys',
    countrys: '#countrys',
    education: '#education',
    form: '.form__form',
    form_button: '.form__button'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings, this.afterInit.bind(this));
    }
  },
  afterInit() {
    this.bindEvents();
  },
  catchDOM(settings, callback) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      citys: target.find(settings.citys),
      countrys: target.find(settings.countrys),
      education: target.find(settings.education),
      form: target.find(settings.form),
      form_button: target.find(settings.form_button)
    };
    callback();
  },
  bindEvents() {
    this.$target.form.find('.form__checkbox').on("click", this.toggleCheckbox.bind(this));
    this.$target.form.find('.form__checkbox#all').on("click", this.allCheckbox.bind(this));
    $(this.$target.citys).selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
    $(this.$target.countrys).selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
    $(this.$target.education).selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
    $.validator.addMethod('numberPhone', function(value, element) {
      return this.optional(element) || /^[0-9]{9}$/.test(value);
    });
    $(this.$target.form).validate({
      rules: {
        name: 'required',
        surname: {
          required: true,
          minlength: 3
        },
        phoneNumber: {
          required: true,
          numberPhone: true
        },
        email: {
          required: true,
          email: true
        },
        city: {
          required: true
        },
        country: {
          required: true
        },
        work: {
          required: true,
          minlength: 5
        },
        first: {
          required: true
        },
        second: {
          required: true
        }
      },
      messages: {
        name: 'wpisz imie',
        surname: {
          required: 'podaj nazwisko',
          minlength: 'podaj nazwisko'
        },
        phoneNumber: {
          required: 'podaj poprawny numer telefonu',
          numberPhone: 'podałeś złą ilość cyfr'
        },
        email: {
          required: 'podaj poprawny email',
          email: 'adres email musi zawierać @'
        },
        city: {
          required: 'wybierz miasto'
        },
        country: {
          required: 'wybierz kraj'
        },
        work: {
          required: 'Napisz czego szukasz!',
          minlength: 'Napisz trochę więcej!'
        },
        first: {
          required: 'potrzebujemy twojej zgody'
        },
        second: {
          required: 'potrzebujemy twojej zgody'
        }
      }
    });
    $(this.$target.form)
      .delegate(this.$target.form_button)
      .on('click', () => {
        window.setTimeout(() => {
          $('#first-error').removeClass('error');
          $('#first-error').addClass('-errorInCheck');
          $('#second-error').removeClass('error');
          $('#second-error').addClass('-errorInCheck');
          this.borderBottom();
        }, 500);
      });
  },
  borderBottom() {
    const city = this.$target.form.find('select#citys');
    const citys = this.$target.form.find('.selectric').first();
    if(city.hasClass('error')) {
      citys.addClass('error');
    }
    else {
      citys.removeClass('error');
    }
    const country = this.$target.form.find('select#countrys');
    const countrys = this.$target.form.find('.selectric').eq(1);
    if(country.hasClass('error')) {
      countrys.addClass('error');
    }
    else {
      countrys.removeClass('error');
    }
  },
   toggleCheckbox(event) {
    const checkbox = $(event.currentTarget);
    const checkboxName = checkbox[0].id;
    const label = this.$target.form.find(`.form__label#${checkboxName}`);
    label.toggleClass('-checked');
    this.checkAndRemoveWhenNotAll();
  },
  allCheckbox(event) {
    const checkbox = $(event.currentTarget);
    if( checkbox.hasClass('-uncheck')) {
      this.uncheckCheckbox();
    }
    else {
      this.selectAllCheckbox();
    }
  },
  selectAllCheckbox() {
    const allCheckboxs = this.$target.form.find('.form__checkbox');
    let i;
    for (i = 0; i < allCheckboxs.length; i++) {
      let checkboxName = allCheckboxs[i].id;
      allCheckboxs[i].checked = true;
      const label = this.$target.form.find(`.form__label#${checkboxName}`);
      label.addClass('-checked');
    }
    const text =  this.$target.form.find(`.form__text#all`);
    text.text("Odznacz wszystkie");
    allCheckboxs.addClass('-uncheck');
  },
  uncheckCheckbox() {
    const checkbox =  this.$target.form.find(`.form__checkbox#all`);
    const allLabel = this.$target.form.find('.form__label#all');
    allLabel.removeClass('-checked');
    const allCheckboxs = this.$target.form.find('.form__checkbox');
    const text =  this.$target.form.find(`.form__text#all`);
    let i;
    for (i = 0; i < allCheckboxs.length; i++) {
      let checkboxName = allCheckboxs[i].id;
      allCheckboxs[i].checked = false;
      const label = this.$target.form.find(`.form__label#${checkboxName}`);
      label.removeClass('-checked');
    }
    text.text("Zaznacz wszystkie");
    allCheckboxs.removeClass('-uncheck');
    checkbox.removeClass('-uncheck');
  },
  checkAndRemoveWhenNotAll() {
    const allCheckbox = this.$target.form.find('.form__checkbox#all');
    const allLabel = this.$target.form.find('.form__label#all');
    const firstCheckbox = this.$target.form.find('.form__checkbox#first');
    const secondCheckbox = this.$target.form.find('.form__checkbox#second');
    if (firstCheckbox[0].checked == false || secondCheckbox[0].checked == false) {
      allLabel.removeClass('-checked');
      const text =  this.$target.form.find(`.form__text#all`);
      text.text("Zaznacz wszystkie");
      const checkbox =  this.$target.form.find(`.form__checkbox#all`);
      checkbox.removeClass('-uncheck');
    }
  },
};
export default Form;