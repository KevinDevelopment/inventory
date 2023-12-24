-- CreateTable
CREATE TABLE `Inventory` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `serial_number` VARCHAR(191) NOT NULL,
    `technical_specifications` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Inventory_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
