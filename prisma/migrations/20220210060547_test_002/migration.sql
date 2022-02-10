/*
  Warnings:

  - Added the required column `Level` to the `Hobby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hobby" ADD COLUMN     "Level" INTEGER NOT NULL;
