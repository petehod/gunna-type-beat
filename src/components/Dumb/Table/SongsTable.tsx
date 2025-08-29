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
import { getYouTubeVideoId } from "@/utils/youtube.utils";
import { useChordProgressionByIds } from "@/hooks/useChordProgressions";
import { formatChordProgression } from "@/utils/chord-progression.utils";

export default function SongsTable({ songs }: { songs: Song[] }) {
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[0] | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (song: (typeof songs)[0]) => {
    setSelectedSong(song);
    setIsDialogOpen(true);
  };

  const progressions = useChordProgressionByIds(
    songs.flatMap((song) => song.progressionIds)
  );

  return (
    <>
      <Table className="overflow-scroll w-full">
        <TableCaption>Click any row to see more details.</TableCaption>
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
                {progressions?.success &&
                  progressions?.value
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
            <TableCell colSpan={ROWS.length - 1}>Total Songs</TableCell>
            <TableCell className="text-right">{songs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedSong?.name}</DialogTitle>
          </DialogHeader>

          {selectedSong && (
            <div className="space-y-6">
              {/* YouTube Video */}
              <div>
                <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide mb-3">
                  Video
                </h4>
                {getYouTubeVideoId(selectedSong.youtubeURL) ? (
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                        selectedSong.youtubeURL
                      )}`}
                      title={`${selectedSong.name} - YouTube Video`}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500 bg-gray-100 rounded-lg">
                    <p>Invalid YouTube URL</p>
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                    Key
                  </h4>
                  <p className="text-lg">{selectedSong.key}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                    Tempo
                  </h4>
                  <p className="text-lg">{selectedSong.tempo} BPM</p>
                </div>
              </div>

              {/* Chords */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide mb-2">
                    Chords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSong.chords.split(",").map((chord, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {chord.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide mb-2">
                    Numerals
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {progressions?.success &&
                      progressions?.value
                        ?.find((progression) =>
                          selectedSong.progressionIds.includes(progression.id)
                        )
                        ?.numerals.split(",")
                        .map((numeral) => (
                          <span key={numeral}>{numeral.trim()}</span>
                        ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Song ID:</span>{" "}
                  {selectedSong.id}
                </div>
                <div>
                  <span className="font-medium">Album ID:</span>{" "}
                  {selectedSong.albumId}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
