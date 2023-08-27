<?php

namespace App\Response;


use App\Entity\Author;

class AuthorResponse
{
    public ?int $id = null;
    public ?string $fullName = null;
    public ?\DateTimeInterface $birthDate = null;
    public ?string $pfpUrl = null;

    public function __construct(Author $author)
    {
        $this->id = $author->getId();
        $this->fullName = $author->getFirstName() . ' ' . $author->getLastName();
        $this->birthDate = $author->getBirthDate();
        $this->pfpUrl = $author->getPfpUrl();
    }
}