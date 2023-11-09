import { ServiceProps } from "@/app/types";
import { SpecialistProps } from "@/app/types";
export const mock_api = {
  getServiceInfo():ServiceProps[] {
    return [
      {
        image: '/svg/tool.svg',
        title: 'лучшие специалисты',
        paragraph:
          'Вам нужно только выбрать специалиста который устраивает вас по цене и срокам сборки.',
      },
      {
        image: '/svg/money.svg',
        title: 'Цены ниже на 10-30%',
        paragraph:
          'Заказывая оборудование у нас, цена за готовый комплект оборудования + установку будет наиже рыночной в среднем на 20 %.',
      },
      {
        image: '/svg/calendar.svg',
        title: 'экономим ваше время',
        paragraph:
          'При затрате 5 минут вашего времени вы получаете лучшие предложения от квалифицированых специалистов. ',
      },
      {
        image: '/svg/questions.svg',
        title: 'Помощь с выбором',
        paragraph:
          'Поможем с выбором оборудования, объективно подберём лучшего специалиста и оборудование.',
      },
    ];
  },
  getSpecialist():SpecialistProps[] {
    return [
      {
        title: '125',
        paragraph: 'Компаний ',
      },
      {
        title: '73',
        paragraph: 'Крупных проектов',
      },
      {
        title: '120',
        paragraph: 'Завершенных проектов',
      },
    ];
  },
};
