import { formatCurrency } from '../../utils/formatters';

interface ProductPriceProps {
  price: number;
  className?: string;
}

export function ProductPrice({ price, className = '' }: ProductPriceProps) {
  return <span className={className}>{formatCurrency(price)}</span>;
}