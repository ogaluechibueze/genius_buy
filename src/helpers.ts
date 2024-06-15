import { IBreadcrumbItem, IItem, NavItem } from './model';

export const navItems: NavItem[] = [
  {
    label: 'ALL PRODUCTS',
    href: '/products',
  },
  {
    label: 'TOP SHOPS',
    href: '/categories',
  },
];

export const defaultBreadcrumbItems: IBreadcrumbItem[] = [
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Top Shops',
    link: '/categories',
  },
  ];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text?.length > substringEnd
    ? `${text?.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatNumber = (inputNumber: any) => {
  let formetedNumber=(Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  let splitArray=formetedNumber.split('.');
  if(splitArray.length>1){
    formetedNumber=splitArray[0];
  }
  return(formetedNumber);
};