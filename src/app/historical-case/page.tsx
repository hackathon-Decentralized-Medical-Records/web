import { CardList } from "./card-list";

interface HistoricalCaseProps {
  searchParams: { name: string };
}

export default function HistoricalCase({ searchParams }: HistoricalCaseProps) {
  return (
    <div className="container">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Patient Name: {searchParams.name}
      </h2>

      <CardList />
    </div>
  );
}
