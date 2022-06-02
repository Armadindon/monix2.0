export type Member = {
  id: number;
  /** Donnée en Base64 */
  avatar: string;
  pseudo: string;
  balance: number;
};

export type Product = {
  id: number;
  /** Donnée en Base64 */
  image: string;
  name: string;
  price: number;
  stock: number;
};
