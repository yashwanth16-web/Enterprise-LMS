from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime

from app.db.database import Base


class Enrollment(Base):
    __tablename__ = "enrollments"

    id = Column(Integer, primary_key=True, index=True)

    student_id = Column(
        Integer,
        ForeignKey("students.id"),
    )

    course_id = Column(
        Integer,
        ForeignKey("courses.id"),
    )

    status = Column(
        String,
        default="Active",
    )

    enrolled_at = Column(
        DateTime,
        default=datetime.utcnow,
    )