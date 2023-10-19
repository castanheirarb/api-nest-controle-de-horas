/*
  Warnings:

  - Added the required column `valor` to the `Analistas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `analistas` ADD COLUMN `valor` INTEGER NOT NULL;
