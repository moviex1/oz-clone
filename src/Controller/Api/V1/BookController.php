<?php

namespace App\Controller\Api\V1;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/book')]
class BookController extends AbstractController
{
    #[Route('/', name: 'app_book')]
    public function index(BookRepository $bookRepository, Request $request): JsonResponse
    {
        $page = max(1, $request->query->get('page', 1));
        $limit = max(1, $request->query->get('limit', 10));


        $books = $bookRepository->getAllBooks($page, $limit);

        return $this->json($books);
    }

    #[Route('/category/{categoryId}')]
    public function getBookByCategory(int $categoryId, BookRepository $bookRepository): JsonResponse
    {
        $books = $bookRepository->findBooksByCategoryId($categoryId);

        return $this->json($books);
    }
}
