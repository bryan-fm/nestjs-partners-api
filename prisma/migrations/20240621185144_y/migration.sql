/*
  Warnings:

  - You are about to drop the column `ticket` on the `ReservationHistory` table. All the data in the column will be lost.
  - Added the required column `ticketKind` to the `ReservationHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ReservationHistory` DROP COLUMN `ticket`,
    ADD COLUMN `ticketKind` ENUM('full', 'half') NOT NULL;
