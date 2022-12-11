/*
  Warnings:

  - Added the required column `size` to the `cart_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart_item` ADD COLUMN `size` ENUM('S', 'M', 'L', 'XL', 'XXl') NOT NULL;

-- AlterTable
ALTER TABLE `comments` MODIFY `rating` INTEGER NULL;
