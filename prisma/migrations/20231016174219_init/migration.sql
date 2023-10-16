-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transmitter" TEXT,
    "reciverId" TEXT NOT NULL,
    CONSTRAINT "Questions_reciverId_fkey" FOREIGN KEY ("reciverId") REFERENCES "Recivers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recivers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
