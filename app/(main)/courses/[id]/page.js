import CourseDetails from './_components/CourseDetails';
import Testimonials from './_components/Testimonials';
import RelatedCourses from './_components/RelatedCourses';
import CourseDetailsIntro from './_components/CourseDetailsIntro';

const SingleCoursePage = () => {
  return (
    <>
      <CourseDetailsIntro />
      <CourseDetails />
      {/* Testimonials */}
      <Testimonials />
      {/* Releated Course */}
      <RelatedCourses />
      {/* Authors */}
      {/* https://avatars.githubusercontent.com/u/1416832?v=4 */}
      {/* https://avatars.githubusercontent.com/u/3633137?v=4 */}
    </>
  );
};
export default SingleCoursePage;
