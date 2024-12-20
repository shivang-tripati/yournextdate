/*
  Warnings:

  - You are about to drop the column `option` on the `Option` table. All the data in the column will be lost.
  - Added the required column `optionText` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "option",
ADD COLUMN     "optionText" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "name" TEXT;
