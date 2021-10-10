var arrLang = {
  'en': {
    'discount': 'Buy 2 and get 10% off',
    'collections': 'collections',
    'home': 'home',
    'rus': 'en',
    'eng': 'en',
    'sub-1':'',
    'sub-2':'Eco-friendly materials clothing production',
    'new':'new arrivals ',
    'parsing':'parsing',
  },
  'ru': {
    'discount': 'СКИДА 10% ПРИ ПОКУПКЕ 2 ТОВАРОВ',
    'collections': 'КОЛЛЕКЦИИ',
    'home': 'ГЛАВНАЯ',
    'rus': 'ru',
    'eng': 'en',
    'sub-1':'Стиль отражения общества',
    'sub-2':'Собственное производство из экологичных материалов',
    'new':'новинки  ',
     'parsing':'разбор  ',


  }
}

  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
