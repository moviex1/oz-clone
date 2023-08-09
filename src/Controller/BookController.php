<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    #[Route('/api/v1/book/{page}', name: 'app_book', defaults: ['page' => 0])]
    public function index(BookRepository $bookRepository, int $page): JsonResponse
    {
        $books = $bookRepository->getAllBooks($page);
        return $this->json($books);
    }
}
