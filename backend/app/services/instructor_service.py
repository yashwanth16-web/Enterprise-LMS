from sqlalchemy.orm import Session

from app.models.instructor import Instructor
from app.schemas.instructor import (
    InstructorCreate,
    InstructorUpdate,
)


def create_instructor(
    db: Session,
    instructor: InstructorCreate,
):
    new_instructor = Instructor(
        name=instructor.name,
        email=instructor.email,
        phone=instructor.phone,
        specialization=instructor.specialization,
        status=instructor.status,
    )

    db.add(new_instructor)
    db.commit()
    db.refresh(new_instructor)

    return new_instructor


def get_all_instructors(db: Session):
    return db.query(Instructor).all()


def get_instructor_by_id(
    db: Session,
    instructor_id: int,
):
    return (
        db.query(Instructor)
        .filter(Instructor.id == instructor_id)
        .first()
    )


def update_instructor(
    db: Session,
    instructor_id: int,
    instructor: InstructorUpdate,
):
    db_instructor = get_instructor_by_id(
        db,
        instructor_id,
    )

    if not db_instructor:
        return None

    db_instructor.name = instructor.name
    db_instructor.email = instructor.email
    db_instructor.phone = instructor.phone
    db_instructor.specialization = instructor.specialization
    db_instructor.status = instructor.status

    db.commit()
    db.refresh(db_instructor)

    return db_instructor


def delete_instructor(
    db: Session,
    instructor_id: int,
):
    db_instructor = get_instructor_by_id(
        db,
        instructor_id,
    )

    if not db_instructor:
        return None

    db.delete(db_instructor)
    db.commit()

    return True