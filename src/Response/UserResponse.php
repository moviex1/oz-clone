<?php

namespace App\Response;

use App\Entity\User;
use JMS\Serializer\Annotation\Groups;

class UserResponse extends AbstractApiResponse
{

    #[Groups(['user'])]
    readonly public string $email;

    #[Groups(['admin', 'user'])]
    readonly public array $roles;

    public function __construct(User $user)
    {
        $this->email = $user->getEmail();
        $this->roles = $user->getRoles();
    }
}