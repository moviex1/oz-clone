<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231005201618 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE sale (id INT AUTO_INCREMENT NOT NULL, book_id INT NOT NULL, date DATETIME NOT NULL, price NUMERIC(10, 2) NOT NULL, INDEX IDX_E54BC00571868B2E (book_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE sale ADD CONSTRAINT FK_E54BC00571868B2E FOREIGN KEY (book_id) REFERENCES book (id)');
        $this->addSql('ALTER TABLE book ADD weight INT NOT NULL, ADD language VARCHAR(100) NOT NULL, ADD cover VARCHAR(100) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sale DROP FOREIGN KEY FK_E54BC00571868B2E');
        $this->addSql('DROP TABLE sale');
        $this->addSql('ALTER TABLE book DROP weight, DROP language, DROP cover');
    }
}
