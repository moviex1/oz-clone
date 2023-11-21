<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230811214858 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE books_photos (book_id INT NOT NULL, photo_id INT NOT NULL, INDEX IDX_CCBC58D516A2B381 (book_id), INDEX IDX_CCBC58D57E9E4C8C (photo_id), PRIMARY KEY(book_id, photo_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo (id INT AUTO_INCREMENT NOT NULL, url VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE books_photos ADD CONSTRAINT FK_CCBC58D516A2B381 FOREIGN KEY (book_id) REFERENCES book (id)');
        $this->addSql('ALTER TABLE books_photos ADD CONSTRAINT FK_CCBC58D57E9E4C8C FOREIGN KEY (photo_id) REFERENCES photo (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE books_photos DROP FOREIGN KEY FK_CCBC58D516A2B381');
        $this->addSql('ALTER TABLE books_photos DROP FOREIGN KEY FK_CCBC58D57E9E4C8C');
        $this->addSql('DROP TABLE books_photos');
        $this->addSql('DROP TABLE photo');
    }
}
