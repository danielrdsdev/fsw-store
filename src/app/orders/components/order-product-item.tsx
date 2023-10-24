import { computeProductTotalPrice } from '@/helpers/product'
import { Prisma } from '@prisma/client'
import Image from 'next/image'

type OrderProductItemProps = {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true
    }
  }>
}

export const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product)
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[77px] h-[77px] flex items-center justify-center rounded-lg bg-muted">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          fill
          className="object-contain p-3"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[10px] bg-muted rounded-md px-4 py-0.5 w-max">
          Vendido e entregue por:{' '}
          <span className="font-semibold">FSW Store</span>
        </p>

        <div className="space-y-0.5">
          <p className="text-xs">{orderProduct.product.name}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="text-sm font-bold">
                R$ {productWithTotalPrice.totalPrice.toFixed(2)}
              </p>

              {productWithTotalPrice.discountPercentage > 0 && (
                <p className="text-xs line-through text-muted-foreground">
                  R$ {Number(productWithTotalPrice.totalPrice.toFixed(2))}
                </p>
              )}
            </div>

            <p className="text-xs text-muted-foreground">
              Qtd: {orderProduct.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
