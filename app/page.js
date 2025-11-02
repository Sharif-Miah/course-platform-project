import { Button } from '@/components/ui/button';
import { getCourses } from '@/queries/courses';

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);

  return (
    <div>
      <Button>Hello Shadcn Ui Button</Button>
    </div>
  );
}
