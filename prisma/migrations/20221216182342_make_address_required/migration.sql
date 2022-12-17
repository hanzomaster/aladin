/*
  Warnings:

  - Made the column `district` on table `addresses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ward` on table `addresses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `detail` on table `addresses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `addresses` MODIFY `district` VARCHAR(50) NOT NULL,
    MODIFY `ward` VARCHAR(50) NOT NULL,
    MODIFY `detail` TEXT NOT NULL;
