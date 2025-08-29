"use client";
import CPInEveryKeyTable from "@/components/Dumb/Table/CPInEveryKeyTable";
import { getYouTubeVideoId } from "@/utils/youtube.utils";
import { ChordProgression } from "@/validators/chordProgression.validator";
import { Song } from "@/validators/song.validator";

type Props = {
  selectedSong: Song;
  selectedChordProgression: ChordProgression;
};

export default function SongsDialogContent({
  selectedSong,
  selectedChordProgression,
}: Props) {
  return (
    <div className="space-y-6">
      {/* YouTube Video */}
      <div>
        <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide mb-3">
          Video
        </h4>
        {getYouTubeVideoId(selectedSong.youtubeURL) ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
            <span>{selectedChordProgression.numerals}</span>
          </div>
        </div>
      </div>

      {/* Songs in every key */}

      <CPInEveryKeyTable
        {...selectedChordProgression}
        selectedKey={selectedSong.key}
      />
    </div>
  );
}
