<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Response\UserResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class UserController extends AbstractController
{
    #[Route('/register', name: 'app_user', methods: ['POST'])]
    public function index(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository
    ): JsonResponse
    {
        $content = json_decode($request->getContent());
        $error = $this->validateRequest($content);
        if ($error) {
            return $this->json([
                'message' => $error
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->createUser(
            passwordHasher: $passwordHasher,
            email: $content->email,
            password: $content->password,
        );
        return $this->json(new UserResponse($user));
    }

    #[Route('/login', name: 'login')]
    public function login(#[CurrentUser] ?User $user)
    {
        if ($user === null) {
           return $this->json([
               'message' => 'Invalid credentials'
           ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(new UserResponse($user));
    }


    private function validateRequest(object $content): string|false
    {
        $error = [];
        switch (true) {
            case !property_exists($content, 'email'):
                $error[] = 'email';
            case !property_exists($content, 'password'):
                $error[] = 'пароль';
        }

        if (empty($error)) {
            return false;
        }

        return sprintf('Вы забыли ввести %s', implode(',', $error));
    }
}
