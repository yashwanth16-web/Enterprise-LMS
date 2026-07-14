from sqlalchemy.orm import Session

from app.models.student import Student
from app.models.course import Course
from app.models.lesson import Lesson
from app.models.instructor import Instructor
from app.models.enrollment import Enrollment


def get_notifications(db: Session):
    notifications = []

    # Recent Enrollments
    enrollments = (
        db.query(Enrollment)
        .order_by(Enrollment.enrolled_at.desc())
        .limit(5)
        .all()
    )

    for enrollment in enrollments:
        notifications.append(
            {
                "id": enrollment.id,
                "title": "New Enrollment",
                "description": f"Student #{enrollment.student_id} enrolled in Course #{enrollment.course_id}",
                "type": "Enrollment",
                "created_at": enrollment.enrolled_at,
            }
        )

    # Recent Courses
    courses = db.query(Course).order_by(Course.id.desc()).limit(3).all()

    for course in courses:
        notifications.append(
            {
                "id": 1000 + course.id,
                "title": "New Course",
                "description": f"{course.title} added",
                "type": "Course",
                "created_at": enrollments[0].enrolled_at if enrollments else None,
            }
        )

    # Recent Lessons
    lessons = db.query(Lesson).order_by(Lesson.id.desc()).limit(3).all()

    for lesson in lessons:
        notifications.append(
            {
                "id": 2000 + lesson.id,
                "title": "Lesson Added",
                "description": lesson.title,
                "type": "Lesson",
                "created_at": enrollments[0].enrolled_at if enrollments else None,
            }
        )

    # Recent Instructors
    instructors = (
        db.query(Instructor)
        .order_by(Instructor.id.desc())
        .limit(3)
        .all()
    )

    for instructor in instructors:
        notifications.append(
            {
                "id": 3000 + instructor.id,
                "title": "Instructor Added",
                "description": instructor.name,
                "type": "Instructor",
                "created_at": enrollments[0].enrolled_at if enrollments else None,
            }
        )

    notifications.sort(
        key=lambda x: x["created_at"] or 0,
        reverse=True,
    )

    return notifications[:10]