<?php

namespace App\Response;

use App\Entity\User;

class UserResponse
{
    readonly public string $email;
    readonly public array $roles;

    public function __construct(User $user)
    {
        $this->email = $user->getEmail();
        $this->roles = $user->getRoles();
    }
}