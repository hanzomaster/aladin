-- CreateTable
CREATE TABLE `color` (
    `code` CHAR(6) NOT NULL,
    `colorLine` ENUM('WHITE', 'BLACK', 'GRAY', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'SKY', 'BLUE', 'INDIGO', 'VIOLET', 'PURPLE', 'PINK', 'ROSE') NOT NULL,
    `colorName` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_in_stock` (
    `quantity` INTEGER NOT NULL,
    `size` ENUM('S', 'M', 'L', 'XL', 'XXl') NOT NULL,
    `productDetailId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`productDetailId`, `size`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `buyPrice` DECIMAL(10, 2) NOT NULL,
    `productLine` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_details` (
    `id` VARCHAR(191) NOT NULL,
    `image` TEXT NOT NULL,
    `productCode` VARCHAR(191) NOT NULL,
    `colorCode` CHAR(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productlines` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `gender` ENUM('M', 'F') NOT NULL,
    `textDescription` TEXT NULL,
    `htmlDescription` TEXT NULL,

    UNIQUE INDEX `productlines_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `orderNumber` VARCHAR(191) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `requiredDate` DATETIME(3) NOT NULL,
    `shippedDate` DATETIME(3) NOT NULL,
    `status` ENUM('InProcess', 'Shipped', 'Cancelled') NOT NULL,
    `comments` TEXT NULL,
    `customerNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderdetails` (
    `orderNumber` VARCHAR(191) NOT NULL,
    `productDetailId` VARCHAR(191) NOT NULL,
    `quantityInOrderd` INTEGER NOT NULL,
    `priceEach` DECIMAL(10, 2) NOT NULL,
    `orderLineNumber` SMALLINT NULL,

    PRIMARY KEY (`orderNumber`, `productDetailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cart_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart_item` (
    `productDetailId` VARCHAR(191) NOT NULL,
    `cartId` VARCHAR(191) NOT NULL,
    `numberOfItems` INTEGER NOT NULL,

    PRIMARY KEY (`productDetailId`, `cartId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(50) NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `address1` VARCHAR(50) NOT NULL,
    `address2` VARCHAR(50) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `state` VARCHAR(50) NULL,
    `postalCode` VARCHAR(15) NULL,
    `country` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
