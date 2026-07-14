from sqlalchemy.orm import Session

from app.models.lesson import Lesson
from app.schemas.lesson import LessonCreate, LessonUpdate


def create_lesson(db: Session, lesson: LessonCreate):

    new_lesson = Lesson(
        title=lesson.title,
        description=lesson.description,
        video_url=lesson.video_url,
        duration=lesson.duration,
        order_number=lesson.order_number,
        course_id=lesson.course_id
    )

    db.add(new_lesson)
    db.commit()
    db.refresh(new_lesson)

    return new_lesson


def get_lessons_by_course(db: Session, course_id: int):

    return (
        db.query(Lesson)
        .filter(Lesson.course_id == course_id)
        .order_by(Lesson.order_number)
        .all()
    )


def get_lesson_by_id(db: Session, lesson_id: int):

    return (
        db.query(Lesson)
        .filter(Lesson.id == lesson_id)
        .first()
    )


def update_lesson(
    db: Session,
    lesson_id: int,
    lesson_data: LessonUpdate
):

    lesson = (
        db.query(Lesson)
        .filter(Lesson.id == lesson_id)
        .first()
    )

    if not lesson:
        return None

    lesson.title = lesson_data.title
    lesson.description = lesson_data.description
    lesson.video_url = lesson_data.video_url
    lesson.duration = lesson_data.duration
    lesson.order_number = lesson_data.order_number

    db.commit()
    db.refresh(lesson)

    return lesson


def delete_lesson(db: Session, lesson_id: int):

    lesson = (
        db.query(Lesson)
        .filter(Lesson.id == lesson_id)
        .first()
    )

    if not lesson:
        return False

    db.delete(lesson)
    db.commit()

    return True