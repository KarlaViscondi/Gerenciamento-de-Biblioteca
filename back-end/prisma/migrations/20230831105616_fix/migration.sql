/*
  Warnings:

  - The primary key for the `Operation` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_pkey",
ADD CONSTRAINT "Operation_pkey" PRIMARY KEY ("bookCode", "studentCPF", "createdAt", "type");
