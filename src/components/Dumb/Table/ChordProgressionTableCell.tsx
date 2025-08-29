import { useChordProgressionByIds } from "@/hooks/useChordProgressions";
import { TableCell } from "@/components/ui/table";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ChordProgressionTableCell = ({ ids }: { ids: string[] }) => {
  const { chordProgressions } = useChordProgressionByIds(ids);
  console.log(chordProgressions);
  return (
    <TableCell>
      <Suspense fallback={<Skeleton />}>
        {chordProgressions.success &&
          chordProgressions.value
            .map((progression) => progression.numerals)
            .join(", ")}
      </Suspense>
    </TableCell>
  );
};
