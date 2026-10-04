export type CategoryType = 
  | 'all'
  | 'national'
  | 'hot'
  | 'grill'
  | 'bakery'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  nameKz?: string;
  description: string;
  price: number;
  category: CategoryType;
  image: string;
  portion: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export type OrderType = 'delivery' | 'takeaway' | 'table';

export interface OrderDetails {
  customerName?: string;
  customerPhone?: string;
  address?: string;
  orderType: OrderType;
  comment?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}
