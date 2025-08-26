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
import { Song } from "@/validators/song.validator";

export default function SongsTable() {
  const songs: Song[] = [
    {
      id: "1",
      name: "Midnight Vibes",
      key: "C Major",
      tempo: "140",
      chords: "C,Am,F,G",
      youtubeURL: "https://youtube.com/watch?v=midnight1",
      artistIds: ["artist1"],
      progressionIds: ["prog1"],
      albumId: "album1",
    },
    {
      id: "2",
      name: "Sunset Dreams",
      key: "G Major",
      tempo: "128",
      chords: "G,Em,C,D",
      youtubeURL: "https://youtube.com/watch?v=sunset2",
      artistIds: ["artist2"],
      progressionIds: ["prog2"],
      albumId: "album2",
    },
    {
      id: "3",
      name: "Urban Nights",
      key: "F Minor",
      tempo: "95",
      chords: "Fm,Ab,Db,C",
      youtubeURL: "https://youtube.com/watch?v=urban3",
      artistIds: ["artist3"],
      progressionIds: ["prog3"],
      albumId: "album3",
    },
    {
      id: "4",
      name: "Ocean Waves",
      key: "D Major",
      tempo: "120",
      chords: "D,Bm,G,A",
      youtubeURL: "https://youtube.com/watch?v=ocean4",
      artistIds: ["artist4"],
      progressionIds: ["prog4"],
      albumId: "album4",
    },
    {
      id: "5",
      name: "City Lights",
      key: "A Minor",
      tempo: "110",
      chords: "Am,F,C,G",
      youtubeURL: "https://youtube.com/watch?v=city5",
      artistIds: ["artist5"],
      progressionIds: ["prog5"],
      albumId: "album5",
    },
    {
      id: "6",
      name: "Desert Wind",
      key: "E Major",
      tempo: "135",
      chords: "E,C#m,A,B",
      youtubeURL: "https://youtube.com/watch?v=desert6",
      artistIds: ["artist6"],
      progressionIds: ["prog6"],
      albumId: "album6",
    },
    {
      id: "7",
      name: "Neon Dreams",
      key: "B Minor",
      tempo: "150",
      chords: "Bm,G,D,A",
      youtubeURL: "https://youtube.com/watch?v=neon7",
      artistIds: ["artist7"],
      progressionIds: ["prog7"],
      albumId: "album7",
    },
    {
      id: "8",
      name: "Mountain Echo",
      key: "C Minor",
      tempo: "105",
      chords: "Cm,Eb,Ab,Bb",
      youtubeURL: "https://youtube.com/watch?v=mountain8",
      artistIds: ["artist8"],
      progressionIds: ["prog8"],
      albumId: "album8",
    },
    {
      id: "9",
      name: "Electric Soul",
      key: "D Minor",
      tempo: "125",
      chords: "Dm,Bb,F,C",
      youtubeURL: "https://youtube.com/watch?v=electric9",
      artistIds: ["artist9"],
      progressionIds: ["prog9"],
      albumId: "album9",
    },
    {
      id: "10",
      name: "Golden Hour",
      key: "G Minor",
      tempo: "115",
      chords: "Gm,Bb,Eb,F",
      youtubeURL: "https://youtube.com/watch?v=golden10",
      artistIds: ["artist10"],
      progressionIds: ["prog10"],
      albumId: "album10",
    },
    {
      id: "11",
      name: "Midnight Express",
      key: "A Major",
      tempo: "130",
      chords: "A,F#m,D,E",
      youtubeURL: "https://youtube.com/watch?v=midnight11",
      artistIds: ["artist11"],
      progressionIds: ["prog11"],
      albumId: "album11",
    },
    {
      id: "12",
      name: "Silent Storm",
      key: "F Major",
      tempo: "100",
      chords: "F,Dm,Bb,C",
      youtubeURL: "https://youtube.com/watch?v=silent12",
      artistIds: ["artist12"],
      progressionIds: ["prog12"],
      albumId: "album12",
    },
    {
      id: "13",
      name: "Crystal Clear",
      key: "E Minor",
      tempo: "145",
      chords: "Em,C,G,D",
      youtubeURL: "https://youtube.com/watch?v=crystal13",
      artistIds: ["artist13"],
      progressionIds: ["prog13"],
      albumId: "album13",
    },
    {
      id: "14",
      name: "Rustic Roads",
      key: "Bb Major",
      tempo: "118",
      chords: "Bb,Gm,Eb,F",
      youtubeURL: "https://youtube.com/watch?v=rustic14",
      artistIds: ["artist14"],
      progressionIds: ["prog14"],
      albumId: "album14",
    },
    {
      id: "15",
      name: "Digital Rain",
      key: "C# Minor",
      tempo: "155",
      chords: "C#m,A,E,B",
      youtubeURL: "https://youtube.com/watch?v=digital15",
      artistIds: ["artist15"],
      progressionIds: ["prog15"],
      albumId: "album15",
    },
  ];

  const rows = [
    "Song Name",
    "Key",
    "Tempo",
    "Chords",
    "Chord Progression",
    "YouTube",
  ];

  return (
    <Table className="overflow-scroll w-full">
      <TableCaption>Click any row to see more details.</TableCaption>
      <TableHeader>
        <TableRow>
          {rows.map((header, index) => (
            <TableHead key={index} className={index === 0 ? "" : ""}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((song) => (
          <TableRow key={song.id}>
            <TableCell className="font-medium">{song.name}</TableCell>
            <TableCell>{song.key}</TableCell>
            <TableCell>{song.tempo} BPM</TableCell>
            <TableCell>{song.chords}</TableCell>
            <TableCell>{song.chords}</TableCell>
            <TableCell>
              <a
                href={song.youtubeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Watch
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={rows.length - 1}>Total Songs</TableCell>
          <TableCell className="text-right">{songs.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
