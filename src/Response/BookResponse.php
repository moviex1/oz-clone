<?php

namespace App\Response;

use App\Entity\Book;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class BookResponse extends AbstractApiResponse
{
    public ?int $id;
    public ?string $title;
    public ?\DateTimeInterface $releaseDate = null;
    public ?int $pages = null;
    public ?string $description = null;
    public Collection $authors;
    public Collection $tags;
    public Collection $photos;
    public Collection $reviews;
    public ?string $price = null;

    public function __construct(Book $book)
    {
        $this->id = $book->getId();
        $this->title = $book->getTitle();
        $this->releaseDate = $book->getReleaseDate();
        $this->pages = $book->getPages();
        $this->description = $book->getDescription();
        $this->authors = new ArrayCollection();
        foreach ($book->getAuthors() as $author) {
            $this->authors->add(new AuthorResponse($author));
        }
        $this->photos = $book->getPhotos();
        $this->tags = $book->getTags();
        $this->reviews = $book->getReviews();
        $this->price = $book->getPrice();
    }
}