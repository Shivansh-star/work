import { Suspense } from 'react';
import { createClient } from '@/lib/supabase';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroTile } from '@/components/HeroTile';
import { ActivityTile } from '@/components/ActivityTile';
import { CourseCard } from '@/components/CourseCard';
import { SkeletonCard } from '@/components/SkeletonCard';
import { Course } from '@/types';

async function CoursesData() {
  const supabase = await createClient();
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    throw error; // Let error.tsx handle graceful fallback
  }

  return (
    <>
      {courses?.map((course: Course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-6">
      <BentoGrid>
        <HeroTile name="Explorer" />
        <ActivityTile />
      </BentoGrid>
      
      <div className="pt-2 pb-2">
        <h2 className="text-xl font-semibold text-white/90">Your Learning Paths</h2>
      </div>

      <BentoGrid>
        <Suspense fallback={
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        }>
          <CoursesData />
        </Suspense>
      </BentoGrid>
    </div>
  );
}
