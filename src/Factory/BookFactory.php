<?php

namespace App\Factory;

use App\Entity\Book;
use App\Enum\CoverTypeEnum;
use App\Enum\LanguagesEnum;
use App\Repository\BookRepository;
use App\Repository\TagRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Book>
 *
 * @method        Book|Proxy                     create(array|callable $attributes = [])
 * @method static Book|Proxy                     createOne(array $attributes = [])
 * @method static Book|Proxy                     find(object|array|mixed $criteria)
 * @method static Book|Proxy                     findOrCreate(array $attributes)
 * @method static Book|Proxy                     first(string $sortedField = 'id')
 * @method static Book|Proxy                     last(string $sortedField = 'id')
 * @method static Book|Proxy                     random(array $attributes = [])
 * @method static Book|Proxy                     randomOrCreate(array $attributes = [])
 * @method static BookRepository|RepositoryProxy repository()
 * @method static Book[]|Proxy[]                 all()
 * @method static Book[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Book[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Book[]|Proxy[]                 findBy(array $attributes)
 * @method static Book[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Book[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class BookFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        $randLangInd = rand(0,count(LanguagesEnum::cases()) - 1);
        $randCoverInd = rand(0, count(CoverTypeEnum::cases()) - 1);
        return [
            'pages' => rand(120, 3000),
            'description' => self::faker()->text(),
            'release_date' => self::faker()->dateTimeBetween('-50 years'),
            'title' => self::faker()->sentence(rand(1,3)),
            'price' => self::faker()->randomFloat(2, 1, 80),
            'weight' => rand(150, 1000),
            'language' => LanguagesEnum::cases()[$randLangInd]->value,
            'cover' => CoverTypeEnum::cases()[$randCoverInd]->value
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Book $book): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Book::class;
    }
}
