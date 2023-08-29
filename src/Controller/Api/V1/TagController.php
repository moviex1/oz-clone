<?php

namespace App\Controller\Api\V1;

use App\Repository\TagRepository;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TagController extends AbstractController
{
    #[Route('/tag', name: 'app_tag')]
    #[View]
    public function index(TagRepository $tagRepository): array
    {
        return $tagRepository->findAll();
    }
}
