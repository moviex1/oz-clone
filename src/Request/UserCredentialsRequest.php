<?php

namespace App\Request;

use JMS\Serializer\Annotation\Groups;

class UserCredentialsRequest
{
    #[Groups(['user'])]
    public string $email;

    #[Groups(['user'])]
    public string $password;
    #[Groups(['user'])]
    public string $slug;
    #[Groups(['admin', 'user'])]
    public string $additionalInfo;

}