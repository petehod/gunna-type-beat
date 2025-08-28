// Helper function to extract YouTube video ID from URL
export const getYouTubeVideoId = (url: string) => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
