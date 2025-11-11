import { BookCheck } from 'lucide-react';
import { Clock10 } from 'lucide-react';
import { Radio } from 'lucide-react';

import { Video } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { FileQuestion } from 'lucide-react';

import { Tv } from 'lucide-react';
import { StickyNote } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import CourseModuleList from './module/CourseModuleList';

const CourseCarriculum = ({ course }) => {
  const totalDuration = course?.modules.reduce(function (acc, obj) {
    return acc + obj.duration;
  }, 0);

  console.log('all course', totalDuration);

  return (
    <div>
      <div class='flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm'>
        <span className='flex items-center gap-1.5'>
          <BookCheck className='w-4 h-4' />
          {course?.modules?.length} Chapters
        </span>
        <span className='flex items-center gap-1.5'>
          <Clock10 className='w-4 h-4' />
          {(totalDuration / 60).toPrecision(2)} Hours
        </span>
        <span className='flex items-center gap-1.5'>
          <Radio className='w-4 h-4' />4 Live Class
        </span>
      </div>

      {/* contents */}
      <Accordion
        defaultValue={['item-1', 'item-2', 'item-3']}
        type='multiple'
        collapsible
        className='w-full'>
        {course?.modules &&
          course?.modules.map((module) => (
            <CourseModuleList
              key={module.id}
              module={module}
            />
          ))}
      </Accordion>
    </div>
  );
};

export default CourseCarriculum;
