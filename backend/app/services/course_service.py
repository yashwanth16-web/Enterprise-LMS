from sqlalchemy.orm import Session

from app.models.course import Course
from app.schemas.course import CourseCreate


def create_course(db: Session, course: CourseCreate):

    new_course = Course(
        title=course.title,
        description=course.description,
        category=course.category,
        price=course.price,
        thumbnail=course.thumbnail,
        instructor_id=1
    )

    db.add(new_course)

    db.commit()

    db.refresh(new_course)

    return new_course


def get_all_courses(db: Session):

    return db.query(Course).all()
def get_course_by_id(db: Session, course_id: int):
    return db.query(Course).filter(
        Course.id == course_id
    ).first()
def update_course(db: Session, course_id: int, course_data):

    course = db.query(Course).filter(
        Course.id == course_id
    ).first()

    if not course:
        return None

    course.title = course_data.title
    course.description = course_data.description
    course.category = course_data.category
    course.price = course_data.price
    course.thumbnail = course_data.thumbnail

    db.commit()
    db.refresh(course)

    return course
def delete_course(db: Session, course_id: int):

    course = db.query(Course).filter(
        Course.id == course_id
    ).first()

    if not course:
        return False

    db.delete(course)
    db.commit()

    return True