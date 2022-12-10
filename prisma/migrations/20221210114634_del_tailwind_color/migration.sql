/*
  Warnings:

  - You are about to drop the column `tailwindColor` on the `product_details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `shippedDate` DATETIME(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP + INTERVAL 3 DAY);

-- AlterTable
ALTER TABLE `product_details` DROP COLUMN `tailwindColor`;
