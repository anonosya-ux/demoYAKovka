export const navigationLinks = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "О курорте",
    href: "/about",
  },
  {
    label: "Номера и цены",
    href: "/rooms",
    subLinks: [
      { label: "Стандарт", href: "/rooms/standard" },
      { label: "Стандарт Плюс", href: "/rooms/standard-plus" },
      { label: "Семейный", href: "/rooms/family" },
      { label: "Семейный Плюс", href: "/rooms/family-plus" },
      { label: "Коттедж", href: "/rooms/cottage" },
    ]
  },
  {
    label: "Горнолыжный сезон",
    href: "/ski-season",
  },
  {
    label: "Услуги и мероприятия",
    href: "#",
    subLinks: [
      { label: "Проведение мероприятий", href: "/events" },
      { label: "Спецпредложения", href: "/specials" },
      { label: "Доп. услуги", href: "/services" },
    ]
  },
  {
    label: "Фотогалерея",
    href: "/gallery",
  },
  {
    label: "Контакты",
    href: "/contacts",
  }
];

export const footerLinks = {
  legal: [
    { label: "Правила проживания", href: "/rules" },
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Способы оплаты", href: "/payment" },
    { label: "Публичная оферта", href: "/offer" },
  ],
  projects: [
    { label: "Инвестиционный проект Yakovka Land", href: "/yakovka-land" },
  ]
}
