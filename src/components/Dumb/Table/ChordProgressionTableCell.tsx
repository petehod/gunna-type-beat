import { useChordProgressionByIds } from "@/hooks/useChordProgressions";
import { TableCell } from "@/components/ui/table";

export const ChordProgressionTableCell = ({ ids }: { ids: string[] }) => {
  const progressions = useChordProgressionByIds(ids);
  if (!progressions?.success) return <TableCell>Error</TableCell>;
  return (
    <TableCell>
      {progressions.value.map((progression) => progression.numerals).join(", ")}
    </TableCell>
  );
};
