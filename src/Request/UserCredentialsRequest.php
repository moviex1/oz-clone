<?php

namespace App\Request;

use JMS\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class UserCredentialsRequest
{
    #[Groups(['user'])]
    #[Assert\NotBlank(message: 'You didn\'t fill email field')]
    public ?string $email = null;

    #[Groups(['user'])]
    #[Assert\NotBlank(message: 'You didn\'t fill password field')]
    public ?string $password = null;
}