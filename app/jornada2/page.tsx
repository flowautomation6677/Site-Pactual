import ScrollStoryFrames from "@/components/sections/ScrollStoryFrames";

export default function Jornada2Page() {
  return (
    <main className="min-h-screen">
      <ScrollStoryFrames 
        frameCount={150}
        startIndex={1}
        imagePrefix="/frames/frame_"
        imageExtension=".webp"
        padLength={3}
      />
    </main>
  );
}

