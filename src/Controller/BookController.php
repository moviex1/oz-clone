<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    #[Route('/book', name: 'app_book')]
    public function index(BookRepository $bookRepository): JsonResponse
    {

        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/BookController.php',
        ]);
    }
}
