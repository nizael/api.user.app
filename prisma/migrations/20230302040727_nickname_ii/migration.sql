/*
  Warnings:

  - You are about to drop the column `nikname` on the `Users` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "nikname",
ADD COLUMN     "nickname" TEXT NOT NULL;
