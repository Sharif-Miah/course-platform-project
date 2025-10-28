import { Button } from '@/components/ui/button';
import { getCourse } from '@/queries/courses';

export default async function Home() {
  const courses = await getCourse();
  console.log(courses);

  return (
    <div>
      <Button>Hello Shadcn Ui Button</Button>
    </div>
  );
}
