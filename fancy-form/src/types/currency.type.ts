export interface ICurrency {
  currency: string
  date: string
  price: number
}

export interface ICurrencyWithLogo extends ICurrency {
  logo: string
}
