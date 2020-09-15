const lang = {
  ua: {
    tab_title: 'Замовити автобус',
    logo_title: 'Транспортна компанія',
    promo_title: 'Пасажирські перевезення по Києву та Україні',
    content_title: 'Що ми пропонуємо?',
    l_s_title: 'Наша транспортна  компанія надає логістичні послуги:',
    l_s_item_1: 'трансфери в аеропорт,залізничний та  автовокзали',
    l_s_item_2: 'екскурсійні перевезення по Києву і області',
    l_s_item_3: 'перевезення туристичних груп по Києву, Україні та СНД',
    equipment_title: 'У нас комфортабельні автобуси VanHool Astron 916, Euro 5, виробник Бельгія.',
    equipment_list_title: 'Комплектація автобусів:',
    equipment_item_1: 'місць 54',
    equipment_item_2: 'клімат-контроль',
    equipment_item_3: 'сонцезахисні склопакети',
    equipment_item_4: 'комфортні сидіння з 2х рівневими спинками передбачених для сну',
    equipment_item_5: 'WiFi в Україні і Європі',
    equipment_item_6: 'холодильник',
    equipment_item_7: 'кухня-бар з можливістю приготування чаю і кави',
    equipment_item_8: 'розетки 220 V та USB зарядки індивідуально для кожного пасажира',
    equipment_item_9: 'WC',
    equipment_item_10: 'Водії: високодосвідчені, інтелігентні!',
    price_text: 'Послуги надаємо фізичним та юридичним особам, готівкова та безготівкова форма оплати, постійним клієнтам - дисконт 10%. <br> Вартість: замовити автобус по Києву 1 год - 800 грн, по Україні 1 км - 25 грн. <br> Приймаємо замовлення 24/7.',
    why_we_title: 'Чому обирають нас?',
    why_we_text: 'Ми - це 15 років пасажирських перевезень по Україні і за кордон!'
  },
  ru: {
    tab_title: 'Заказать автобус',
    logo_title: 'Транспортная компания',
    promo_title: 'Пассажирские перевозки по Киеву и Украине',
    content_title: 'Что мы предлагаем?',
    l_s_title: 'Наша транспортная компания предоставляет логистические услуги:',
    l_s_item_1: 'трансферы в аэропорт, железнодорожный и автовокзалы',
    l_s_item_2: 'экскурсионные перевозки по Киеву и области',
    l_s_item_3: 'перевозки туристических групп по Киеву, Украине и СНГ',
    equipment_title: 'У нас комфортабельные автобусы VanHool Astron 916, Euro 5, производитель Бельгия.',
    equipment_list_title: 'Комплектация автобусов:',
    equipment_item_1: 'мест 54',
    equipment_item_2: 'климат-контроль',
    equipment_item_3: 'солнцезащитные стеклопакеты',
    equipment_item_4: 'комфортные сиденья с 2х уровневыми спинками предусмотренными для сна',
    equipment_item_5: 'WiFi в Украине и Европе',
    equipment_item_6: 'холодильник',
    equipment_item_7: 'кухня-бар с возможностью приготовления чая и кофе',
    equipment_item_8: 'розетки 220 V и USB зарядки индивидуально для каждого пассажира',
    equipment_item_9: 'WC',
    equipment_item_10: 'Водители: высококлассные, интеллигентные!',
    price_text: 'Услуги предоставляем физическим и юридическим лицам, наличная и безналичная форма оплаты, постоянным клиентам - дисконт 10%. <br> Стоимость: заказать автобус по Киеву 1 ч - 800 грн, по Украине 1 км - 25 грн. <br> Принимаем заказы 24/7.',
    why_we_title: 'Почему выбирают нас?',
    why_we_text: 'Мы - это 15 лет пассажирских перевозок по Украине и за границу!'
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const uaBtn = document.getElementById('uaBtn')
  const ruBtn = document.getElementById('ruBtn')
  uaBtn.addEventListener('click', toggleLanguage)
  ruBtn.addEventListener('click', toggleLanguage)
  const keys = Array.from(document.getElementsByClassName('lang'))
  function toggleLanguage(event) {
    event.target.classList.add('active_language')
    let toLang;
    if (event.target.getAttribute('id') === 'uaBtn') {
      toLang = 'ua'
      ruBtn.classList.remove('active_language')
    } else {
      toLang = 'ru'
      uaBtn.classList.remove('active_language')
    }
    keys.forEach(el => {
      if (el.getAttribute('key') === 'price_text') {
        const translation = lang[toLang][`${el.getAttribute('key')}`]
        el.innerHTML = translation
      } else {
        el.innerText = lang[toLang][`${el.getAttribute('key')}`]
      }
    })
  }
});
