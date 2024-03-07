
import RenderSteps from "./RenderSteps"

export default function AddCourse() {
    return  (
        <div className="text-richblack-5 flex gap-x-5">
            <div className="w-[70%]">
                <h1>Add Course</h1>
                <div>
                    <RenderSteps />
                </div>
            </div>
            <div className="w-[30%] bg-richblack-700 h-fit p-2 rounded-md flex flex-col gap-3">
                <p className="font-bold text-md text-yellow-25 ">Code Upload Tips</p>
                <ol className="text-richblack-100 text-sm flex flex-col gap-2">
                    <li>Set the Course Price option or make it free.</li>
                    <li>Standard size for the course thumbnail is 1024x576.</li>
                    <li>Video section controls the course overview video.</li>
                    <li>Course Builder is where you create & organize a course.</li>
                    <li>
                        Add Topics in the Course Builder section to create lessons,
                        quizzes, and assignments.
                    </li>
                    <li>
                        Information from the Additional Data section shows up on the
                        course single page.
                    </li>
                    <li>Make Announcements to notify any important</li>
                    <li>Notes to all enrolled students at once.</li>
                </ol>
            </div>
        </div>
    )
}