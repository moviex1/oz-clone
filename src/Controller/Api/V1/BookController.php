<?php

namespace App\Controller\Api\V1;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/book')]
class BookController extends AbstractController
{
    #[Route('/', name: 'app_book')]
    public function index(BookRepository $bookRepository, Request $request): JsonResponse
    {
        $page = max(1, $request->query->get('page', 1));
        $limit = max(1, $request->query->get('limit', 10));

        $books = $bookRepository->findBooks($page, $limit);

        return $this->json($books);
    }

    #[Route('/{id}')]
    public function getBookById(int $id, BookRepository $bookRepository)
    {
        return $this->json($bookRepository->find($id));
    }

    #[Route('/category/{categoryId}')]
    public function getBookByCategoryId(int $categoryId, BookRepository $bookRepository): JsonResponse
    {
        $books = $bookRepository->findBooksByCategoryId($categoryId);

        return $this->json($books);
    }

    #[Route('/title')]
    public function getBooksByTitle(BookRepository $bookRepository, Request $request): JsonResponse
    {
        $title = $request->query->get('title');

        if (!$title) {
            return $this->json([
                'message' => 'You should pass title as query parameter'
            ], Response::HTTP_BAD_REQUEST);
        }
        $books = $bookRepository->findBooksByTitle($title);

        return $this->json($books);
    }

    #[Route('/author/{authorId}')]
    public function getBooksByAuthorId(int $authorId, BookRepository $bookRepository): JsonResponse
    {
        $books = $bookRepository->findBooksByAuthorId($authorId);

        return $this->json($books);
    }
}
