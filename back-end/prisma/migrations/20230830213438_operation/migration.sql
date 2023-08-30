/*
  Warnings:

  - The primary key for the `Operation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Operation` table. All the data in the column will be lost.
  - Added the required column `bookCode` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentCPF` to the `Operation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_pkey",
DROP COLUMN "id",
ADD COLUMN     "bookCode" TEXT NOT NULL,
ADD COLUMN     "studentCPF" TEXT NOT NULL,
ADD CONSTRAINT "Operation_pkey" PRIMARY KEY ("bookCode", "studentCPF");

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_bookCode_fkey" FOREIGN KEY ("bookCode") REFERENCES "books"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_studentCPF_fkey" FOREIGN KEY ("studentCPF") REFERENCES "users"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
