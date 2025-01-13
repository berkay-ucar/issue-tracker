/*
  Warnings:

  - The values [UNDEFINED] on the enum `Issue_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED', 'ALL') NOT NULL DEFAULT 'OPEN';
