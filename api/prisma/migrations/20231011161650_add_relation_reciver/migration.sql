/*
  Warnings:

  - You are about to drop the column `reciver` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `reciverId` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transmitter" TEXT,
    "reciverId" TEXT NOT NULL,
    CONSTRAINT "Questions_reciverId_fkey" FOREIGN KEY ("reciverId") REFERENCES "Recivers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Questions" ("data", "id", "question", "transmitter", "viewed") SELECT "data", "id", "question", "transmitter", "viewed" FROM "Questions";
DROP TABLE "Questions";
ALTER TABLE "new_Questions" RENAME TO "Questions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
