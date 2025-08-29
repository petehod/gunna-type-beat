"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { generateProgressionsInAllKeys } from "@/services/chord-progressions";
import {
  formatChordProgression,
  formatMajorMinor,
} from "@/utils/chord-progression.utils";
import { ChordProgression } from "@/validators/chordProgression.validator";

type Props = ChordProgression & {
  selectedKey?: string;
};

export default function CPInEveryKeyTable({
  selectedKey,
  ...chordProgression
}: Props) {
  const chords = generateProgressionsInAllKeys(chordProgression);

  console.log("selectedKey", selectedKey);
  return (
    <Table className="w-full">
      <TableCaption>{chordProgression.numerals} In Every Key</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[140px]">Key</TableHead>
          <TableHead>Chords</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-full text-md">
        {chords.map((chord) => {
          const isSelectedKey =
            chord.key.toLocaleLowerCase() ===
            selectedKey?.split(" ")[0]?.toLocaleLowerCase();
          return (
            <TableRow
              key={chord.key}
              className={cn(isSelectedKey ? "bg-primary" : "")}
            >
              <TableCell>
                {chord.key} {formatMajorMinor(chordProgression.is_major)}
              </TableCell>
              <TableCell>
                {formatChordProgression(chord.numerals.join(","))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
