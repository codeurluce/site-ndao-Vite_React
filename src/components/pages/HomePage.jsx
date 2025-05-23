import React from 'react';
import { HeroSection } from '../home/HomeSection';
// import { AnnouncementsSlider } from '../components/home/AnnouncementsSlider';
// import { DailyReadings } from '../components/home/DailyReadings';
// import { PhotoGallery } from '../components/home/PhotoGallery';
import { PriestSchedule } from '../home/PriestSchedule';

export default function HomePage() {
  return (
    <div>
      {/*<HeroSection />
       <AnnouncementsSlider />
      <DailyReadings />
      <PhotoGallery /> */}
      <PriestSchedule />
    </div>
  );
}