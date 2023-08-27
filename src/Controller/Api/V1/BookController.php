<?php

namespace App\Controller\Api\V1;

use App\Repository\BookRepository;
use App\Response\BookResponse;
use FOS\RestBundle\Controller\Annotations\QueryParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Request\ParamFetcher;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/book')]
class BookController extends AbstractController
{
    #[Route('/', name: 'app_book')]
    #[QueryParam(name: 'page', requirements: '\d+', default: '1')]
    #[QueryParam(name: 'limit', requirements: '\d+', default: '10')]
    #[View]
    public function index(BookRepository $bookRepository, ParamFetcher $paramFetcher): array
    {
        $page = $paramFetcher->get('page');
        $limit = $paramFetcher->get('limit');

        $books = $bookRepository->findBooks($page, $limit);
        $result = [];
        foreach ($books as $book) {
            $result[] = new BookResponse($book);
        }

        return $result;

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
