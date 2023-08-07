<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Factory\AuthorFactory;
use App\Factory\BookFactory;
use App\Factory\CategoryFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $categories = [
            'Художественная литература', 'Комиксы, манга, артбуки', 'Нехудожественная литература',
            'Детская литература', 'Бизнес-литература', 'Учебная литература', 'Инностранная литература'
        ];

        foreach ($categories as $categoryName) {
            $category = new Category();
            $category->setName($categoryName);
            $manager->persist($category);
        }

        $manager->flush();

        AuthorFactory::createMany(10);

        BookFactory::new()
            ->many(50)
            ->create(function () {
                return [
                    'categories' => CategoryFactory::randomRange(1, 1),
                    'authors' => AuthorFactory::randomRange(1, 2)
                ];
            });
    }
}
