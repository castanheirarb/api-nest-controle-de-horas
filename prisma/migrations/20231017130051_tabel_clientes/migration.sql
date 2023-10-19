-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` INTEGER NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `telefone` INTEGER NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Clientes_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
