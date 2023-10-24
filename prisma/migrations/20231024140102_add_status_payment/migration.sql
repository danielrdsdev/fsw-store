/*
  Warnings:

  - The values [WAINTING_FOR_PAYMENT] on the enum `OderStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OderStatus_new" AS ENUM ('WAITING_FOR_PAYMENT', 'PAYMENT_CONFIRMED');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OderStatus_new" USING ("status"::text::"OderStatus_new");
ALTER TYPE "OderStatus" RENAME TO "OderStatus_old";
ALTER TYPE "OderStatus_new" RENAME TO "OderStatus";
DROP TYPE "OderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'WAITING_FOR_PAYMENT';
COMMIT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'WAITING_FOR_PAYMENT';
