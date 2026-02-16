import { Button } from './ui/button';

interface Props {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function Category({ selected, onSelect }: Props) {
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  return (
    <section className="w-full py-1">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = selected === cat;

            return (
              <Button
                key={cat}
                variant={isActive ? 'default' : 'outline'}
                onClick={() => onSelect(isActive ? null : cat)}
                className="rounded-full px-5 text-sm font-medium whitespace-nowrap"
              >
                {cat}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
