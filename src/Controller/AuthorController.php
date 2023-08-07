<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AuthorController extends AbstractController
{
    #[Route('/author', name: 'app_author')]
    public function index(): JsonResponse
    {


        return $this->json([
        ]);
    }
}
