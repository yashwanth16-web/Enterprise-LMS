from sqlalchemy import Column, Integer, String

from app.db.database import Base


class Instructor(Base):
    __tablename__ = "instructors"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(200), nullable=False)

    email = Column(String(200), unique=True, nullable=False)

    phone = Column(String(20), nullable=False)

    specialization = Column(String(200), nullable=False)

    status = Column(String(50), default="Active")