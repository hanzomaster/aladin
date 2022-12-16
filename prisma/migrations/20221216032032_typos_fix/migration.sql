/*
  Warnings:

  - You are about to drop the column `quantityInOrderd` on the `orderdetails` table. All the data in the column will be lost.
  - Added the required column `quantityInOrdered` to the `orderdetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderdetails` DROP COLUMN `quantityInOrderd`,
    ADD COLUMN `quantityInOrdered` INTEGER NOT NULL;
