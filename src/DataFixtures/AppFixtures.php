<?php

namespace App\DataFixtures;

use App\Entity\Tag;
use App\Factory\AuthorFactory;
use App\Factory\BookFactory;
use App\Factory\TagFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $tags = [
            'Художественная литература', 'Комиксы, манга, артбуки', 'Нехудожественная литература',
            'Детская литература', 'Бизнес-литература', 'Учебная литература', 'Инностранная литература'
        ];

        foreach ($tags as $tagName) {
            $tag = new Tag();
            $tag->setName($tagName);
            $manager->persist($tag);
        }

        $manager->flush();

        AuthorFactory::createMany(10);

        BookFactory::new()
            ->many(50)
            ->create(function () {
                return [
                    'tags' => TagFactory::randomRange(1, 3),
                    'authors' => AuthorFactory::randomRange(1, 2)
                ];
            });
    }
}
