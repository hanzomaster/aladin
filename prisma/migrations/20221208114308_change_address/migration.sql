/*
  Warnings:

  - You are about to drop the column `address1` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `address2` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `addresses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `addresses` DROP COLUMN `address1`,
    DROP COLUMN `address2`,
    DROP COLUMN `country`,
    DROP COLUMN `postalCode`,
    DROP COLUMN `state`,
    ADD COLUMN `detail` TEXT NULL,
    ADD COLUMN `district` VARCHAR(50) NULL,
    ADD COLUMN `ward` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `orders` MODIFY `shippedDate` DATETIME(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP + INTERVAL 3 DAY),
    MODIFY `status` ENUM('InProcess', 'Shipped', 'Cancelled') NOT NULL DEFAULT 'InProcess';
