<?php

namespace App\Controller\Api\V1;

use App\Entity\Author;
use App\Repository\AuthorRepository;
use App\Response\AuthorResponse;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/author')]
class AuthorController extends AbstractController
{
    #[Route('/', name: 'app_author')]
    #[View]
    public function index(AuthorRepository $authorRepository): array
    {
        $result = [];
        $authors = $authorRepository->findAll();
        foreach($authors as $author) {
            $result[] = new AuthorResponse($author);
        }
        return $result;
    }

    #[Route('/{id}')]
    #[View]
    public function getAuthorById(?Author $author): AuthorResponse|JsonResponse
    {

        if (!$author) {
            return $this->json([
                'message' => 'Автора с таким id не найден'
            ], Response::HTTP_NOT_FOUND);
        }

        return new AuthorResponse($author);
    }
}
