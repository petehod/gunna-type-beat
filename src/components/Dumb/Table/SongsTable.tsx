"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ROWS } from "./helpers";
import { useState } from "react";
import Link from "next/link";
import { Song } from "@/validators/song.validator";

import { useChordProgressionByIds } from "@/hooks/useChordProgressions";
import { formatChordProgression } from "@/utils/chord-progression.utils";
import SongsDialogContent from "@/components/Smart/SongsDialog/SongsDialogContent";

export default function SongsTable({ songs }: { songs: Song[] }) {
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[0] | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (song: (typeof songs)[0]) => {
    setSelectedSong(song);
    setIsDialogOpen(true);
  };

  const { chordProgressions } = useChordProgressionByIds(
    songs.flatMap((song) => song.progressionIds)
  );

  return (
    <>
      <Table className="overflow-scroll w-full">
        <TableCaption className="text-left lg:text-center">
          Click any row to see more details.
        </TableCaption>
        <TableHeader>
          <TableRow>
            {ROWS.map((header, index) => (
              <TableHead key={index} className={index === 0 ? "" : ""}>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((song) => (
            <TableRow
              key={song.id}
              className="cursor-pointer hover:opacity-90 transition-colors"
              onClick={() => handleRowClick(song)}
            >
              <TableCell className="font-medium">{song.name}</TableCell>
              <TableCell>{song.key}</TableCell>
              <TableCell>{song.tempo} BPM</TableCell>
              <TableCell>{formatChordProgression(song.chords)}</TableCell>
              <TableCell>
                {chordProgressions?.success &&
                  chordProgressions?.value
                    ?.find((progression) =>
                      song.progressionIds.includes(progression.id)
                    )
                    ?.numerals.split(",")
                    .map((numeral) => numeral.trim())
                    .join(", ")}
              </TableCell>
              <TableCell>
                <Link
                  href={song.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Watch
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total Songs: {songs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl overflow-y-scroll h-full">
          <DialogHeader>
            <DialogTitle>{selectedSong?.name}</DialogTitle>
          </DialogHeader>

          {selectedSong && chordProgressions.success && (
            <SongsDialogContent
              selectedChordProgression={
                chordProgressions.value.find((cp) =>
                  selectedSong.progressionIds.includes(cp.id)
                ) || { id: "123", is_major: true, numerals: "1234" }
              }
              selectedSong={selectedSong}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
