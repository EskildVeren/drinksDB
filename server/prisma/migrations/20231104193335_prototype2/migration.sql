/*
  Warnings:

  - You are about to drop the column `quantity` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `Measure` table. All the data in the column will be lost.
  - Added the required column `measure` to the `Measure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "quantity",
DROP COLUMN "unit",
ADD COLUMN     "measure" TEXT NOT NULL;
