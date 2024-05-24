type TVarient = {
  type: string;
  value: string;
};
type TInventory = {
  quantity: number;
  inStock: boolean;
};

export interface TProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: [string];
  variants: [TVarient];
  inventory: TInventory;
}
