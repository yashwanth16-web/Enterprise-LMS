from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.student import Student
from app.models.course import Course
from app.models.instructor import Instructor
from app.models.enrollment import Enrollment


def get_dashboard_stats(db: Session):
    return {
        "total_students": db.query(Student).count(),
        "total_courses": db.query(Course).count(),
        "total_instructors": db.query(Instructor).count(),
        "total_enrollments": db.query(Enrollment).count(),
    }


def get_enrollment_trend(db: Session):
    rows = (
        db.query(
            func.to_char(
                Enrollment.enrolled_at,
                "Mon"
            ).label("month"),
            func.count(
                Enrollment.id
            ).label("enrollments"),
        )
        .group_by(
            func.to_char(
                Enrollment.enrolled_at,
                "Mon"
            )
        )
        .order_by(
            func.min(
                Enrollment.enrolled_at
            )
        )
        .all()
    )

    return [
        {
            "month": row.month,
            "enrollments": row.enrollments,
        }
        for row in rows
    ]


def get_course_categories(db: Session):
    rows = (
        db.query(
            Course.category,
            func.count(
                Course.id
            ).label("total"),
        )
        .group_by(
            Course.category
        )
        .all()
    )

    return [
        {
            "category": row.category,
            "total": row.total,
        }
        for row in rows
    ]


def get_recent_activity(db: Session):
    return (
        db.query(Enrollment)
        .order_by(
            Enrollment.enrolled_at.desc()
        )
        .limit(10)
        .all()
    )