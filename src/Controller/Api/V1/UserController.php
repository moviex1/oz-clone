<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Response\UserResponse;
use FOS\RestBundle\Controller\Annotations\View;
use JMS\Serializer\SerializerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    #[Route('/register', name: 'app_user', methods: ['POST'])]
    #[View]
    #[ParamConverter('user', converter: 'request_body')]
    public function index(
        User $user,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository,
        ValidatorInterface $validator,
        SerializerInterface $serializer
    ): UserResponse|JsonResponse
    {
        $errors = $validator->validate($user);
        if (count($errors) > 0) {
            return $this->json($errors, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->createUser(
            passwordHasher: $passwordHasher,
            email: $user->getEmail(),
            password: $user->getPassword(),
        );

        return new UserResponse($user);
    }

    #[Route('/login', name: 'login')]
    #[View]
    public function login(#[CurrentUser] ?User $user): UserResponse|JsonResponse
    {
        if ($user === null) {
           return $this->json([
               'message' => 'Invalid credentials'
           ], Response::HTTP_BAD_REQUEST);
        }

        return new UserResponse($user);
    }
}
