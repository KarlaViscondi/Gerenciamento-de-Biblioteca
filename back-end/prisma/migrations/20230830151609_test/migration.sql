-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'BORROWED');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('RESERVE', 'LOAN');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'EMPLOYEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "StreetType" AS ENUM ('AEROPORTO', 'ALAMEDA', 'AREA', 'AVENIDA', 'CAMPO', 'CHACARA', 'COLONIA', 'CONDOMINIO', 'CONJUNTO', 'DISTRITO', 'ESPLANADA', 'ESTACAO', 'ESTRADA', 'FAVELA', 'FAZENDA', 'FEIRA', 'JARDIM', 'LADEIRA', 'LAGO', 'LAGOA', 'LARGO', 'LOTEAMENTO', 'MORRO', 'NUCLEO', 'PARQUE', 'PASSARELA', 'PATIO', 'PRACA', 'QUADRA', 'RECANTO', 'RESIDENCIAL', 'RODOVIA', 'RUA', 'SETOR', 'SITIO', 'TRAVESSA', 'TRECHO', 'TREVO', 'VALE', 'VEREDA', 'VIA', 'VIADUTO', 'VIELA', 'VILA');

-- CreateTable
CREATE TABLE "books" (
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "belongs_to" TEXT NOT NULL,
    "status" "BookStatus" NOT NULL,
    "created_by" TEXT NOT NULL,
    "operationId" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedDate" TIMESTAMP(3) NOT NULL DEFAULT (now() + (if(type === 'RESERVE') '1 day'::interval else '14 days'::interval)),
    "finalDate" TIMESTAMP(3),
    "createdBy" TEXT,
    "type" "OperationType" NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "street_name" TEXT NOT NULL,
    "street_type" "StreetType" NOT NULL,
    "house_number" TEXT NOT NULL,
    "complements" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "cpf_created_by" TEXT,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',

    CONSTRAINT "users_pkey" PRIMARY KEY ("cpf")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_created_by_key" ON "books"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_createdBy_key" ON "Operation"("createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_created_by_key" ON "users"("cpf_created_by");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "Operation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("cpf") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cpf_created_by_fkey" FOREIGN KEY ("cpf_created_by") REFERENCES "users"("cpf") ON DELETE SET NULL ON UPDATE CASCADE;
