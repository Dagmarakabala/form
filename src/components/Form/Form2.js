import $ from 'jquery';
import 'jquery-validation';
import 'selectric';
  
  $('#citys').selectric(); 
  $('#countrys').selectric();  
  $('#education').selectric(); 
  $.validator.addMethod("numberPhone", function(value, element) {
  return this.optional( element ) || /^[0-9]{9}$/.test( value );
  });
  
  $('.form__form').validate( {
    rules: {
      name: "required",
      surname: {
        required: true,
        minlength: 3,
      },
      phoneNumber: {
        required: true,
        numberPhone: true,
      },
      email: {
        required: true,
        email: true,
      },
      city: {
        required: true,
      },
      country: {
        required: true,
      },
      work: {
        required: true,
        minlength: 5,
      },
      first: {
        required: true,
      },
      second: {
        required: true,
      }
    },
    messages: {
      name: "wpisz imie",
      surname: {
        required: "podaj nazwisko",
        minlength: "podaj nazwisko",
      },
      phoneNumber: {
        required: "podaj poprawny numer telefonu",
        numberPhone: "podałeś złą ilość cyfr",
      },
      email: {
        required: "podaj poprawny email",
        email: "adres email musi zawierać @"
      },
      city: {
        required: "wybierz miasto",
      },
      country: {
        required: "wybierz kraj",
      },
      work: {
        required: "Napisz czego szukasz!",
        minlength: "Napisz trochę więcej!",
      },
      first: {
        required: "potrzebujemy twojej zgody",
      },
      second: {
        required: "potrzebujemy twojej zgody",
      }
    },
  }
  ) 
  $('.form__button').on("click", () => {
    window.setTimeout(() => {
      $('#first-error').removeClass('error'); 
      $('#first-error').addClass('-errorInCheck'); 
      $('#second-error').removeClass('error'); 
      $('#second-error').addClass('-errorInCheck'); 
    }, 500);

  })