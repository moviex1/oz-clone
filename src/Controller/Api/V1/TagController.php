<?php

namespace App\Controller\Api\V1;

use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TagController extends AbstractController
{
    #[Route('/tag', name: 'app_tag')]
    public function index(?string $tagRepository): JsonResponse
    {
//        $tags = $tagRepository->findAll();
        dd($tagRepository);
        return $this->json($tags);
    }
}
