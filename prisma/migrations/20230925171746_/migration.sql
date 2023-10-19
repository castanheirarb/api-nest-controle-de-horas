-- CreateTable
CREATE TABLE `Analistas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cpf` INTEGER NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `peso_acesso` INTEGER NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `telefone` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
