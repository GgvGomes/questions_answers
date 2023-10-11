-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "transmitter" TEXT,
    "reciver" INTEGER NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Recivers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
