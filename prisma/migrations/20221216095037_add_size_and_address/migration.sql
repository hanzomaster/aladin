/*
  Warnings:

  - Added the required column `size` to the `orderdetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderdetails` ADD COLUMN `size` ENUM('S', 'M', 'L', 'XL', 'XXl') NOT NULL;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `address` TEXT NOT NULL;
