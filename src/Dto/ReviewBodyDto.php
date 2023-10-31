<?php

namespace App\Dto;

use App\Entity\Book;
use App\Enum\RateEnum;
use App\Response\BookResponse;
use JMS\Serializer\Annotation\Groups;

class ReviewBodyDto
{

    #[Groups(['default'])]
    public int $rate;
    #[Groups(['default'])]
    public string $header;
    #[Groups(['default'])]
    public string $comment;
    #[Groups(['default'])]
    public int $bookId;
}