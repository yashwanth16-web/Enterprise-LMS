from sqlalchemy.orm import Session

from app.models.course import Course
from app.models.lesson import Lesson
from app.models.student import Student
from app.models.instructor import Instructor


def global_search(db: Session, query: str):
    results = []

    # Courses
    courses = (
        db.query(Course)
        .filter(Course.title.ilike(f"%{query}%"))
        .limit(5)
        .all()
    )

    for course in courses:
        results.append(
            {
                "id": course.id,
                "title": course.title,
                "type": "Course",
                "url": f"/dashboard/courses/{course.id}",
            }
        )

    # Lessons
    lessons = (
        db.query(Lesson)
        .filter(Lesson.title.ilike(f"%{query}%"))
        .limit(5)
        .all()
    )

    for lesson in lessons:
        results.append(
            {
                "id": lesson.id,
                "title": lesson.title,
                "type": "Lesson",
                "url": f"/dashboard/lessons/{lesson.id}",
            }
        )

    # Students
    students = (
        db.query(Student)
        .filter(Student.name.ilike(f"%{query}%"))
        .limit(5)
        .all()
    )

    for student in students:
        results.append(
            {
                "id": student.id,
                "title": student.name,
                "type": "Student",
                "url": f"/dashboard/students/{student.id}",
            }
        )

    # Instructors
    instructors = (
        db.query(Instructor)
        .filter(Instructor.name.ilike(f"%{query}%"))
        .limit(5)
        .all()
    )

    for instructor in instructors:
        results.append(
            {
                "id": instructor.id,
                "title": instructor.name,
                "type": "Instructor",
                "url": f"/dashboard/instructors/{instructor.id}",
            }
        )

    return results