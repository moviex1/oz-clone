<?php

namespace App\Response;

abstract class AbstractApiResponse
{
    static function collection(array $entities): array
    {
        $result = [];
        foreach ($entities as $entity) {
            $result[] = new static($entity);
        }

        return $result;
    }
}