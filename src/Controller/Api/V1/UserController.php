<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Request\UserCredentialsRequest;
use App\Response\UserResponse;
use FOS\RestBundle\Controller\Annotations\View;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    #[Route('/register', name: 'app_user', methods: ['POST'])]
    #[View]
    #[ParamConverter('user', options: ['inputGroups' => 'user'], converter: 'request_body')]
    public function index(
        UserCredentialsRequest $user,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository,
        ValidatorInterface $validator,
    ): UserResponse|Response
    {
        $errors = $validator->validate($user);
        if($userRepository->findBy(['email' => $user->email])) {
            $errors->add(new ConstraintViolation(
                message: 'User with this email already exists',
                messageTemplate: 'User with this email already exists',
                parameters: [
                    '{{ value }}' => $user->email
                ],
                root: '',
                propertyPath: 'email',
                invalidValue: $user->email
            ));
        }

        if (count($errors) > 0) {
            return $this->json($errors, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->createUser(
            passwordHasher: $passwordHasher,
            email: $user->email,
            password: $user->password,
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
