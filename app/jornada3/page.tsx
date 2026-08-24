import ScrollStoryFrames from "@/components/sections/ScrollStoryFrames";

export default function Jornada3Page() {
  return (
    <main className="min-h-screen">
      <ScrollStoryFrames 
        frameCount={100}
        startIndex={1}
        imagePrefix="/teste/frames_10fps/frame_"
        imageExtension=".webp"
        padLength={3}
      />
    </main>
  );
}
