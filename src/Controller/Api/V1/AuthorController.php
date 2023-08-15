<?php

namespace App\Controller\Api\V1;

use App\Repository\AuthorRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/author')]
class AuthorController extends AbstractController
{
    #[Route('/', name: 'app_author')]
    public function index(AuthorRepository $authorRepository): JsonResponse
    {
        $authors = $authorRepository->findAll();

        return $this->json($authors);
    }

    public function getAuthorById(int $id, AuthorRepository $authorRepository): JsonResponse
    {
        $author = $authorRepository->find($id);

        if (!$author) {
            return $this->json([
                'message' => 'Автора с таким id не найден'
            ], Response::HTTP_NOT_FOUND);
        }

        return $this->json($author);
    }
}
