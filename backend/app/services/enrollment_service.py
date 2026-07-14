from sqlalchemy.orm import Session

from app.models.enrollment import Enrollment
from app.schemas.enrollment import EnrollmentCreate, EnrollmentUpdate


def create_enrollment(db: Session, enrollment: EnrollmentCreate):
    obj = Enrollment(
        student_id=enrollment.student_id,
        course_id=enrollment.course_id,
        status=enrollment.status,
    )

    db.add(obj)
    db.commit()
    db.refresh(obj)

    return obj


def get_all_enrollments(db: Session):
    return db.query(Enrollment).all()


def get_enrollment_by_id(db: Session, enrollment_id: int):
    return (
        db.query(Enrollment)
        .filter(Enrollment.id == enrollment_id)
        .first()
    )


def update_enrollment(
    db: Session,
    enrollment_id: int,
    enrollment: EnrollmentUpdate,
):
    obj = get_enrollment_by_id(db, enrollment_id)

    if not obj:
        return None

    obj.status = enrollment.status

    db.commit()
    db.refresh(obj)

    return obj


def delete_enrollment(
    db: Session,
    enrollment_id: int,
):
    obj = get_enrollment_by_id(db, enrollment_id)

    if not obj:
        return False

    db.delete(obj)
    db.commit()

    return True