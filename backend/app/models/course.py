from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey
from sqlalchemy.orm import relationship

from app.db.database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200), nullable=False)

    description = Column(Text, nullable=False)

    category = Column(String(100), nullable=False)

    price = Column(Float, default=0)

    thumbnail = Column(String(500), nullable=True)

    instructor_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    instructor = relationship("User")