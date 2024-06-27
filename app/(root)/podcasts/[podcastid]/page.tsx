"use client";

import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import React from "react";

const PodcastDetails = ({ params: { podcastid } }: { params: { podcastid: Id<"podcasts"> } }) => {
  debugger;
  const podcast = useQuery(api.podcasts.getPodcastById, { podcastid });
  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className=" text-20 font-bold text-white-1">Currently playing</h1>

        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
        </figure>
        <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2>
      </header>

      <PodcastDetailPlayer />

      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {podcast?.podcastDescription}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1"> Transcription</h1>
          <p className="text-16 font-medium text-white-2">{podcast?.voicePrompt}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1"> Thumbnail Prompt</h1>
          <p className="text-16 font-medium text-white-2">{podcast?.imagePrompt}</p>
        </div>
      </div>

      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Similar Podcasts</h1>
      </section>
    </section>
  );
};

export default PodcastDetails;