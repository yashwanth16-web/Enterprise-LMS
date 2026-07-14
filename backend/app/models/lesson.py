from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.database import Base


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    description = Column(String(1000), nullable=True)

    video_url = Column(String(500), nullable=True)

    duration = Column(Integer, default=0)

    order_number = Column(Integer, default=1)

    course_id = Column(
        Integer,
        ForeignKey("courses.id"),
        nullable=False
    )

    course = relationship("Course")