<?php

namespace App\Controller\Api\V1;

use App\Dto\ReviewBodyDto;
use App\Entity\User;
use App\Repository\BookRepository;
use App\Repository\ReviewRepository;
use App\Service\ReviewService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/review')]
class ReviewController extends AbstractController
{
    #[ParamConverter('review', options: ['inputGroups' => 'default'], converter: 'request_body')]
    #[Route('', methods: ['POST'], )]
    public function addReview (
        #[CurrentUser] ?User $user,
        ReviewBodyDto $review,
        ReviewService $reviewService,
    ) : Response
    {
        if ($user === null) {
            return new JsonResponse([
                'message' => 'User is unauthorized'
            ], Response::HTTP_UNAUTHORIZED);
        }
        $reviewService->leaveReview($user, $review);

        return new Response('OK');
    }
}