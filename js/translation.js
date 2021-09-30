var arrLang = {
  'en': {
    'discount': 'Buy 2 and get 10% off',
    'collections': 'collections',
    'home': 'home',
  },
  'ru': {
    'discount': 'СКИДА 10% ПРИ ПОКУПКЕ 2 ТОВАРОВ',
    'collections': 'КОЛЛЕКЦИИ',
    'home': 'ГЛАВНАЯ',
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